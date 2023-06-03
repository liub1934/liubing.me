<template>
  <NotFound>
    <div class="not-found-hint">
      <p class="error-code">404</p>
      <h1 class="error-title">页面不存在</h1>
    </div>
    <LottieWeb
      :options="options"
      :style="{
        height: '50vh',
        opacity: showLottieWeb ? 1 : 0,
        'margin-top': '-60px'
      }"
      @DOMLoaded="DOMLoaded"
    />
  </NotFound>
</template>

<script lang="ts" setup>
import NotFound from '@theme-hope/layouts/NotFound'
import LottieWeb from '../../components/LottieWeb/index.vue'
import { ref } from 'vue'

const showLottieWeb = ref(false)
const options = ref({
  path: new URL('./data.json', import.meta.url).href
})

function DOMLoaded() {
  const $rectList = document.querySelectorAll(
    '.lottie-web rect[fill="#ffffff"]'
  )
  $rectList.forEach((element) => {
    element.setAttribute('fill', 'transparent')
  })
  showLottieWeb.value = true
}
</script>

<style scoped lang="scss">
.not-found-hint {
  padding-bottom: 0;
}
</style>
