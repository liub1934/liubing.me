<template>
  <SkipLink />
  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
        <template #contentBefore>
          <div class="theme-hope-content custom-content-before">
            <div class="hint-container tip">
              <p class="hint-container-title">提示</p>
              <p>
                导航数据完善中，欢迎 👏👏 通过 PR
                或者下方评论的形式提供其他未收集的站点。
              </p>
            </div>
          </div>
        </template>
      </NormalPage>
    </FadeSlideY>
  </CommonWrapper>
</template>

<script setup lang="ts">
import CommonWrapper from '@theme-hope/components/CommonWrapper'
import NormalPage from '@theme-hope/components/NormalPage'
import SkipLink from '@theme-hope/components/SkipLink'
import FadeSlideY from '@theme-hope/components/transitions/FadeSlideY'
</script>
