<template>
  <NaiveProvider>
    <SkipLink />
    <MainLayout>
      <PageContent>
        <template #contentBefore>
          <div vp-content class="theme-hope-content custom-content-before">
            <div class="hint-container tip">
              <p class="hint-container-title">
                提示
              </p>
              <p>
                导航数据完善中，欢迎 👏👏 通过 PR 或者点击下方的
                <AutoLink :config="editLink!" />
                提供其他未收集的站点
              </p>
            </div>
          </div>
        </template>
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
import AutoLink from '@theme-hope/components/base/AutoLink'
import MainLayout from '@theme-hope/components/base/MainLayout'
import PageContent from '@theme-hope/components/base/PageContent'
import SkipLink from '@theme-hope/components/base/SkipLink'
import { useEditLink } from '@theme-hope/composables/info/useEditLink'

const editLink = useEditLink()
</script>
