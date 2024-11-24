<template>
  <div class="heatmap-layout">
    <CommonLayout>
      <ArticleList :items="items" />
    </CommonLayout>
  </div>
</template>

<script lang="ts" setup>
import ArticleList from '@theme-hope/modules/blog/components/ArticleList'
import { useArticles } from '@theme-hope/modules/blog/composables/index'
import { usePageData } from '@vuepress/client'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import CommonLayout from '../CommonLayout/index.vue'

const route = useRoute()
const articles = useArticles()
const page = usePageData()
const queryDate = computed(() => route.query.date as string)
const items = computed(() => {
  if (!queryDate.value)
    return articles.value.items
  if (new Date(queryDate.value).toString() === 'Invalid Date')
    return []
  const queryYear = new Date(queryDate.value).getFullYear()
  const queryMonth = new Date(queryDate.value).getMonth()
  return articles.value.items.filter((item) => {
    const date = new Date(item.info.d!)
    return date.getFullYear() === queryYear && date.getMonth() === queryMonth
  })
})

watch(
  queryDate,
  () => {
    const description = page.value.frontmatter.description!
    page.value.title = queryDate.value
      ? `${description} ${queryDate.value}`
      : description
  },
  { immediate: true },
)
</script>

<style lang="scss">
.heatmap-layout {
  .vp-article-list {
    position: relative;
    .empty-icon {
      max-width: 50%;
      position: absolute;
      left: 50%;
      top: 20vh;
      transform: translateX(-50%);
    }
  }
}
</style>
