import { useNaiveTheme } from '@/hooks'
import { addCssVarsToHtml, getThemeColor, getThemeColors } from '@/utils'
import { useDarkmode } from '@vuepress/helper/client'
import { useMutationObserver } from '@vueuse/core'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  setup() {
    const isDarkmode = useDarkmode()
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
        attributeFilter: ['class'],
      },
    )
    onMounted(() => {
      const {
        themeConfig,
        setThemeConfig,
        isDarkmode: darkMode,
      } = useNaiveTheme()
      el.value = document.querySelector('html')
      nextTick(() => {
        themeColor.value = getThemeColor()
      })
      watch([themeColor, isDarkmode], () => {
        darkMode.value = isDarkmode.value
        setThemeConfig({
          primary: themeColor.value,
        })
        const themeColors = getThemeColors(themeConfig.value, isDarkmode.value)
        addCssVarsToHtml(themeConfig.value, isDarkmode.value, themeColors)
      })
    })
    onBeforeUnmount(() => {
      stop && stop()
    })
  },
})
