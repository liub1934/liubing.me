<template>
  <div id="CompressPreview" class="mb-10">
    <div v-if="src && compressedSrc" class="flex justify-between text-14">
      <span>压缩前</span>
      <span>压缩后</span>
    </div>
    <div class="h-250 rounded-6 overflow-hidden">
      <img
        v-if="src && !compressedSrc"
        class="size-full object-cover"
        :src="src"
      />
      <n-split
        v-if="src && compressedSrc"
        v-model:size="split"
        :resize-trigger-size="2"
        class="relative h-full"
      >
        <template #1>
          <div ref="leftBox" class="size-full">
            <img
              class="size-full absolute top-0 left-0 z-1 object-cover"
              :src="src"
              :style="{
                clip: `rect(auto, ${width}px, auto, auto)`
              }"
            />
          </div>
        </template>
        <template #2>
          <div class="size-full">
            <img
              class="size-full absolute top-0 left-0 object-cover"
              :src="compressedSrc"
            />
          </div>
        </template>
        <template #resize-trigger>
          <div class="relative h-full bg-primary z-1">
            <div
              class="absolute-center size-40 rounded-1/2 border-2 border-solid border-primary flex items-center"
            >
              <span class="i-ri-arrow-left-s-fill color-primary text-22"></span>
              <span
                class="i-ri-arrow-right-s-fill color-primary text-22"
              ></span>
            </div>
          </div>
        </template>
      </n-split>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps<{
  src: string
  compressedSrc?: string
}>()

const split = ref(0.5)
const leftBox = ref<HTMLElement>()
const { width } = useElementSize(leftBox)
</script>

<style lang="less" scoped></style>
