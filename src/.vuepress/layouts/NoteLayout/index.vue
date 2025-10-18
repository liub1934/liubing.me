<template>
  <NaiveProvider>
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
</script>
