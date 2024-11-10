<template>
  <NotFound>
    <div class="not-found-hint">
      <p class="error-code">
        404
      </p>
      <h1 class="error-title">
        页面不存在
      </h1>
    </div>
    <div class="size-40vh">
      <ClientOnly>
        <DotLottie
          width="40vh"
          height="40vh"
          :path="lottiePath"
          :style="{
            opacity: showDotLottie ? 1 : 0,
          }"
          @load="showDotLottie = true"
        />
      </ClientOnly>
    </div>
  </NotFound>
</template>

<script lang="ts" setup>
import NotFound from '@theme-hope/layouts/NotFound'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'
import { computed, ref } from 'vue'

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
