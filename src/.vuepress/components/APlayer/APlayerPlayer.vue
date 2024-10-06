<template>
  <div
    relative
    min-h-90
    :class="{
      'brightness-80': isDarkmode
    }"
  >
    <div
      transition-all
      :class="{
        'opacity-0': !isCanPlay,
        'opacity-100': isCanPlay
      }"
    >
      <div id="APlayer" class="m-0! shadow!"></div>
    </div>
    <div v-if="!isCanPlay" absolute top-0 size-full flex-center>
      <n-spin size="small" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'aplayer/dist/APlayer.min.css'
import type { APlayerAudio, APlayerOptions } from 'aplayer'
import { watch, type PropType } from 'vue'
import { usePlayer } from '@/hooks'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'
import { useBroadcastChannel } from '@vueuse/core'

interface PlayerPlayMessage {
  id: string
  play: boolean
}

const props = defineProps({
  audio: {
    type: Array as PropType<APlayerAudio[]>,
    required: true
  },
  options: {
    type: Object as PropType<APlayerOptions>
  }
})

const { player, isCanPlay, isPlay, id } = usePlayer()
const { isDarkmode } = useDarkmode()
const { isSupported, data, post } = useBroadcastChannel<
  PlayerPlayMessage,
  PlayerPlayMessage
>({
  name: 'player-play-message'
})

function initPlayer() {
  if (player.value) return
  import('aplayer').then((res) => {
    const APlayer = res.default
    player.value = new APlayer({
      container: document.getElementById('APlayer')!,
      audio: props.audio,
      lrcType: 3,
      ...props.options
    })
    player.value.on('canplay', () => {
      isCanPlay.value = true
    })
    player.value.on('play', () => {
      isPlay.value = true
      if (isSupported) {
        post({
          id: id.value,
          play: isPlay.value
        })
      }
    })
    player.value.on('pause', () => {
      isPlay.value = true
    })
  })
}

watch(data, () => {
  if (player.value) {
    if (data.value.play && data.value.id !== id.value) {
      player.value.pause()
    }
  }
})

defineExpose({
  player,
  initPlayer
})
</script>

<style lang="scss">
.aplayer {
  .aplayer-info {
    .aplayer-music,
    .aplayer-lrc {
      margin-right: 40px;
    }
  }
}
</style>
