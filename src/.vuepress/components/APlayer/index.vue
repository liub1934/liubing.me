<template>
  <ClientOnly>
    <n-modal
      v-model:show="isShowPlayer"
      display-directive="show"
      :on-after-enter="onAfterEnter"
    >
      <n-card
        class="w-600 max-w-80% rounded-6 overflow-hidden shadow"
        role="dialog"
        aria-modal="true"
        :bordered="false"
        :content-style="{
          padding: '0px'
        }"
      >
        <NaiveProvider>
          <APlayerPlayer ref="playerRef" :audio="audioList" />
          <font-icon
            flex-center
            size-30
            color-grey
            opacity-40
            absolute
            top-10
            right-10
            cursor-pointer
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
import APlayerPlayer from './APlayerPlayer.vue'
import { nextTick, ref } from 'vue'
import { usePlayer } from '@/hooks'

const { isShowPlayer } = usePlayer()
const playerRef = ref<InstanceType<typeof APlayerPlayer> | null>(null)
const audioList = ref([
  {
    name: '笑看风云 - 郑少秋',
    artist: '笑看风云',
    url: '/assets/music/笑看风云-郑少秋.mp3',
    cover: '/assets/music/笑看风云-郑少秋.png'
  },
  {
    name: '沉默是金 - 张国荣',
    artist: 'Hot Summer',
    url: '/assets/music/沉默是金-张国荣.mp3',
    cover: '/assets/music/沉默是金-张国荣.jpg'
  },
  {
    name: '2002年的第一场雪 - 刀郎',
    artist: '2002年的第一场雪',
    url: '/assets/music/2002年的第一场雪-刀郎.mp3',
    cover: '/assets/music/2002年的第一场雪-刀郎.jpg'
  },
  {
    name: '冲动的惩罚 - 刀郎',
    artist: '2002年的第一场雪',
    url: '/assets/music/冲动的惩罚-刀郎.mp3',
    cover: '/assets/music/冲动的惩罚-刀郎.jpg'
  }
])

function onAfterEnter() {
  nextTick(() => {
    playerRef.value?.initPlayer()
  })
}
</script>
