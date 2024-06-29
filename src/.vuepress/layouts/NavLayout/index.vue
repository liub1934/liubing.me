<template>
  <SkipLink />
  <CommonWrapper>
    <NormalPage>
      <template #contentBefore>
        <div class="theme-hope-content custom-content-before">
          <div class="hint-container tip">
            <p class="hint-container-title">提示</p>
            <p>
              导航数据完善中，欢迎 👏👏 通过 PR
              或者下方评论的形式提供其他未收集的站点。 站点图标可以放到
              <a
                href="https://github.com/liub1934/liubing.me/tree/main/src/.vuepress/public/assets/websites"
                target="_blank"
                rel="noopener noreferrer"
              >
                websites
              </a>
              目录下
            </p>
          </div>
        </div>
      </template>
    </NormalPage>
  </CommonWrapper>
</template>

<script setup lang="ts">
import CommonWrapper from '@theme-hope/components/CommonWrapper'
import NormalPage from '@theme-hope/components/NormalPage'
import SkipLink from '@theme-hope/components/SkipLink'
</script>
