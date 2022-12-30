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

```js
function copyToClipboard(str) {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(str)
  } else {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
}
```

## 获取地址栏参数

```js
function getURLParameters(url) {
  const newUrl = url || window.location.href
  return (newUrl.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  )
}
```

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

```js
function deepMerge(a, b, fn) {
  return [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
    {}
  )
}

// 例子🌰
deepMerge(
  { a: true, b: { c: [1, 2, 3] } },
  { a: false, b: { d: [1, 2, 3] } },
  (key, a, b) => (key === 'a' ? a && b : Object.assign({}, a, b))
)
// { a: false, b: { c: [ 1, 2, 3 ], d: [ 1, 2, 3 ] } }
```

## 重命名键

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

// 例子🌰
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 }
renameKeys({ name: 'firstName', job: 'passion' }, obj)
// { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```

## 解析 Cookie

```js
export const parseCookie = (str) =>
  str
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {})

// 例子🌰
parseCookie('foo=bar; equation=E%3Dmc%5E2')
// { foo: 'bar', equation: 'E=mc^2' }
```

## 序列化 Form

```js
export const serializeForm = (form) =>
  Array.from(new FormData(form), (field) =>
    field.map(encodeURIComponent).join('=')
  ).join('&')

// 例子🌰
serializeForm(document.querySelector('#form'))
// email=test%40email.com&name=Test%20Name
```

## Form 转 Object

```js
export const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  )

// 例子
formToObject(document.querySelector('#form'))
// { email: 'test@email.com', name: 'Test Name' }
```

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
export const detectLanguage = (defaultLang = 'en-US') =>
  navigator.language ||
  (Array.isArray(navigator.languages) && navigator.languages[0]) ||
  defaultLang

// 例子
detectLanguage() // 'zh-CN'
```

## 检测用户设备类型

```js
export const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop'

// 例子
detectDeviceType() // 'Mobile' or 'Desktop'
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

```js
export const deepEquals = (a, b) => {
  if (a === b) return true
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b
  if (a.prototype !== b.prototype) return false
  const keys = Object.keys(a)
  if (keys.length !== Object.keys(b).length) return false
  return keys.every((k) => equals(a[k], b[k]))
}

// 例子
const a = { name: 'John', age: 26 }
const b = { name: 'John', age: 26 }

equals(a, b) // true

const c = { name: 'John' }
const d = { name: 'John', age: undefined }

equals(c, d) // false
```

## 数组转嵌套对象

```js
export const setValueToField = (fields, value) => {
  const reducer = (acc, item, index, arr) => ({
    [item]: index + 1 < arr.length ? acc : value
  })
  return fields.reduceRight(reducer, {})
}

// 例子
const targetObject = setValueToField(['one', 'two', 'three'], 'nice')
console.log(targetObject) // Output: { one: { two: { three: 'nice' } } }
```

## 获取 min-max 之前的随机数

```js
export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)
```

## 生成随机字符串

```js
export const randomString = () => Math.random().toString(36).slice(2)
```
