<template>
  <div class="bing-canvas-wrapper">
    <canvas ref="canvas" class="bing-canvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const canvas = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  const spline = new Application(canvas.value!)
  spline.load('/assets/model/scene.splinecode').then(() => {
    const $avatar = document.querySelector('.vp-blogger-avatar') as HTMLElement
    if ($avatar) {
      $avatar.style.visibility = 'hidden'
    }
  })
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
