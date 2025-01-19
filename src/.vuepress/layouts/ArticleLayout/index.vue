<template>
  <NaiveProvider>
    <SkipLink />
    <CommonWrapper>
      <NormalPage>
        <template #contentAfter>
          <div vp-content class="theme-hope-content article-content-after">
            <ClientOnly>
              <SponsorButton />
            </ClientOnly>
            <hr>
            <div class="hint-container warning">
              <div class="article-copyright">
                <!-- 转载信息 -->
                <ul v-if="source">
                  <li>
                    <strong>转载来源：</strong>
                    <span>{{ source }}</span>
                  </li>
                  <li v-if="sourceLink">
                    <strong>原文地址：</strong>
                    <a
                      :href="sourceLink"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {{ sourceLink }}
                    </a>
                  </li>
                </ul>
                <!-- 原创信息 -->
                <ul v-else>
                  <li class="copyright-author">
                    <strong>本文作者：</strong>
                    <span>{{ author }}</span>
                  </li>
                  <li class="copyright-link">
                    <strong>本文链接：</strong>
                    <a class="no-external-link-icon" :href="path">{{
                      title
                    }}</a>
                  </li>
                  <li class="copyright-license">
                    <strong>版权声明：</strong>
                    本博客所有文章除特别声明外，均采用
                    <a
                      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <VPIcon icon="material-symbols:copyright-outline" />BY-NC-SA
                    </a>
                    许可协议，转载请注明出处！
                  </li>
                </ul>
              </div>
              <div class="font-icon-bg">
                <SvgIcon v-if="source" class="text-160" name="icon-reship" />
                <SvgIcon v-else class="text-160" name="icon-copyright" />
              </div>
            </div>
          </div>
        </template>
      </NormalPage>
    </CommonWrapper>
  </NaiveProvider>
</template>

<script setup lang="ts">
import type { ThemeNormalPageFrontmatter } from 'vuepress-theme-hope'
import { HostName } from '@/utils'
import CommonWrapper from '@theme-hope/components/CommonWrapper'
import NormalPage from '@theme-hope/components/NormalPage'
import SkipLink from '@theme-hope/components/SkipLink'
import { useThemeData } from '@theme-hope/composables/index'
import { usePageData, usePageFrontmatter } from '@vuepress/client'

interface PageFrontmatter extends ThemeNormalPageFrontmatter {
  source?: string
  sourceLink?: string
}

const page = usePageData()
const themeData = useThemeData()
const frontmatter = usePageFrontmatter<PageFrontmatter>()
const title = page.value.title // 文章标题
const author = frontmatter.value.author || themeData.value.author // 文章作者
const path = HostName + page.value.path // 文章链接
const source = frontmatter.value.source as string // 转载来源
const sourceLink = frontmatter.value.sourceLink as string // 转载地址
</script>

<style lang="scss" scoped>
.article-content-after {
  padding-bottom: 0;
  .hint-container {
    position: relative;
    overflow: hidden;
  }
  .article-copyright {
    padding: 10px 0;
    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      border-bottom: 1px solid var(--vp-tc);
      &:hover {
        text-decoration: none;
      }
    }
  }
  .font-icon-bg {
    opacity: 0.1;
    position: absolute;
    right: -40px;
    top: -48px;
  }
}
</style>
