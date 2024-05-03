import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import { getThemeColor, addCssVarsToHtml } from '../../../utils'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'
import { useMutationObserver } from '@vueuse/core'

export default defineClientConfig({
  setup() {
    const { isDarkmode } = useDarkmode()
    const themeColor = ref('')
    const el = ref<HTMLHtmlElement | null>(null)
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
      watch([themeColor, isDarkmode], () => {
        addCssVarsToHtml(themeColor.value, isDarkmode.value)
      })
    })
    onBeforeUnmount(() => {
      stop && stop()
    })
  }
})
