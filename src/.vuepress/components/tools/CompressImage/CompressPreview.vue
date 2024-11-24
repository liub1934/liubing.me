<template>
  <div id="CompressPreview" class="mb-10">
    <div v-if="src && compressedSrc" class="flex justify-between text-14">
      <span>压缩前</span>
      <span>压缩后</span>
    </div>
    <div class="h-250 overflow-hidden rounded-6">
      <img
        v-if="src && !compressedSrc"
        class="size-full object-cover"
        :src="src"
      >
      <n-split
        v-if="src && compressedSrc"
        v-model:size="split"
        :resize-trigger-size="2"
        class="relative h-full"
      >
        <template #1>
          <div ref="leftBox" class="size-full">
            <img
              class="absolute left-0 top-0 z-1 size-full object-cover"
              :src="src"
              :style="{
                clip: `rect(auto, ${width}px, auto, auto)`,
              }"
            >
          </div>
        </template>
        <template #2>
          <div class="size-full">
            <img
              class="absolute left-0 top-0 size-full object-cover"
              :src="compressedSrc"
            >
          </div>
        </template>
        <template #resize-trigger>
          <div class="relative z-1 h-full bg-primary">
            <div
              class="size-40 flex items-center border-2 border-primary rounded-1/2 border-solid absolute-center"
            >
              <span class="i-ri-arrow-left-s-fill text-22 color-primary" />
              <span
                class="i-ri-arrow-right-s-fill text-22 color-primary"
              />
            </div>
          </div>
        </template>
      </n-split>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue'

defineProps<{
  src: string
  compressedSrc?: string
}>()

const split = ref(0.5)
const leftBox = ref<HTMLElement>()
const { width } = useElementSize(leftBox)
</script>

<style lang="less" scoped></style>
