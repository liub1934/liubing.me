<template>
  <canvas
    :id="id"
    class="dot-lottie"
    :style="{
      width: props.width,
      height: props.height,
    }"
  />
</template>

<script lang="ts" setup>
import type { DotLottie, LoadEvent } from '@lottiefiles/dotlottie-web'
import { useDarkMode } from '@vuepress/helper/client'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  width: string
  height: string
  path: string
}>()
const emit = defineEmits<{
  (e: 'load', event: LoadEvent): void
}>()

const isDarkMode = useDarkMode()
const dotLottie = ref<DotLottie | null>(null)
const id = computed(() => {
  return `${+new Date()}-${Math.random()}`
})

watch(isDarkMode, () => {
  initDotLottie()
})

onMounted(() => {
  initDotLottie()
})

onBeforeUnmount(() => {
  dotLottie.value?.removeEventListener('load', loadEvent)
  dotLottie.value?.destroy()
  dotLottie.value = null
})

function initDotLottie() {
  import('@lottiefiles/dotlottie-web').then((res) => {
    const { DotLottie } = res
    dotLottie.value = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.getElementById(id.value) as HTMLCanvasElement,
      src: props.path,
    })
    dotLottie.value.addEventListener('load', loadEvent)
  })
}

function loadEvent(e: LoadEvent) {
  emit('load', e)
}
</script>
