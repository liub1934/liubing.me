<template>
  <NotFound>
    <div class="not-found-hint">
      <p class="error-code">404</p>
      <h1 class="error-title">页面不存在</h1>
    </div>
    <ClientOnly>
      <DotLottie
        ref="el"
        width="40vh"
        height="40vh"
        :path="lottiePath"
        :style="{
          opacity: showDotLottie ? 1 : 0
        }"
        @load="showDotLottie = true"
      />
    </ClientOnly>
  </NotFound>
</template>

<script lang="ts" setup>
import NotFound from '@theme-hope/layouts/NotFound'
import DotLottie from '../../components/DotLottie/index.vue'
import { computed, ref } from 'vue'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'

const showDotLottie = ref(false)
const { isDarkmode } = useDarkmode()
const lottiePath = computed(() => {
  return isDarkmode.value
    ? new URL('./dark.lottie', import.meta.url).href
    : new URL('./light.lottie', import.meta.url).href
})
</script>

<style scoped lang="scss">
.not-found-hint {
  padding-bottom: 0;
}
</style>
