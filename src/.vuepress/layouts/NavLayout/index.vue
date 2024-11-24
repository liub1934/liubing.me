<template>
  <NaiveProvider>
    <SkipLink />
    <CommonWrapper>
      <NormalPage>
        <template #contentBefore>
          <div class="theme-hope-content custom-content-before">
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
      </NormalPage>
    </CommonWrapper>
  </NaiveProvider>
</template>

<script setup lang="ts">
import AutoLink from '@theme-hope/components/AutoLink'
import CommonWrapper from '@theme-hope/components/CommonWrapper'
import NormalPage from '@theme-hope/components/NormalPage'
import SkipLink from '@theme-hope/components/SkipLink'
import { useEditLink } from '@theme-hope/modules/info/composables/index'

const editLink = useEditLink()
</script>
