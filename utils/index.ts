/**
 * 获取 unocss theme colors
 * @returns
 */
export function getThemeColors() {
  const colors = {} as Record<VTheme.ColorVariable, string>
  for (let i = 0; i < 10; i++) {
    const key = `primary-${i + 1}` as VTheme.ColorVariable
    colors[key] = `rgba(var(--v-primary-color-${i + 1}-rgb))`
    if (i === 5) {
      colors['primary'] = `rgba(var(--v-primary-color-6-rgb))`
    }
  }
  return colors
}
