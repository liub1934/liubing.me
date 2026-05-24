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
import { nextTick, ref } from 'vue'
import { usePlayer } from '@/hooks'
import APlayerPlayer from './APlayerPlayer.vue'

const { isShowPlayer } = usePlayer()
const playerRef = ref<InstanceType<typeof APlayerPlayer> | null>(null)
const audioList = ref([
  {
    name: '笑看风云 - 郑少秋',
    artist: '笑看风云',
    url: 'https://oss.liubing.me/music/笑看风云-郑少秋.mp3',
    cover: '/assets/music/笑看风云 - 郑少秋.jpg',
    lrc: '/assets/music/笑看风云 - 郑少秋.lrc',
  },
  {
    name: '沉默是金 - 张国荣',
    artist: '粤语超白金',
    url: 'https://oss.liubing.me/music/沉默是金-张国荣.mp3',
    cover: '/assets/music/沉默是金 - 张国荣.jpg',
    lrc: '/assets/music/沉默是金 - 张国荣.lrc',
  },
  {
    name: '17岁 - 刘德华',
    artist: '如果有一天',
    url: 'https://oss.liubing.me/music/17岁-刘德华.mp3',
    cover: '/assets/music/17岁 - 刘德华.jpg',
    lrc: '/assets/music/17岁 - 刘德华.lrc',
  },
  {
    name: '黄昏 - 罗文',
    artist: '戲說人生',
    url: 'https://oss.liubing.me/music/黄昏-罗文.mp3',
    cover: '/assets/music/黄昏 - 罗文.jpg',
    lrc: '/assets/music/黄昏 - 罗文.lrc',
  },
])

function onAfterEnter() {
  nextTick(() => {
    playerRef.value?.initPlayer()
  })
}
</script>
