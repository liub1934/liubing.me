<template>
  <div class="heatmap">
    <div
      class="heatmap-item"
      v-for="item in heatmaps"
      :key="`${item.year}-${item.month}`"
    >
      <div
        :class="`heatmap-inner ${getCountColor(item.counts)}`"
        data-balloon-pos="up"
        :aria-label="
          item.counts
            ? `${item.year}-${item.month}&#xa;Post: ${item.counts}`
            : `${item.year}-${item.month}`
        "
        @click="handleClick(item)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useArticles } from '@theme-hope/modules/blog/composables/index'
import { useRouter } from 'vue-router'
import { cloneDeep } from 'lodash-es'

interface IHeatmap {
  year: number
  month: number
  counts: number
}

const router = useRouter()
const articles = useArticles()
const postList = cloneDeep(articles.value)
  .items.sort((a, b) => a.info.d! - b.info.d!)
  .map((item) => item.info)

const heatmaps = computed(() => {
  const minYear = new Date(postList[0].d!).getFullYear()
  const maxYear = new Date(postList[postList.length - 1].d!).getFullYear()
  const counts: IHeatmap[] = []
  for (let year = minYear; year <= maxYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const count = postList.filter((item) => {
        const date = new Date(item.d!)
        return date.getFullYear() === year && date.getMonth() === month - 1
      }).length
      counts.push({ year, month, counts: count })
    }
  }
  return counts
})

function getCountColor(counts: number) {
  if (counts) {
    if (counts > 10) counts = 10
    return `bg-primary-${counts}`
  }
  return ''
}

function handleClick(item: IHeatmap) {
  if (!item.counts) return
  router.push({
    path: '/heatmap/',
    query: {
      date: `${item.year}/${item.month}`
    }
  })
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
