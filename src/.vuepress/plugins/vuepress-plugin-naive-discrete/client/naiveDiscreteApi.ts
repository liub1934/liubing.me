import type { ConfigProviderProps } from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'
import { computed, onMounted } from 'vue'
import { useNaiveTheme } from '@/hooks'

/**
 * 挂载 Naive-ui 脱离上下文的 API，方便在全局使用
 * 如果你想在 setup 外使用 useDialog、useMessage、useNotification、useLoadingBar，可以通过 createDiscreteApi 来构建对应的 API。
 * https://www.naiveui.com/zh-CN/dark/components/discrete
 */

export function setupNaiveDiscreteApi() {
  const { theme, themeOverrides } = useNaiveTheme()
  const configProviderProps = computed<ConfigProviderProps>(() => {
    return {
      theme: theme.value,
      themeOverrides: themeOverrides.value,
    }
  })
  const { message, dialog, notification, loadingBar } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    { configProviderProps },
  )

  onMounted(() => {
    window.$message = message
    window.$dialog = dialog
    window.$notification = notification
    window.$loadingBar = loadingBar
  })
}
