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
        :style="getHeatmapStyle(item.counts)"
        @click="handleClick(item)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { ref, watch, nextTick, onBeforeUnmount, onMounted, computed } from 'vue'
import { generate } from '@ant-design/colors'
import { useMutationObserver } from '@vueuse/core'
import { useArticles } from '@theme-hope/modules/blog/composables/index'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'
import { useRouter } from 'vue-router'

interface IHeatmap {
  year: number
  month: number
  counts: number
}

const router = useRouter()
const articles = useArticles()
const { isDarkmode } = useDarkmode()
const el = ref<HTMLHtmlElement | null>(null)
const themeColor = ref('')
const themeColors = ref<string[]>([])
const postList = articles.value.items
  .sort((a, b) => a.info.d! - b.info.d!)
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
  const styles = counts
    ? {
        background: getCountColor(counts)
      }
    : {}
  return styles as CSSProperties
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
