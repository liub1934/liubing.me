<template>
  <div class="vp-footer-wrapper">
    <div class="vp-footer" v-html="footerContent" />
  </div>
</template>

<script lang="ts" setup>
import type { ThemeNormalPageFrontmatter } from 'vuepress-theme-hope'
import { BlogStartDate, calculateRuntime } from '@/utils'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { usePageFrontmatter } from 'vuepress/client'
import { isString } from 'vuepress/shared'
import { useThemeLocaleData } from 'vuepress-theme-hope/client/composables/index.js'
import '@theme-hope/styles/footer.scss'

let timerInterval: IntervalHandle | null
const frontmatter = usePageFrontmatter<ThemeNormalPageFrontmatter>()
const themeLocale = useThemeLocaleData()
const $el = ref<HTMLElement | null>(null)
const startDate = BlogStartDate

const footerContent = computed(() => {
  const { footer } = frontmatter.value
  return footer === false
    ? false
    : isString(footer)
      ? footer
      : themeLocale.value.footer || ''
})

onMounted(() => {
  $el.value = document.querySelector('#running-time')
  setRuntime()
})

onBeforeUnmount(() => {
  clearTimeInterval()
})

function setRuntime() {
  if ($el.value) {
    $el.value.innerHTML = calculateRuntime(startDate)
    timerInterval = setInterval(() => {
      $el.value!.innerHTML = calculateRuntime(startDate)
    }, 1000)
  }
}
function clearTimeInterval() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}
</script>
