import { generate } from '@ant-design/colors'
import { colord } from 'colord'

/**
 * 获取RGB颜色
 * @param color
 * @returns
 */
function getRGBColor(color: string) {
  return colord(color).toRgb()
}

/**
 * 获取当前主题颜色
 * @returns
 */
export function getThemeColor() {
  const rootStyles = window.getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue('--theme-color')
}

/**
 * 根据颜色获取色系
 *
 * @param {string} color #1890ff
 * @param {boolean} isDark 暗黑模式
 * @return {string[]} ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
 */
export function getGenerateColors(color: string, isDark: boolean): string[] {
  return isDark
    ? generate(color, {
        theme: 'dark',
        backgroundColor: '#161b22'
      })
    : generate(color)
}

/**
 * 将CSS文本解析为CSS对象
 * @param cssText "--primary-color1: 211,224,215;--primary-color2: 167,212,182;"
 * @returns "{ --primary-color1: '211,224,215', --primary-color2: '167,212,182' }"
 */
export function parseCssText(cssText: string) {
  const cssObj: Recordable<string> = {}
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
 * @param themeColor 主题色
 * @param isDark 暗黑模式
 */
export function addCssVarsToHtml(themeColor: string, isDark: boolean) {
  const $root: HTMLElement = document.documentElement
  const cssText = $root.style.cssText
  const cssObj = parseCssText(cssText)
  const configCssObj: Recordable<string> = {}
  const generateColors = getGenerateColors(themeColor, isDark)
  const length = generateColors.length
  generateColors.map((color, index) => {
    const { r, g, b } = getRGBColor(color)
    configCssObj[`--v-primary-color-${index + 1}-rgb`] = `${r},${g},${b}`
    configCssObj[`--el-color-primary-light-${length - (index + 1)}`] = color
    if (index === 5) configCssObj[`--el-color-primary`] = color
    if (index === 6) configCssObj[`--el-color-primary-dark-2`] = color
  })
  const newCssText = Object.entries({
    ...cssObj,
    ...configCssObj
  })
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')

  $root.style.cssText = newCssText
  $root.classList.remove('light')
  $root.classList.remove('dark')
  $root.classList.add(isDark ? 'dark' : 'light')
}
