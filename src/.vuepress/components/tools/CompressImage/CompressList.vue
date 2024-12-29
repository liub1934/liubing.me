<template>
  <div class="image-list">
    <div
      v-for="item in list"
      :key="item.id"
      class="cursor-pointer overflow-hidden border border-border rounded-6 border-solid transition-all not-first:mt-10 hover:(border-primary)"
      :class="{
        'border-primary': modelActive === item.id,
        'border-error!': item.status === 'failed',
      }"
      @click="handleSelect(item.id)"
    >
      <n-spin :show="item.status === 'processing'">
        <div class="h-150 w-full">
          <img class="size-full object-cover" :src="item.src" no-view>
        </div>
      </n-spin>

      <div class="flex items-center justify-between px-8 py-4">
        <n-ellipsis
          class="flex-1 text-12"
          :class="{
            'text-error': item.status === 'failed',
          }"
        >
          {{ item.file.name }}
        </n-ellipsis>
        <n-space :size="4">
          <n-tag
            class="rounded-4"
            :class="{
              'line-through': item.compressedFile,
            }"
            :type="item.status === 'failed' ? 'error' : 'default'"
            size="small"
          >
            {{ formatFileSize(item.file.size) }}
          </n-tag>
          <n-tag
            v-if="item.compressedFile"
            class="rounded-4"
            type="success"
            size="small"
          >
            {{ formatFileSize(item.compressedFile.size) }}
          </n-tag>
          <n-popover
            v-if="item.failedInfo"
            class="max-h-150 max-w-200"
            trigger="hover"
            scrollable
          >
            <template #trigger>
              <div class="i-solar-info-circle-bold text-error" />
            </template>
            <div class="text-12">
              {{ item.failedInfo }}
            </div>
          </n-popover>
        </n-space>
      </div>
      <div
        v-if="item.compressedFile"
        class="cursor-pointer border-t border-border border-t-solid bg-primary-1 text-center text-12 leading-30 transition-all dark:(bg-primary-2 hover:bg-primary-3) hover:(bg-primary-2)"
        @click="downloadFile(item.compressedFile, item.compressedFile.name)"
      >
        点击下载
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UploadImage } from './interface'
import { downloadFile, formatFileSize } from '@/utils'

defineProps<{
  list: UploadImage[]
}>()

const modelActive = defineModel<string>('active', { required: true })

function handleSelect(id: string) {
  modelActive.value = id
}
</script>
