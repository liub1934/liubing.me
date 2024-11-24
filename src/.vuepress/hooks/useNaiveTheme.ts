import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'
import type { App, ComputedRef, InjectionKey, Ref } from 'vue'
import { getGenerateColors, getThemeOverrides } from '@/utils'
import { darkTheme, type GlobalThemeOverrides } from 'naive-ui'
import { computed, inject, ref } from 'vue'

interface NaiveTheme {
  isDarkmode: Ref<boolean>
  themeConfig: Ref<NTheme.Config>
  theme: ComputedRef<BuiltInGlobalTheme | null>
  themeOverrides: ComputedRef<GlobalThemeOverrides>
  themeColors: ComputedRef<Record<NTheme.ColorType, string[]>>
  setThemeConfig: (config: Partial<NTheme.Config>) => void
}

const naiveThemeSymbol: InjectionKey<NaiveTheme> = Symbol(
  __VUEPRESS_DEV__ ? 'naiveTheme' : '',
)

export function injectNaiveTheme(app: App) {
  const isDarkmode = ref(app.config.globalProperties.$isDarkmode)

  /** 主题配置 */
  const themeConfig = ref<NTheme.Config>({
    primary: '#009b5e',
    info: '#722ed1',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  })

  /** 主题 */
  const theme = computed(() => (isDarkmode.value ? darkTheme : null))

  /** 主题theme-overrides */
  const themeOverrides = computed(() => {
    return getThemeOverrides(themeConfig.value, isDarkmode.value)
  })

  /** 主题颜色 */
  const themeColors = computed(() => {
    const entries = Object.entries(themeConfig.value) as [
      NTheme.ColorType,
      string,
    ][]
    const colors = {} as Record<NTheme.ColorType, string[]>
    entries.forEach(([key, value]) => {
      colors[key] = getGenerateColors(value, isDarkmode.value)
    })
    return colors
  })

  /** 手动设置主题 */
  function setThemeConfig(config: Partial<NTheme.Config>) {
    themeConfig.value = {
      ...themeConfig.value,
      ...config,
    }
  }

  app.provide(naiveThemeSymbol, {
    isDarkmode,
    themeConfig,
    theme,
    themeOverrides,
    themeColors,
    setThemeConfig,
  })
}

export function useNaiveTheme() {
  const naiveTheme = inject(naiveThemeSymbol)
  if (!naiveTheme)
    throw new Error('useNaiveTheme() is called without provider.')
  return naiveTheme
}
