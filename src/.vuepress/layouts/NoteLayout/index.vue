<template>
  <NaiveProvider>
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
</script>
