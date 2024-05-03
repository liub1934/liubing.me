/** 主题相关类型 */
declare namespace VTheme {
  type ColorNumber = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`
  type ColorVariable = 'primary' | `primary-${ColorNumber}`
}
