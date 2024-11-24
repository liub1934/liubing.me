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
          <FontIcon
            absolute right-10 top-10 size-30 flex-center cursor-pointer color-grey opacity-40
            class="text-30!"
            icon="close-fill"
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
    url: '/assets/music/笑看风云 - 郑少秋.mp3',
    cover: '/assets/music/笑看风云 - 郑少秋.jpg',
    lrc: '/assets/music/笑看风云 - 郑少秋.lrc',
  },
  {
    name: '沉默是金 - 张国荣',
    artist: '粤语超白金',
    url: '/assets/music/沉默是金 - 张国荣.mp3',
    cover: '/assets/music/沉默是金 - 张国荣.jpg',
    lrc: '/assets/music/沉默是金 - 张国荣.lrc',
  },
  {
    name: '17岁 - 刘德华',
    artist: '如果有一天',
    url: '/assets/music/17岁 - 刘德华.mp3',
    cover: '/assets/music/17岁 - 刘德华.jpg',
    lrc: '/assets/music/17岁 - 刘德华.lrc',
  },
  {
    name: '2002年的第一场雪 - 刀郎',
    artist: '2002年的第一场雪',
    url: '/assets/music/2002年的第一场雪 - 刀郎.mp3',
    cover: '/assets/music/2002年的第一场雪 - 刀郎.jpg',
    lrc: '/assets/music/2002年的第一场雪 - 刀郎.lrc',
  },
  {
    name: '冲动的惩罚 - 刀郎',
    artist: '2002年的第一场雪',
    url: '/assets/music/冲动的惩罚 - 刀郎.mp3',
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
