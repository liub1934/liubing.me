<template>
  <div class="catalog-item">
    <div
      :id="catalogItem.text"
      class="child-title"
      :class="{
        'has-children': hasChildren
      }"
    >
      <a :href="`#${catalogItem.text}`" class="header-anchor">#</a>
      <a :href="catalogItem.link || catalogItem.prefix" class="catalog-title">
        {{ pIndex ? curIndex.slice(0, -1) : curIndex }} {{ catalogItem.text }}
      </a>
    </div>
    <ul v-if="hasChildren" class="child-catalog-wrapper">
      <li
        class="child-catalog-item"
        v-for="(child, cIndex) in catalogItem.children"
        :key="cIndex"
      >
        <CatalogItem
          class="sub-title"
          :index="cIndex"
          :pIndex="curIndex"
          :catalogItem="child"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="CatalogItem">
import type { ResolvedSidebarItem } from '@theme-hope/modules/sidebar/utils/index.js'
import { computed, PropType } from 'vue'
import './auto-catalog.scss'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  pIndex: String,
  catalogItem: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true
  }
})
const curIndex = computed(() => {
  return `${props.pIndex || ''}${props.index + 1}.`
})
const hasChildren = computed((): boolean => {
  return props.catalogItem.children && props.catalogItem.children.length
})
</script>
