<template>
  <ImageUploader
    multiple
    accept="image/png,image/jpeg,image/avif"
    @change="getFileList"
  />
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
</script>
