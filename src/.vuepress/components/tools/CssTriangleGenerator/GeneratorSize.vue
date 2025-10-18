<template>
  <div class="generator-size">
    <div class="title text-24 font-600">
      大小
    </div>
    <div
      v-for="item in sizeList"
      :key="item.name"
      class="mb-5 flex items-center"
    >
      <div class="w-30 pr-10 text-right text-14">
        {{ item.label }}
      </div>
      <n-input-number
        v-model:value="modelSize[item.name]"
        class="flex-1"
        :disabled="getDisabled(item.name)"
        @update:value="changeSize(item.name)"
      >
        <template #suffix>
          {{ modelUnit }}
        </template>
      </n-input-number>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DirectionType, TriangleSize } from './generator'
import { inject, watch } from 'vue'
import {
  DirectionKey,

  TriangleKey,

} from './generator'

interface SizeItem {
  label: string
  name: keyof TriangleSize
}

const modelSize = defineModel<TriangleSize>('size', { required: true })
const modelUnit = defineModel<string>('unit', { required: true })
const direction = inject(DirectionKey)!
const triangle = inject(TriangleKey)!
const sizeList: SizeItem[] = [
  {
    label: '宽度',
    name: 'width',
  },
  {
    label: '左',
    name: 'widthLeft',
  },
  {
    label: '右',
    name: 'widthRight',
  },
  {
    label: '高度',
    name: 'height',
  },
  {
    label: '上',
    name: 'heightTop',
  },
  {
    label: '下',
    name: 'heightBottom',
  },
]

watch(direction, () => {
  changeSize()
})

function getDisabled(name: keyof TriangleSize) {
  let obj = {} as Record<keyof TriangleSize, boolean>
  switch (triangle.value) {
    case 'equilateral':
      switch (direction.value) {
        case 'top':
        case 'bottom':
          obj = {
            width: false,
            height: true,
            widthLeft: true,
            widthRight: true,
            heightTop: true,
            heightBottom: true,
          }
          break
        case 'left':
        case 'right':
          obj = {
            width: true,
            height: false,
            widthLeft: true,
            widthRight: true,
            heightTop: true,
            heightBottom: true,
          }
          break
        default:
          obj = {
            width: false,
            height: false,
            widthLeft: true,
            widthRight: true,
            heightTop: true,
            heightBottom: true,
          }
          break
      }
      break
    case 'isosceles':
      obj = {
        width: false,
        height: false,
        widthLeft: true,
        widthRight: true,
        heightTop: true,
        heightBottom: true,
      }
      break
    case 'scalene':
      switch (direction.value) {
        case 'top':
        case 'bottom':
          obj = {
            width: true,
            height: false,
            widthLeft: false,
            widthRight: false,
            heightTop: true,
            heightBottom: true,
          }
          break
        case 'left':
        case 'right':
          obj = {
            width: false,
            height: true,
            widthLeft: true,
            widthRight: true,
            heightTop: false,
            heightBottom: false,
          }
          break
        default:
          obj = {
            width: false,
            height: false,
            widthLeft: true,
            widthRight: true,
            heightTop: true,
            heightBottom: true,
          }
          break
      }
      break
  }
  return obj[name]
}

function changeSize(name?: keyof TriangleSize) {
  const directions: DirectionType[] = ['top', 'right', 'bottom', 'left']
  if (directions.includes(direction.value)) {
    if (getDisabled('width')) {
      modelSize.value.width
        = modelSize.value.widthLeft * 1 + modelSize.value.widthRight * 1
    }
    else {
      modelSize.value.widthLeft = (modelSize.value.width * 1) / 2
      modelSize.value.widthRight = (modelSize.value.width * 1) / 2
    }
    if (getDisabled('height')) {
      modelSize.value.height
        = modelSize.value.heightTop * 1 + modelSize.value.heightBottom * 1
    }
    else {
      modelSize.value.heightTop = (modelSize.value.height * 1) / 2
      modelSize.value.heightBottom = (modelSize.value.height * 1) / 2
    }
  }
  else if (triangle.value === 'isosceles') {
    if (name === 'width') {
      modelSize.value.height = modelSize.value.width
    }
    else if (name === 'height') {
      modelSize.value.width = modelSize.value.height
    }
    else if (modelSize.value.height !== modelSize.value.width) {
      modelSize.value.height = modelSize.value.width
    }
    modelSize.value.widthLeft = (modelSize.value.width * 1) / 2
    modelSize.value.widthRight = (modelSize.value.width * 1) / 2
    modelSize.value.heightTop = (modelSize.value.height * 1) / 2
    modelSize.value.heightBottom = (modelSize.value.height * 1) / 2
  }
}
</script>

<style lang="scss" scoped></style>
