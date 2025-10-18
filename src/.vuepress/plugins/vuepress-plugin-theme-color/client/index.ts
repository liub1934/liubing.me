import { useDarkMode } from '@vuepress/helper/client'
import { useMutationObserver } from '@vueuse/core'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import { useNaiveTheme } from '@/hooks'
import { addCssVarsToHtml, getThemeColor, getThemeColors } from '@/utils'

export default defineClientConfig({
  setup() {
    const isDarkMode = useDarkMode()
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
        isDarkMode: darkMode,
      } = useNaiveTheme()
      el.value = document.querySelector('html')
      nextTick(() => {
        themeColor.value = getThemeColor()
      })
      watch([themeColor, isDarkMode], () => {
        darkMode.value = isDarkMode.value
        setThemeConfig({
          primary: themeColor.value,
        })
        const themeColors = getThemeColors(themeConfig.value, isDarkMode.value)
        addCssVarsToHtml(themeConfig.value, isDarkMode.value, themeColors)
      })
    })
    onBeforeUnmount(() => {
      stop && stop()
    })
  },
})
