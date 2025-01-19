<template>
  <component :is="iconComponent" class="vertical-middle" width="1em" height="1em" v-bind="bindAttrs" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, useAttrs } from 'vue'

defineOptions({ name: 'SvgIcon' })

const props = defineProps<{
  /** 图标名称 */
  name: string
}>()

const attrs = useAttrs()
const bindAttrs = computed<{ style: string }>(() => ({
  style: (attrs.style as string) || '',
}))
const iconComponent = defineAsyncComponent(() => import(`../../assets/svg-icon/${props.name}.svg`))
</script>
