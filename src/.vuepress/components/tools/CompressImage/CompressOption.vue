<template>
  <div id="CompressOption">
    <div class="font-600">图片压缩格式</div>
    <n-space vertical>
      <n-radio
        v-for="item in outputs"
        :key="item.value"
        :checked="modelChecked === item.value"
        :value="item.value"
        @change="handleChange(item.value)"
      >
        {{ item.label }} <span class="color-grey">{{ item.tip }}</span>
      </n-radio>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import type { OutputType } from './interface'

interface OutputItem {
  label: string
  value: OutputType
  tip: string
}

const modelChecked = defineModel<OutputType>('checked', { required: true })
const outputs: OutputItem[] = [
  {
    label: 'WebP',
    value: 'webp',
    tip: '压缩率较高，大多数浏览器支持'
  },
  {
    label: 'AVIF',
    value: 'avif',
    tip: '压缩率极高，部分现代浏览器支持'
  },
  {
    label: 'JPEG',
    value: 'jpeg',
    tip: '兼容性最好，所有浏览器支持'
  }
]

function handleChange(value: OutputType) {
  modelChecked.value = value
}
</script>

<style lang="less" scoped></style>
