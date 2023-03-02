<template>
  <div class="lottie-web" ref="animContainer"></div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { AnimationItem } from 'lottie-web'
import lottie from 'lottie-web'

const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['DOMLoaded'])
const animContainer = ref<Element | null>(null)
const anim = ref<AnimationItem | null>(null)

onMounted(() => {
  anim.value = lottie.loadAnimation({
    container: animContainer.value as Element,
    renderer: 'svg',
    loop: props.options.loop !== false,
    autoplay: props.options.autoplay !== false,
    animationData: props.options.animationData,
    path: props.options.path,
    rendererSettings: props.options.rendererSettings
  })
  anim.value.addEventListener('DOMLoaded', () => {
    emit('DOMLoaded', anim)
  })
})

onBeforeUnmount(() => {
  if (anim.value && anim.value) {
    anim.value.destroy()
  }
})
</script>
