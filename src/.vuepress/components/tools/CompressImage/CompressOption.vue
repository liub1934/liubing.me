<template>
  <div id="CompressOption">
    <div class="font-600">
      图片压缩格式
    </div>
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

    <div class="mt-20 flex items-center font-600">
      图片输出尺寸
      <n-popover placement="right">
        <template #trigger>
          <span class="i-solar-info-circle-bold" />
        </template>
        如果只输入宽度或者高度，另外一项会自动计算
      </n-popover>
    </div>
    <n-space vertical>
      <div class="flex items-center">
        <div class="text-16">
          图片宽度：
        </div>
        <n-input-number v-model:value="modelSize.width" placeholder="请输入" :min="1">
          <template #suffix>
            px
          </template>
        </n-input-number>
      </div>
      <div class="flex items-center">
        <div class="text-16">
          图片高度：
        </div>
        <n-input-number v-model:value="modelSize.height" placeholder="请输入" :min="1">
          <template #suffix>
            px
          </template>
        </n-input-number>
      </div>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import type { CompressSize, OutputType } from './interface'

interface OutputItem {
  label: string
  value: OutputType
  tip: string
}

const modelChecked = defineModel<OutputType>('checked', { required: true })
const modelSize = defineModel<CompressSize>('size', { required: true })
const outputs: OutputItem[] = [
  {
    label: 'WebP',
    value: 'webp',
    tip: '压缩率较高，大多数浏览器支持',
  },
  {
    label: 'AVIF',
    value: 'avif',
    tip: '压缩率极高，部分现代浏览器支持',
  },
  {
    label: 'JPEG',
    value: 'jpeg',
    tip: '兼容性最好，所有浏览器支持',
  },
]

function handleChange(value: OutputType) {
  modelChecked.value = value
}
</script>
