<template>
  <div class="image-list">
    <div
      v-for="item in list"
      :key="item.id"
      class="border border-solid border-border rounded-6 overflow-hidden cursor-pointer transition-all not-first:mt-10 hover:(border-primary)"
      :class="{
        'border-primary': modelActive === item.id,
        'border-error!': item.status === 'failed'
      }"
      @click="handleSelect(item.id)"
    >
      <n-spin :show="item.status === 'processing'">
        <div class="w-full h-150">
          <img class="size-full object-cover" :src="item.src" />
        </div>
      </n-spin>

      <div class="flex items-center justify-between px-8 py-4">
        <n-ellipsis
          class="text-12 flex-1"
          :class="{
            'text-error': item.status === 'failed'
          }"
          >{{ item.name }}</n-ellipsis
        >
        <n-space :size="4">
          <n-tag
            class="rounded-4"
            :class="{
              'line-through': item.compressedFile
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
            class="max-w-200 max-h-150"
            trigger="hover"
            scrollable
          >
            <template #trigger>
              <div class="i-solar-info-circle-bold text-error" />
            </template>
            <div class="text-12">{{ item.failedInfo }}</div>
          </n-popover>
        </n-space>
      </div>
      <div
        v-if="item.compressedFile"
        class="leading-30 text-12 text-center border-t border-t-solid transition-all border-border bg-primary-1 hover:(bg-primary-2) cursor-pointer dark:(bg-primary-2 hover:(bg-primary-3))"
        @click="downloadFile(item.compressedFile, item.compressedFile.name)"
      >
        点击下载
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { downloadFile, formatFileSize } from '@/utils'
import type { UploadImage } from './interface'

defineProps<{
  list: UploadImage[]
}>()

const modelActive = defineModel<string>('active', { required: true })

function handleSelect(id: string) {
  modelActive.value = id
}
</script>

<style lang="less" scoped></style>
