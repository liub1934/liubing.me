<template>
  <div id="CompressProgress" class="mt-10 flex items-center">
    <n-progress
      class="flex-1"
      type="line"
      :status="getProgressStatus"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <div v-if="compressEnd" class="ml-4 flex items-center">
      <div
        v-if="successList.length === compressList.length"
        class="i-solar-check-circle-bold ml-4 text-success"
      />
      <n-popover v-else>
        <template #trigger>
          <div
            class="i-solar-info-circle-bold"
            :class="{
              'text-error': failedList.length === compressList.length,
              'text-warning': successList.length !== compressList.length,
            }"
          />
        </template>
        <div class="text-14">
          <div>总数：{{ compressList.length }}</div>
          <div>
            <span>成功：</span>
            <span class="text-success">
              {{ successList.length }}
            </span>
          </div>
          <div>
            <span>失败：</span>
            <span class="text-error">
              {{ failedList.length }}
            </span>
          </div>
        </div>
      </n-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProgressStatus } from 'naive-ui'
import type { UploadImage } from './interface'
import { computed } from 'vue'

const props = defineProps<{
  compressList: UploadImage[]
  successList: UploadImage[]
  failedList: UploadImage[]
  compressEnd: boolean
  percentage: number
}>()

const getProgressStatus = computed<ProgressStatus>(() => {
  if (props.compressEnd) {
    if (props.successList.length === props.compressList.length) {
      return 'success'
    }
    if (props.failedList.length === props.compressList.length) {
      return 'error'
    }
    return 'warning'
  }
  return 'default'
})
</script>
