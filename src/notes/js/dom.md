---
order: 3
category:
  - 代码笔记
---

# DOM 相关

## 平滑滚动到顶部

```js
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

// 例子
scrollToTop() // Smooth-scrolls to the top of the page
```

## 平滑滚动到指定元素

```js
export const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  })

// 例子
smoothScroll('#fooBar') // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar')
// scrolls smoothly to the first element with a class of fooBar
```

## 获取滚动位置

```js
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 例子
getScrollPosition() // {x: 0, y: 200}
```

## 检查是否见底

```js
export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight)

// 例子
bottomVisible() // true
```

## 判断是否含有某个 class

```j s
export function hasClass(ele, cls) {
  cls = cls || ''
  if (cls.replace(/\s/g, '').length === 0) return false // 当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ')
}
```

## 添加 class

```js
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className === '' ? cls : ele.className + ' ' + cls
  }
}
```

## 移除 class

```js
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' '
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ')
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}
```

## 监听

```js
export function on(element, event, handler) {
  if (element && event) {
    element.addEventListener(event, handler, false)
  }
}
```

## 移除监听

```js
export function off(element, event, handler) {
  if (element && event) {
    element.removeEventListener(event, handler, false)
  }
}
```
