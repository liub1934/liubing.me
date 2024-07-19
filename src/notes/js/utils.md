---
order: 1
category:
  - 代码笔记
---

# 通用工具

## UUID 生成

```js
function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime() //Timestamp
  var d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0 //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
```

## 复制到剪贴板

::: code-tabs
@tab JS

```js
function copyToClipboard(str, success, failure) {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(str).then(success).catch(failure)
  } else {
    var el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    if (document.execCommand('copy')) {
      success()
    } else {
      failure()
    }
    document.body.removeChild(el)
  }
}
```

@tab TS

```ts
function copyToClipboard(
  str: string,
  success: () => void,
  failure: () => void
): void {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(str).then(success).catch(failure)
  } else {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    if (document.execCommand('copy')) {
      success()
    } else {
      failure()
    }
    document.body.removeChild(el)
  }
}
```

:::

## 获取地址栏参数

::: code-tabs
@tab JS

```js
function getUrlParams(url) {
  url = url || window.location.search
  var params = {}
  var pairs = url.match(/[^&?]+=[^&]+/g) || []
  pairs.reduce(function (acc, pair) {
    var kv = pair.split('=')
    acc[kv[0]] = decodeURIComponent(kv[1])
    return acc
  }, params)
  return params
}
```

@tab TS

```ts
function getUrlParams(url?: string): { [key: string]: string } {
  url = url || window.location.search
  let params: { [key: string]: string } = {}
  let pairs = url.match(/[^&?]+=[^&]+/g) || []
  pairs.reduce(function (acc, pair) {
    let kv = pair.split('=')
    acc[kv[0]] = decodeURIComponent(kv[1])
    return acc
  }, params)
  return params
}
```

:::

## 睡眠 Sleep

```js
// 同步
function sleepSync(ms) {
  const end = new Date().getTime() + ms
  while (new Date().getTime() < end) {
    /* do nothing */
  }
}
// 例子🌰
const printNums = () => {
  console.log(1)
  sleepSync(500)
  console.log(2)
  console.log(3)
}

// 异步
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
// 例子🌰
const printNums = async () => {
  console.log(1)
  await sleep(500)
  console.log(2)
  console.log(3)
}
```

## 深度合并对象

::: code-tabs
@tab JS

```js
function deepMerge(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        deepMerge(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return deepMerge(target, ...sources)
}

// 举个🌰
const obj1 = { a: 1, b: { c: 2 } }
const obj2 = { b: { d: 3 }, e: 4 }

const result = deepMerge(obj1, obj2)
console.log(result) // { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

@tab TS

```ts
function deepMerge<T, U>(target: T, source: U): T & U {
  for (const key in source) {
    if (isObject(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} })
      deepMerge(target[key], source[key])
    } else {
      Object.assign(target, { [key]: source[key] })
    }
  }

  return target as T & U
}

// 举个🌰
const obj1 = { a: 1, b: { c: 2 } }
const obj2 = { b: { d: 3 }, e: 4 }

const result = deepMerge(obj1, obj2)
console.log(result) // { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

:::

## 重命名键

::: code-tabs
@tab JS

```js
function renameKeys(keysMap, obj) {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  )
}

// 举个🌰
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 }
renameKeys({ name: 'firstName', job: 'passion' }, obj)
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```

@tab TS

```ts
function renameKeys(
  keysMap: Record<string, string>,
  obj: Record<string, any>
): Record<string, any> {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  )
}
// 举个🌰
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 }
renameKeys({ name: 'firstName', job: 'passion' }, obj)
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```

:::

## 解析 Cookie

::: code-tabs
@tab JS

```js
function parseCookie(cookie) {
  if (!cookie) return {}

  return cookie.split(';').reduce((cookies, cookie) => {
    let [key, value] = cookie.split('=')
    cookies[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim())
    return cookies
  }, {})
}

// 举个🌰
parseCookie('foo=bar; equation=E%3Dmc%5E2')
// { foo: 'bar', equation: 'E=mc^2' }
```

@tab TS

```ts
function parseCookie(cookie: string): { [key: string]: string } {
  if (!cookie) return {}

  return cookie
    .split(';')
    .reduce((cookies: { [key: string]: string }, cookie) => {
      let [key, value] = cookie.split('=')
      cookies[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim())
      return cookies
    }, {})
}

// 举个🌰
parseCookie('foo=bar; equation=E%3Dmc%5E2')
// { foo: 'bar', equation: 'E=mc^2' }
```

:::

## FormData 转 Object

::: code-tabs
@tab JS

```js
function formToObject(formData) {
  let object = {}
  for (const [key, value] of formData.entries()) {
    object[key] = value
  }
  return object
}
```

@tab TS

```ts
function formToObject<T>(formData: FormData): T {
  let object: T = {} as T
  for (const [key, value] of formData.entries()) {
    ;(object as any)[key] = value
  }
  return object
}
```

:::

## 是否是浏览器环境

```js
export const isBrowser = () =>
  ![typeof window, typeof document].includes('undefined')

// 例子
isBrowser() // true (browser)
isBrowser() // false (Node)
```

## 是否是绝对 URL

```js
export const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str)

// 例子
isAbsoluteURL('https://google.com') // true
isAbsoluteURL('ftp://www.myserver.net') // true
isAbsoluteURL('/foo/bar') // false
```

## 检测当前用户的首选语言

```js
function getPreferredLanguage() {
  return navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage
}
```

## 检测用户设备类型

```js
function detectDevice() {
  const isMobile = /(iphone|ipod|ipad|android|blackberry|windows phone)/i.test(
    navigator.userAgent
  )
  return isMobile ? 'mobile' : 'desktop'
}
```

## 检查是否启用 localStorage

```js
export const isLocalStorageEnabled = () => {
  try {
    const key = `__storage__test`
    window.localStorage.setItem(key, null)
    window.localStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}

// 例子
isLocalStorageEnabled() // true, if localStorage is accessible
```

## 检查是否启用 sessionStorage

```js
export const isSessionStorageEnabled = () => {
  try {
    const key = `__storage__test`
    window.sessionStorage.setItem(key, null)
    window.sessionStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}
isSessionStorageEnabled() // true, if sessionStorage is accessible
```

## 检查是否支持 Touch 事件

```js
export const supportsTouchEvents = () => window && 'ontouchstart' in window

// 例子
supportsTouchEvents() // true
```

## 深度对象比较

::: code-tabs
@tab JS

```js
function deepEquals(a, b) {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b
  if (a.prototype !== b.prototype) return false
  const keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every((k) => deepEquals(a[k], b[k]))
}

// 例子
const a = { name: 'John', age: 26 }
const b = { name: 'John', age: 26 }

deepEquals(a, b) // true

const c = { name: 'John' }
const d = { name: 'John', age: undefined }

deepEquals(c, d) // false
```

@tab TS

```ts
function deepEquals(a: any, b: any): boolean {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b
  if (a.prototype !== b.prototype) return false
  const keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every((k) => deepEquals(a[k], b[k]))
}
```

:::

## 数组转嵌套对象

::: code-tabs
@tab JS

```js
function arrayToObject(array, value) {
  return array.reverse().reduce((acc, curr) => {
    const obj = {}
    obj[curr] = acc
    return obj
  }, value)
}

const inputArray = ['one', 'two', 'three']
const inputValue = 'nice'
const output = arrayToObject(inputArray, inputValue)
// output: { one: { two: { three: 'nice' } } }
```

@tab TS

```ts
function arrayToObject(array: string[], value: any): any {
  return array.reverse().reduce((acc, curr) => {
    const obj: any = {}
    obj[curr] = acc
    return obj
  }, value)
}
```

:::

## 获取 min-max 之前的随机数

```js
export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)
```

## 生成随机字符串

```js
export const randomString = () => Math.random().toString(36).slice(2)
```
