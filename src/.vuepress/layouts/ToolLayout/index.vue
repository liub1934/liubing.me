<template>
  <NaiveProvider
    class="transition-all"
    :class="{
      'opacity-0': !isShow,
      'opacity-100': isShow,
    }"
  >
    <SkipLink />
    <MainLayout>
      <PageContent>
        <template #contentAfter>
          <ClientOnly>
            <SponsorButton />
          </ClientOnly>
        </template>
      </PageContent>
    </MainLayout>
  </NaiveProvider>
</template>

<script setup lang="ts">
import MainLayout from '@theme-hope/components/base/MainLayout'
import PageContent from '@theme-hope/components/base/PageContent'
import SkipLink from '@theme-hope/components/base/SkipLink'
import { onMounted, ref } from 'vue'

const isShow = ref(false)

onMounted(() => {
  setTimeout(() => {
    isShow.value = true
  }, 300)
})
</script>
