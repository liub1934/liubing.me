<template>
  <div
    id="CompressUpload"
    class="relative border border-border rounded-6 border-dashed p-10 transition-all hover:border-primary"
    @dragover.prevent
    @drop.stop.prevent="handleDropStop"
  >
    <label
      class="absolute left-0 top-0 z-1 size-full cursor-pointer"
      for="image-uploader"
    />
    <input
      id="image-uploader"
      class="hidden"
      type="file"
      accept="image/png,image/jpeg,image/avif"
      multiple
      @change="handleChange"
    >

    <div class="text-center">
      <n-text depth="3">
        <span class="i-mage-image-upload text-40" />
      </n-text>
    </div>
    <n-p class="mt-0 text-center text-14" depth="3">
      拖拽文件到该区域或点击选择图片
    </n-p>
  </div>
</template>

<script lang="ts" setup>
import type { UploadImage } from './interface'
import { getFileName } from '@/utils'
import { uniqueId } from 'lodash-es'

const emit = defineEmits<{
  change: [data: UploadImage[]]
}>()

function getFileList(files: FileList) {
  const list: UploadImage[] = Array.from(files).map((file) => {
    return {
      file,
      id: uniqueId(),
      fileName: getFileName(file.name),
      src: URL.createObjectURL(file),
    }
  })
  emit('change', list)
}

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    getFileList(target.files)
  }
}

function handleDropStop(e: DragEvent) {
  const files = e.dataTransfer?.files
  if (files && files.length) {
    getFileList(files)
  }
}
</script>
