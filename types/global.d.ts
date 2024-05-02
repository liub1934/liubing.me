import type { VNodeChild } from 'vue'

declare global {
  declare type VueNode = VNodeChild | JSX.Element
  declare type Nullable<T> = T | null
  declare type Recordable<T = any> = Record<string, T>
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
  }
  declare type Indexable<T = any> = {
    [key: string]: T
  }
  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  declare type TimeoutHandle = ReturnType<typeof setTimeout>
  declare type IntervalHandle = ReturnType<typeof setInterval>
  declare const WebViewJavascriptBridge: any
}
