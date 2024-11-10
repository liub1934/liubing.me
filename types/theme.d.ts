import type { DialogApi, LoadingBarApi, MessageApi, NotificationApi } from 'naive-ui'

/** 主题相关类型 */
declare namespace VTheme {
  type ColorNumber = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`
  type ColorVariable = 'primary' | `primary-${ColorNumber}`
}

declare global {
  declare namespace NTheme {
    /** 颜色类型 */
    type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
    /** 颜色类型大写值 */
    type ColorTypeCase = 'Primary' | 'Info' | 'Success' | 'Warning' | 'Error'
    /** 颜色场景 */
    type ColorScene = '' | 'suppl' | 'hover' | 'pressed'
    /** 颜色场景大写值 */
    type ColorSceneCase = '' | 'Suppl' | 'Hover' | 'Pressed'
    /** 按钮颜色场景 */
    type ButtonColorScene = '' | 'hover' | 'pressed' | 'focus' | 'disabled'
    /** 按钮颜色场景大写值 */
    type ButtonColorSceneCase = '' | 'Hover' | 'Pressed' | 'Focus' | 'Disabled'
    // 主题配置
    type Config = {
      [key in NTheme.ColorType]: string
    }
  }

  interface Window {
    $message: MessageApi
    $dialog: DialogApi
    $notification: NotificationApi
    $loadingBar: LoadingBarApi
  }
}
