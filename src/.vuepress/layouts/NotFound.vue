<template>
  <NotFound>
    <div class="not-found-hint">
      <p class="error-code">404</p>
      <h1 class="error-title">页面不存在</h1>
    </div>
    <LottieWeb
      :options="options"
      @DOMLoaded="DOMLoaded"
      :style="{
        height: '50vh'
      }"
    />
  </NotFound>
</template>

<script lang="ts" setup>
import NotFound from 'vuepress-theme-hope/layouts/NotFound'
import LottieWeb from '../components/LottieWeb/index.vue'
import { ref, watch } from 'vue'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'

const { isDarkmode } = useDarkmode()
const options = ref({
  path: new URL('./NotFound.json', import.meta.url).href
})

function DOMLoaded() {
  watch(
    isDarkmode,
    () => {
      const darkFillColor = '#0d1117'
      const lightFillColor = '#ffffff'
      const queryColor = isDarkmode.value ? lightFillColor : darkFillColor
      const fillColor = isDarkmode.value ? darkFillColor : lightFillColor
      const $rectList = document.querySelectorAll(
        `.lottie-web rect[fill="${queryColor}"]`
      )
      $rectList.forEach((element) => {
        element.setAttribute('fill', fillColor)
      })
    },
    { immediate: true }
  )
}
</script>
