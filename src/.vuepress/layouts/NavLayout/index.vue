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
                或者下方评论的形式提供其他未收集的站点。 站点图标可以放到
                <a
                  href="https://github.com/liub1934/liubing.me/tree/main/src/.vuepress/public/assets/websites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  websites
                  <span>
                    <svg
                      class="external-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      width="15"
                      height="15"
                    >
                      <path
                        fill="currentColor"
                        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                      ></path>
                      <polygon
                        fill="currentColor"
                        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                      ></polygon>
                    </svg>
                    <span class="external-link-icon-sr-only">
                      open in new window
                    </span>
                  </span>
                </a>
                目录下
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
