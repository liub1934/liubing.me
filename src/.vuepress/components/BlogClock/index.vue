<template>
  <div class="clock">
    <div class="hour"></div>
    <div class="min"></div>
    <div class="sec"></div>
  </div>
</template>

<script setup lang="ts">
// Code From: https://codepen.io/imvpn22/pen/RwPvOgQ
import { onBeforeUnmount, onMounted } from 'vue'
import './blog-clock.scss'

let clockInterval: ReturnType<typeof setInterval> | null

onMounted(() => {
  const deg: number = 6
  const hour = document.querySelector('.hour') as HTMLElement
  const min = document.querySelector('.min') as HTMLElement
  const sec = document.querySelector('.sec') as HTMLElement

  const setClock = (): void => {
    const day = new Date()
    const hh = day.getHours() * 30
    const mm = day.getMinutes() * deg
    const ss = day.getSeconds() * deg

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
  }

  // first time
  setClock()
  // Update every 1000 ms
  clockInterval = setInterval(setClock, 1000)
})
onBeforeUnmount(() => {
  if (clockInterval) {
    clearInterval(clockInterval)
  }
  clockInterval = null
})
</script>
