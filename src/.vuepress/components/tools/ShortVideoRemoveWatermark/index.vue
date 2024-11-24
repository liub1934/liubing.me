<template>
  <div class="short-video-remove-watermark">
    <div class="title text-24 font-600">
      视频链接
    </div>
    <n-input
      v-model:value="videoUrl"
      type="textarea"
      clearable
      placeholder="请输入视频链接，支持抖音、小红书、快手、哔哩哔哩 各大平台"
    />
    <div class="mt-20 text-center md:(text-right)">
      <n-button
        class="w-full md:(w-150)"
        type="primary"
        :disabled="!videoUrl"
        :loading="loading"
        @click="handleFetch"
      >
        解析
      </n-button>
    </div>
    <template v-if="resultData">
      <div class="title text-24 font-600">
        解析预览
      </div>
      <div>{{ resultData.title }}</div>
      <div>
        封面：
        <a :href="resultData.photo" target="_blank" rel="noopener noreferrer">
          点击查看
        </a>
      </div>
      <div v-if="resultData.video">
        视频：
        <a :href="resultData.video" target="_blank" rel="noopener noreferrer">
          点击查看
        </a>
      </div>
      <div v-if="resultData.images && resultData.images.length">
        图片集合：
        <a
          v-for="(img) in resultData.images"
          :key="img"
          :href="img"
          target="_blank"
        >
          点击查看
        </a>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { isValidJsonString } from '@/utils'
import { isString } from 'lodash-es'
import { ref } from 'vue'

interface ShortVideoRes {
  msg: string
  title: string
  photo: string
  images?: string[] | null
  video?: string | null
}

const videoUrl = ref('')
const loading = ref(false)
const resultData = ref<ShortVideoRes | null>(null)

async function handleFetch() {
  if (!videoUrl.value)
    return
  resultData.value = null
  loading.value = true
  const msg = encodeURIComponent(videoUrl.value)
  try {
    const response = await fetch(
      `https://api.liubing.me/short-video?msg=${msg}`,
    ).finally(() => {
      loading.value = false
    })
    if (response.ok) {
      const content = await response.text()
      const resData: string | ShortVideoRes = isValidJsonString(content)
        ? JSON.parse(content)
        : content
      if (isString(resData)) {
        window.$message.error(resData)
        return
      }
      if (resData.msg.includes('解析成功')) {
        resultData.value = resData
        return
      }
      window.$message.error(resData.msg)
    }
    else {
      window.$message.error('解析异常，请稍后再试！')
    }
  }
  catch (error) {
    console.log('error', error)
    window.$message.error('请求异常，请稍后再试！')
  }
}
</script>
