<template>
  <ClientOnly>
    <n-modal
      v-model:show="isShowPlayer"
      display-directive="show"
      :on-after-enter="onAfterEnter"
    >
      <n-card
        class="max-w-80% w-600 overflow-hidden rounded-6 shadow"
        role="dialog"
        aria-modal="true"
        :bordered="false"
        :content-style="{
          padding: '0px',
        }"
      >
        <NaiveProvider>
          <APlayerPlayer ref="playerRef" :audio="audioList" />
          <VPIcon
            absolute right-10 top-10 size-30 flex-center cursor-pointer color-grey opacity-40
            class="text-30!"
            icon="material-symbols:cancel"
            @click="isShowPlayer = false"
          />
        </NaiveProvider>
      </n-card>
    </n-modal>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { usePlayer } from '@/hooks'
import { nextTick, ref } from 'vue'
import APlayerPlayer from './APlayerPlayer.vue'

const { isShowPlayer } = usePlayer()
const playerRef = ref<InstanceType<typeof APlayerPlayer> | null>(null)
const audioList = ref([
  {
    name: '笑看风云 - 郑少秋',
    artist: '笑看风云',
    url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VVMTVBTWhONnJ0TXVDd1JvWFU4WjJZQlB5Mm9tNGhTQVFmbVVIR1BuckZFWFE.mp3',
    cover: '/assets/music/笑看风云 - 郑少秋.jpg',
    lrc: '/assets/music/笑看风云 - 郑少秋.lrc',
  },
  {
    name: '沉默是金 - 张国荣',
    artist: '粤语超白金',
    url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VWN2JuMWR4cGVKR3IyYWhDWEhJdXdNQi0xWnVqb2k1bDlwLWFOOTE5enQtS2c.mp3',
    cover: '/assets/music/沉默是金 - 张国荣.jpg',
    lrc: '/assets/music/沉默是金 - 张国荣.lrc',
  },
  {
    name: '17岁 - 刘德华',
    artist: '如果有一天',
    url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VSWW40ZWl5cjFWRWhIaDVaRkhBRnFzQmZwNkVTaTB4WmV0clpVSVRyWWF0b2c.mp3',
    cover: '/assets/music/17岁 - 刘德华.jpg',
    lrc: '/assets/music/17岁 - 刘德华.lrc',
  },
  {
    name: '2002年的第一场雪 - 刀郎',
    artist: '2002年的第一场雪',
    url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkV2x4UVBhdlJKRW00Ynl0NS1PMV9VQkdaVzNFSWxNTTJvaTdOMUltaDljY2c.mp3',
    cover: '/assets/music/2002年的第一场雪 - 刀郎.jpg',
    lrc: '/assets/music/2002年的第一场雪 - 刀郎.lrc',
  },
  {
    name: '冲动的惩罚 - 刀郎',
    artist: '2002年的第一场雪',
    url: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VRQmVfM3RXa3h4RWdxdHhzcUxURlp3QlR4bjdvSUxvZ3paUXpiQ2lhTEsxRlE.mp3',
    cover: '/assets/music/冲动的惩罚 - 刀郎.jpg',
    lrc: '/assets/music/冲动的惩罚 - 刀郎.lrc',
  },
])

function onAfterEnter() {
  nextTick(() => {
    playerRef.value?.initPlayer()
  })
}
</script>
