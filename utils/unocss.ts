type ColorTypes = NTheme.ColorType
type ColorScenes = Exclude<NTheme.ButtonColorScene, ''>
type ColorNumber = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`
type ColorVariable =
  | ColorTypes
  | `${ColorTypes}-${ColorNumber}`
  | `${ColorTypes}-${ColorScenes}`
  | `${ColorTypes}-${ColorScenes}-${ColorNumber}`

export function generateColorCombinations(): Record<ColorVariable, string> {
  const colorTypes: ColorTypes[] = [
    'primary',
    'info',
    'success',
    'warning',
    'error',
  ]
  const colorScenes: ColorScenes[] = ['hover', 'pressed', 'focus', 'disabled']
  const result = {} as Record<ColorVariable, string>
  for (const type of colorTypes) {
    result[type] = `rgba(var(--n-${type}-color))`
    for (let i = 1; i <= 10; i++) {
      const key = `${type}-${i}` as ColorVariable
      result[key] = `rgba(var(--n-${type}-color-${i}))`
    }
    for (const scene of colorScenes) {
      const key = `${type}-${scene}` as ColorVariable
      result[key] = `rgba(var(--n-${type}-color-${scene}))`
    }
  }
  return result
}
