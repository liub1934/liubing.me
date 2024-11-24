<template>
  <div class="generator-option">
    <div class="title text-24 font-600">
      选项
    </div>
    <n-radio-group v-model:value="modelValue">
      <n-radio
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :disabled="getDisabled(item.value)"
      >
        {{ item.label }}
      </n-radio>
    </n-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { inject, watch } from 'vue'
import {
  DirectionKey,
  type DirectionType,
  type TriangleType,
} from './generator'

interface Option {
  label: string
  value: TriangleType
}

const modelValue = defineModel<TriangleType>('value', { required: true })
const direction = inject(DirectionKey)!
const options: Option[] = [
  {
    label: '等边',
    value: 'equilateral',
  },
  {
    label: '等腰',
    value: 'isosceles',
  },
  {
    label: '不等边',
    value: 'scalene',
  },
]
const directions: DirectionType[] = [
  'topRight',
  'bottomRight',
  'bottomLeft',
  'topLeft',
]

watch(direction, () => {
  if (directions.includes(direction.value)) {
    if (modelValue.value === 'equilateral') {
      modelValue.value = 'isosceles'
    }
  }
})

function getDisabled(name: TriangleType) {
  if (directions.includes(direction.value)) {
    if (name === 'equilateral') {
      return true
    }
  }
  return false
}
</script>

<style lang="scss" scoped></style>
