<template>
  <div class="bing-canvas-wrapper">
    <canvas ref="canvas" class="bing-canvas" />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const spline = ref()
const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  import('@splinetool/runtime').then((m) => {
    const { Application } = m
    spline.value = new Application(canvas.value!)
    spline.value.load('/assets/model/scene.splinecode').then(() => {
      const $avatar = document.querySelector(
        '.vp-blogger-avatar',
      ) as HTMLElement
      if ($avatar) {
        $avatar.style.visibility = 'hidden'
      }
    })
  })
})

onBeforeUnmount(() => {
  if (spline.value) {
    spline.value.stop()
    spline.value = null
  }
})
</script>

<style lang="scss" scoped>
.bing-canvas-wrapper {
  width: 14rem;
  height: 14rem;
  position: absolute;
  left: 50%;
  top: -1.8rem;
  transform: translateX(-50%);
}
</style>
