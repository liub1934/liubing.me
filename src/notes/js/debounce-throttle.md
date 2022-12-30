---
order: 4
category:
  - 代码笔记
---

# 防抖节流

![image](https://image.liubing.me/2021/03/25/ec6edc3e84fa6.gif)

## 防抖函数（debounce）

防抖函数原理：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

```js
function debounce(fn, time) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}
```

## 节流函数（throttle）

防抖函数原理:规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

```js
function throttle(fn, time) {
  let inTime = false
  return (...args) => {
    if (inTime) return
    inTime = true
    setTimeout(() => {
      fn.apply(this, args)
      inTime = false
    }, time)
  }
}
```
