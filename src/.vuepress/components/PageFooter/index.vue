<template>
  <div class="vp-footer-wrapper">
    <div class="vp-footer" v-html="footerContent" />
  </div>
</template>

<script lang="ts" setup>
import type { ThemeNormalPageFrontmatter } from 'vuepress-theme-hope'
import { useData } from '@theme-hope/composables/useData'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { isString } from 'vuepress/shared'
import { BlogStartDate, calculateRuntime } from '@/utils'
import '@theme-hope/styles/base/page-footer.scss'

let timerInterval: IntervalHandle | null
const { frontmatter, themeLocale } = useData<ThemeNormalPageFrontmatter>()
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
