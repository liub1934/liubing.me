<template>
  <div
    class="compress-image relative"
    :class="{
      'opacity-50': !loadSuccess && !showSpin,
      'after:(content-empty absolute size-full top-0 z-1 cursor-not-allowed)':
        !loadSuccess && !showSpin,
    }"
  >
    <n-spin :show="showSpin">
      <template #description>
        <div text-center text-14>
          <div>依赖资源加载中...</div>
          <div>首次加载较慢，请耐心等待</div>
        </div>
      </template>
      <div
        v-if="compressList.length"
        class="border border-border rounded-6 border-solid"
      >
        <n-layout has-sider class="h-[calc(100vh-150px)]">
          <n-layout-sider
            collapse-mode="transform"
            :collapsed-width="0"
            :width="300"
            show-trigger="arrow-circle"
            bordered
          >
            <div class="border-r border-border border-r-solid p-10">
              <CompressList v-model:active="active" :list="compressList" />
            </div>
          </n-layout-sider>
          <n-layout-content>
            <div class="py-10 pl-20 pr-10">
              <CompressPreview
                v-if="activeSrc"
                :src="activeSrc"
                :compressed-src="activeCompressedSrc"
              />
              <CompressOption v-model:checked="outputType" />
              <CompressProgress
                v-if="compressing || compressEnd"
                :compress-list="compressList"
                :success-list="successList"
                :failed-list="failedList"
                :compress-end="compressEnd"
                :percentage="percentage"
              />
              <div class="mt-10 flex justify-end">
                <n-space>
                  <n-button
                    type="tertiary"
                    :disabled="compressing"
                    @click="handleReset"
                  >
                    重置
                  </n-button>
                  <n-button
                    type="primary"
                    :disabled="
                      downloadAllLoading || !successList.length || compressing
                    "
                    :loading="downloadAllLoading"
                    @click="handleDownloadAll"
                  >
                    批量下载
                  </n-button>
                  <n-button
                    type="primary"
                    :disabled="compressing"
                    :loading="compressing"
                    @click="handleCompress"
                  >
                    压缩
                  </n-button>
                </n-space>
              </div>
            </div>
          </n-layout-content>
        </n-layout>
      </div>
      <template v-else>
        <CompressUpload @change="handleChange" />
        <CompressOption v-model:checked="outputType" class="mt-10" />
      </template>
    </n-spin>
  </div>
</template>

<script lang="ts" setup>
import type { OutputType, UploadImage } from './interface'
import { downloadFile, getErrorInfo } from '@/utils'
import { downloadZip } from 'client-zip'
import { cloneDeep } from 'lodash-es'
import { useDialog } from 'naive-ui'
import { computed, ref } from 'vue'

const dialog = useDialog()
const defaultCompressList = ref<UploadImage[]>([])
const compressList = ref<UploadImage[]>([])
const active = ref('')
const percentage = ref(0)
const showSpin = ref(true)
const compressing = ref(false)
const compressEnd = ref(false)
const loadSuccess = ref(false)
const downloadAllLoading = ref(false)
const outputType = ref<OutputType>('webp')
const activeInfo = computed(() =>
  compressList.value.find(item => item.id === active.value),
)
const successList = computed(() =>
  compressList.value.filter(
    item => item.status === 'success' && item.compressedFile,
  ),
)
const failedList = computed(() =>
  compressList.value.filter(item => item.status === 'failed'),
)
const activeSrc = computed(() => activeInfo.value?.src)
const activeCompressedSrc = computed(() => activeInfo.value?.compressedSrc)
let handleCompress: () => void

try {
  loadModules()
}
catch (error) {
  console.log('loadModules error', error)
  showSpin.value = false
  dialog.error({
    title: '加载异常',
    content: '依赖资源加载异常，请刷新页面后重试',
    positiveText: '重试',
    onPositiveClick: () => {
      window.location.reload()
    },
  })
}

async function loadModules() {
  const [avif, jpeg, png, webp] = await Promise.all([
    import('https://unpkg.com/@jsquash/avif@1.3.0?module'),
    import('https://unpkg.com/@jsquash/jpeg@1.4.0?module'),
    import('https://unpkg.com/@jsquash/png@3.0.1?module'),
    import('https://unpkg.com/@jsquash/webp@1.4.0?module'),
  ])

  showSpin.value = false
  loadSuccess.value = true

  handleCompress = async () => {
    compressing.value = true
    compressEnd.value = false
    compressList.value = cloneDeep(defaultCompressList.value)
    for (let index = 0; index < compressList.value.length; index++) {
      const item = compressList.value[index]
      try {
        const sourceType = item.file.type.replace('image/', '') as OutputType
        item.status = 'processing'
        const fileBuffer = await item.file.arrayBuffer()
        const imageBuffer = await convert(sourceType, fileBuffer)
        const fileType = `image/${outputType.value}`
        const compressedBlob = new Blob([imageBuffer], {
          type: fileType,
        })
        item.compressedFile = new File(
          [compressedBlob],
          `${item.fileName}.${outputType.value}`,
          {
            type: fileType,
          },
        )
        item.compressedSrc = URL.createObjectURL(item.compressedFile)
        item.status = 'success'
      }
      catch (error) {
        item.status = 'failed'
        item.failedInfo = getErrorInfo(error)
      }
      percentage.value = Math.round(
        ((index + 1) / compressList.value.length) * 100,
      )
    }
    compressing.value = false
    compressEnd.value = true
  }

  // 执行你的回调或后续操作
  async function decode(sourceType: OutputType, fileBuffer: ArrayBuffer) {
    switch (sourceType) {
      case 'avif':
        return await avif.decode(fileBuffer)
      case 'jpeg':
        return await jpeg.decode(fileBuffer)
      case 'png':
        return await png.decode(fileBuffer)
      case 'webp':
        return await webp.decode(fileBuffer)
      default:
        throw new Error(`Unknown source type: ${sourceType}`)
    }
  }

  async function encode(imageData: ImageData) {
    switch (outputType.value) {
      case 'avif':
        return await avif.encode(imageData)
      case 'jpeg':
        return await jpeg.encode(imageData)
      case 'png':
        return await png.encode(imageData)
      case 'webp':
        return await webp.encode(imageData)
      default:
        throw new Error(`Unknown output type: ${outputType.value}`)
    }
  }

  async function convert(sourceType: OutputType, fileBuffer: ArrayBuffer) {
    const imageData = await decode(sourceType, fileBuffer)
    return encode(imageData)
  }
}

function handleChange(list: UploadImage[]) {
  defaultCompressList.value = list
  compressList.value = list
  if (!active.value && list.length) {
    active.value = list[0].id
  }
}

function handleReset() {
  defaultCompressList.value = []
  compressList.value = []
}

async function handleDownloadAll() {
  try {
    const successFiles = successList.value.map(item => item.compressedFile!)
    const blob = await downloadZip(successFiles).blob()
    downloadFile(blob, `liubing.me_compressed_${Date.now()}.zip`)
  }
  catch (error) {
    window.$message.error(getErrorInfo(error) as string)
  }
}
</script>

<style lang="scss" scoped></style>
