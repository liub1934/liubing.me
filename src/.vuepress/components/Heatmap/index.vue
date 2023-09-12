<template>
  <div class="heatmap">
    <div
      class="heatmap-item"
      v-for="item in heatmaps"
      :key="`${item.year}-${item.month}`"
    >
      <div
        class="heatmap-inner"
        data-balloon-pos="up"
        :aria-label="
          item.counts
            ? `${item.year}-${item.month}&#xa;Post: ${item.counts}`
            : `${item.year}-${item.month}`
        "
        :style="(getHeatmapStyle(item.counts) as CSSProperties)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  nextTick,
  onBeforeUnmount,
  onMounted,
  CSSProperties
} from 'vue'
import { generate } from '@ant-design/colors'
import { useMutationObserver } from '@vueuse/core'
import { ArticleInfo } from 'vuepress-theme-hope/lib/shared/blog'
import { useArticles } from '@theme-hope/modules/blog/composables/index'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'

interface IHeatmap {
  year: number
  month: number
  counts: number
}

const articles = useArticles()
const { isDarkmode } = useDarkmode()
const el = ref<HTMLHtmlElement | null>(null)
const themeColor = ref('')
const themeColors = ref<string[]>([])
const heatmaps = ref<IHeatmap[]>([])
const postList = articles.value.items
  .sort((a, b) => a.info.d! - b.info.d!)
  .map((item) => item.info)
heatmaps.value = getPostsCount(postList)

const { stop } = useMutationObserver(
  el,
  (mutations) => {
    const mutation = mutations[0]
    if (mutation) {
      themeColor.value = getThemeColor()
    }
  },
  {
    attributes: true,
    attributeFilter: ['class']
  }
)

onMounted(() => {
  el.value = document.querySelector('html')
  nextTick(() => {
    themeColor.value = getThemeColor()
  })
})

onBeforeUnmount(() => {
  stop && stop()
})

watch([themeColor, isDarkmode], () => {
  if (isDarkmode.value) {
    themeColors.value = generate(themeColor.value, {
      theme: 'dark',
      backgroundColor: '#161b22'
    })
  } else {
    themeColors.value = generate(themeColor.value)
  }
})

function getPostsCount(posts: ArticleInfo[]) {
  const minYear = new Date(posts[0].d!).getFullYear()
  const maxYear = new Date(posts[posts.length - 1].d!).getFullYear()
  const counts: IHeatmap[] = []
  for (let year = minYear; year <= maxYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const count = posts.filter((item) => {
        const date = new Date(item.d!)
        return date.getFullYear() === year && date.getMonth() === month - 1
      }).length
      counts.push({ year, month, counts: count })
    }
  }
  return counts
}

function getThemeColor() {
  const rootStyles = getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue('--theme-color')
}

function getCountColor(counts: number) {
  if (counts) {
    if (counts > 10) counts = 10
    return themeColors.value[counts - 1]
  }
  return null
}

function getHeatmapStyle(counts: number) {
  return counts
    ? {
        background: getCountColor(counts)
      }
    : {}
}
</script>

<style lang="scss" scoped>
.heatmap {
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .heatmap-item {
    width: 8.333333%;

    position: relative;
    &::after {
      content: '';
      display: block;
      padding-top: 100%;
    }
    .heatmap-inner {
      border-radius: 2px;
      position: absolute;
      top: 2px;
      right: 2px;
      bottom: 2px;
      left: 2px;
      border: 1px solid var(--border-color);
      transition: all var(--color-transition);
    }
  }
}
</style>