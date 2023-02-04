<template>
  <div class="auto-catalog">
    <h2 class="main-title">{{ locale.title }}</h2>
    <CatalogItem
      v-for="(catalog, index) in catalogList"
      :key="index"
      :index="index"
      :catalogItem="catalog"
    />
  </div>
</template>

<script setup lang="ts">
import CatalogItem from './CatalogItem.vue'
import { useRoute } from 'vue-router'
import type { AutoCatalogLocaleConfig } from 'vuepress-plugin-auto-catalog/src/shared'
import type { ResolvedSidebarItem } from '@theme-hope/modules/sidebar/utils/index.js'
import { useLocaleConfig } from 'vuepress-shared/client'
import { useSidebarItems } from '@theme-hope/modules/sidebar/composables/index'
import { ComputedRef, Ref, ref } from 'vue'
import { treeFind } from '../../utils'
declare const AUTO_CATALOG_LOCALES: AutoCatalogLocaleConfig
import './auto-catalog.scss'

const locale = useLocaleConfig(AUTO_CATALOG_LOCALES)
const route = useRoute()
const path = route.path
const sidebarItems: ComputedRef<ResolvedSidebarItem[]> = useSidebarItems()
const catalogList: Ref<Array<ResolvedSidebarItem>> = ref([])
const catalogItem: ResolvedSidebarItem = treeFind<ResolvedSidebarItem>(
  sidebarItems.value,
  (item) => item.path === path || item.prefix === path
)
if (catalogItem) {
  catalogList.value = catalogItem.children || []
} else {
  catalogList.value = sidebarItems.value
}
</script>
