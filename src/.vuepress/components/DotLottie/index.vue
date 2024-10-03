<template>
  <canvas
    class="dot-lottie"
    :id="id"
    :style="{
      width: props.width,
      height: props.height
    }"
  ></canvas>
</template>

<script lang="ts" setup>
import { DotLottie, type LoadEvent } from '@lottiefiles/dotlottie-web'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'

const props = defineProps<{
  width: string
  height: string
  path: string
}>()
const emit = defineEmits<{
  (e: 'load', event: LoadEvent): void
}>()

const { isDarkmode } = useDarkmode()
const dotLottie = ref<DotLottie | null>(null)
const id = computed(() => {
  return `${+new Date()}-${Math.random()}`
})

watch(isDarkmode, () => {
  initDotLottie()
})

onMounted(() => {
  initDotLottie()
  dotLottie.value?.addEventListener('load', loadEvent)
})

onBeforeUnmount(() => {
  dotLottie.value?.removeEventListener('load', loadEvent)
  dotLottie.value?.destroy()
  dotLottie.value = null
})

function initDotLottie() {
  dotLottie.value = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.getElementById(id.value) as HTMLCanvasElement,
    src: props.path
  })
}

function loadEvent(e: LoadEvent) {
  emit('load', e)
}
</script>
