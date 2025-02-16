import { generate } from '@ant-design/colors'
import { colord } from 'colord'
import { kebabCase, upperFirst } from 'lodash-es'
import { commonDark, commonLight, type GlobalThemeOverrides } from 'naive-ui'

type ColorKey = `${NTheme.ColorType}Color${NTheme.ColorSceneCase}`
type ButtonColorKey =
  `textColor${NTheme.ButtonColorSceneCase}${NTheme.ColorTypeCase}`
type ThemeColor = Partial<Record<ColorKey, string>>
interface CssObject {
  [key: string]: string
}

interface ColorAction {
  scene: NTheme.ColorSceneCase
  handler: (color: string) => string
}

function getRGBColor(color: string) {
  return colord(color).toRgb()
}

/**
 * 获取当前主题颜色
 * @returns {string} 主题颜色
 */
export function getThemeColor(): string {
  const rootStyles = window.getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue('--vp-c-accent-hover')
}

/**
 * 根据颜色获取色系
 *
 * @param {string} color #1890ff
 * @param {boolean} darkMode 暗黑模式
 * @return {string[]} ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
 */
export function getGenerateColors(color: string, darkMode: boolean): string[] {
  return darkMode
    ? generate(color, {
        theme: 'dark',
        backgroundColor: commonDark.bodyColor,
      })
    : generate(color)
}

/**
 * 获取其他组件颜色，主要用于适配暗色下文字颜色，该方法可以按需取舍
 *
 * @desc 比如暗黑模式下Primary按钮文字、Checkbox勾号默认都是黑色的，所以需要特殊处理变成白色,可能会有遗漏，需要的话按需补充
 * @param {NTheme.Config} config store themeConfig
 * @param {boolean} darkMode 暗黑模式
 * @return {GlobalThemeOverrides}
 */
function getOtherColor(
  config: NTheme.Config,
  darkMode: boolean,
): GlobalThemeOverrides {
  const otherColor: GlobalThemeOverrides = {
    Button: {},
    Checkbox: {
      checkMarkColor: getTextColor(darkMode),
    },
    DatePicker: {
      itemTextColorActive: getTextColor(darkMode),
    },
    Calendar: {
      dateTextColorCurrent: getTextColor(darkMode),
    },
    Switch: {
      buttonColor: getTextColor(darkMode),
    },
  }
  const keys = Object.keys(config) as NTheme.ColorType[]
  const scenes: NTheme.ButtonColorSceneCase[] = [
    '',
    'Hover',
    'Pressed',
    'Focus',
    'Disabled',
  ]
  keys.forEach((key) => {
    scenes.forEach((scene) => {
      const colorKey = `textColor${scene}${upperFirst(key)}` as ButtonColorKey
      otherColor.Button![colorKey] = getTextColor(darkMode)
    })
  })
  return otherColor
}

/**
 * 获取主题颜色
 *
 * @param {NTheme.Config} config store themeConfig
 * @param {boolean} darkMode 暗黑模式
 * @return {ThemeColor}
 */
export function getThemeColors(
  config: NTheme.Config,
  darkMode: boolean,
): ThemeColor {
  const themeColor: ThemeColor = {}
  const keys = Object.keys(config) as NTheme.ColorType[]
  const colorActions: ColorAction[] = [
    { scene: '', handler: color => getGenerateColors(color, darkMode)[5] },
    {
      scene: 'Hover',
      handler: color => getGenerateColors(color, darkMode)[4],
    },
    {
      scene: 'Suppl',
      handler: color => getGenerateColors(color, darkMode)[4],
    },
    {
      scene: 'Pressed',
      handler: color => getGenerateColors(color, darkMode)[6],
    },
  ]
  keys.forEach((key) => {
    colorActions.forEach((action) => {
      const color = action.handler(config[key]!)
      const colorKey = `${key}Color${action.scene}` as ColorKey
      themeColor[colorKey] = color
    })
  })
  return themeColor
}

/**
 * 获取文字颜色，主要用于适配暗黑模式文字颜色
 *
 * @param {boolean} darkMode 暗黑模式
 * @return {string}
 */
function getTextColor(darkMode: boolean): string {
  return darkMode ? commonDark.textColor2 : commonLight.baseColor
}

/**
 * 获取动态主题ThemeOverrides
 *
 * @param {NTheme.Config} config store themeConfig
 * @param {boolean} darkMode 暗黑模式
 * @return {GlobalThemeOverrides}
 */
export function getThemeOverrides(
  config: NTheme.Config,
  darkMode: boolean,
): GlobalThemeOverrides {
  const themeColors = getThemeColors(config, darkMode)
  // addCssVarsToHtml(config, darkMode, themeColors)
  return {
    common: {
      ...themeColors,
    },
    ...getOtherColor(config, darkMode),
  }
}

/**
 * 将CSS文本解析为CSS对象
 *
 * @param {string} cssText "--primary-color1: 211,224,215;--primary-color2: 167,212,182;"
 * @return {CssObject} { --primary-color1: '211,224,215', --primary-color2: '167,212,182' }
 */
export function parseCssText(cssText: string): CssObject {
  const cssObj: CssObject = {}
  cssText.split(';').forEach((rule) => {
    if (rule) {
      const [key, value] = rule.split(':')
      cssObj[key.trim()] = value.trim()
    }
  })
  return cssObj
}

/**
 * 将CSS变量添加到HTML文档中
 *
 * @param {NTheme.Config} config - store themeConfig
 * @param {boolean} darkMode - 暗黑模式
 * @param {ThemeColor} themeColors - getThemeColors返回的颜色列表
 */
export function addCssVarsToHtml(
  config: NTheme.Config,
  darkMode: boolean,
  themeColors: ThemeColor,
): void {
  const $root: HTMLElement = document.documentElement
  const cssText = $root.style.cssText
  const cssObj = parseCssText(cssText)
  const configCssObj: CssObject = {}
  const configEntries = Object.entries(config) as [NTheme.ColorType, string][]
  const themeColorsEntries = Object.entries(themeColors) as [ColorKey, string][]

  for (const [key, value] of themeColorsEntries) {
    const { r, g, b } = getRGBColor(value)
    configCssObj[`--n-${kebabCase(key)}`] = `${r},${g},${b}`
  }

  for (const [key, value] of configEntries) {
    const generateColors = getGenerateColors(value, darkMode)
    generateColors.forEach((color, index) => {
      const { r, g, b } = getRGBColor(color)
      configCssObj[`--n-${key}-color-${index + 1}`] = `${r},${g},${b}`
    })
  }

  const newCssText = Object.entries({
    ...cssObj,
    ...configCssObj,
  })
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')

  $root.style.cssText = newCssText
}
