<template>
  <NaiveProvider
    class="transition-all"
    :class="{
      'opacity-0': !isShow,
      'opacity-100': isShow
    }"
  >
    <SkipLink />
    <CommonWrapper>
      <NormalPage>
        <template #contentAfter>
          <ClientOnly>
            <SponsorButton />
          </ClientOnly>
        </template>
      </NormalPage>
    </CommonWrapper>
  </NaiveProvider>
</template>

<script setup lang="ts">
import CommonWrapper from '@theme-hope/components/CommonWrapper'
import NormalPage from '@theme-hope/components/NormalPage'
import SkipLink from '@theme-hope/components/SkipLink'
import { onMounted, ref } from 'vue'

const isShow = ref(false)

onMounted(() => {
  setTimeout(() => {
    isShow.value = true
  }, 300)
})
</script>
