<template>
  <div
    id="CompressUpload"
    class="border border-dashed border-border rounded-6 p-10 relative hover:border-primary transition-all"
  >
    <label
      class="absolute size-full top-0 left-0 z-1 cursor-pointer"
      for="image-uploader"
    />
    <input
      id="image-uploader"
      class="hidden"
      type="file"
      accept="image/png,image/jpeg,image/avif"
      multiple
      @change="handleChange"
    />

    <div class="text-center">
      <n-text depth="3">
        <span class="i-mage-image-upload text-40"></span>
      </n-text>
    </div>
    <n-p class="text-center text-14 mt-0" depth="3">
      拖拽文件到该区域或点击选择图片
    </n-p>
  </div>
</template>

<script lang="ts" setup>
import { getFileName } from '@/utils'
import type { UploadImage } from './interface'
import { uniqueId } from 'lodash-es'

const emit = defineEmits<{
  change: [data: UploadImage[]]
}>()

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    const list: UploadImage[] = Array.from(target.files).map((file) => {
      return {
        file,
        id: uniqueId(),
        name: file.name,
        fileName: getFileName(file.name),
        size: file.size,
        type: file.type,
        src: URL.createObjectURL(file)
      }
    })
    emit('change', list)
  }
}
</script>

<style lang="less" scoped></style>
