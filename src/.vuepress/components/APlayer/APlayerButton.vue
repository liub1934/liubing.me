<template>
  <div class="vp-nav-item">
    <button
      type="button"
      class="vp-outlook-button flex-center"
      tabindex="-1"
      aria-hidden="true"
      aria-label="听个音乐吧"
      data-balloon-pos="down"
      @click="handleShowPlayer"
    >
      <SvgIcon
        name="icon-music"
        class="animation-spin text-20"
        :class="{
          'animation-spin-paused': !isPlay,
        }"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { usePlayer } from '@/hooks'

const { isShowPlayer, isPlay } = usePlayer()

function handleShowPlayer() {
  isShowPlayer.value = true
}
</script>

<style lang="scss" scoped></style>
