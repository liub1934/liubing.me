<template>
  <div class="generator-color">
    <div class="title text-24 font-600">颜色</div>
    <div class="flex items-center mb-5">
      <div class="text-14 w-30 text-right pr-10">类型</div>
      <el-radio-group v-model="modelColor.type" @change="colorTypeChange">
        <el-radio
          v-for="item in colorTypes"
          :key="item.value"
          :value="item.value"
        >
          {{ item.label }}
        </el-radio>
      </el-radio-group>
    </div>
    <div class="flex items-center mb-5">
      <div class="text-14 w-30 text-right pr-10">颜色</div>
      {{ modelColor.color }}
      <el-color-picker
        v-if="modelColor.type === 'hex'"
        v-model="modelColor.color"
      />
      <el-color-picker
        v-if="modelColor.type === 'rgba'"
        v-model="modelColor.color"
        :show-alpha="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { colord } from 'colord'
import type { ColorType, ColorValue } from './generator'

interface colorItem {
  label: string
  value: ColorType
}

const modelColor = defineModel<ColorValue>('color', { required: true })
const colorTypes: colorItem[] = [
  {
    label: 'HEX',
    value: 'hex'
  },
  {
    label: 'RGBA',
    value: 'rgba'
  }
]

function colorTypeChange() {
  const { r, g, b, a } = colord(modelColor.value.color).toRgb()
  switch (modelColor.value.type) {
    case 'hex':
      modelColor.value.color = colord({ r, g, b, a: 1 }).toHex()
      break
    case 'rgba':
      modelColor.value.color = `rgba(${r}, ${g}, ${b}, ${a})`
      break
  }
}
</script>

<style lang="scss" scoped></style>
