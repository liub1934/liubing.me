<template>
  <div
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
      :accept="accept"
      :multiple="multiple"
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
defineProps<{
  accept?: string
  multiple?: boolean
}>()
const emit = defineEmits<{
  change: [data: FileList]
}>()

function getFileList(files: FileList) {
  emit('change', files)
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
