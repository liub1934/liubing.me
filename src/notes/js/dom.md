---
order: 3
category:
  - 代码笔记
---

# DOM 相关

## 平滑滚动到指定元素

::: code-tabs
@tab JS

```js
function slowScrollTo(element, speed = 1000, offset = 0) {
  if (!element) return
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset + offset
  const startPosition = window.pageYOffset
  let distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easeInOutQuad(timeElapsed, startPosition, distance, speed)
    window.scrollTo(0, run)
    if (timeElapsed < speed) requestAnimationFrame(animation)
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// 例子
const element = document.getElementById('targetElementId')
slowScrollTo(element, 1000, 0)
```

@tab TS

```ts
function slowScrollTo(element: HTMLElement, speed = 1000, offset = 0): void {
  if (!element) return
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset + offset
  const startPosition = window.pageYOffset
  let distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number): void {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easeInOutQuad(timeElapsed, startPosition, distance, speed)
    window.scrollTo(0, run)
    if (timeElapsed < speed) requestAnimationFrame(animation)
  }

  function easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// 举个🌰
const element = document.getElementById('targetElementId') as HTMLElement
slowScrollTo(element, 1000, 0)
```

:::

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

::: code-tabs
@tab JS

```js
function isScrolledToBottom(offset = 0) {
  return (
    document.documentElement.clientHeight + window.scrollY + offset >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  )
}

// 举个🌰
isScrolledToBottom() // true or false
```

@tab TS

```ts
function isScrolledToBottom(offset: number = 0): boolean {
  return (
    document.documentElement.clientHeight + window.scrollY + offset >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  )
}

// 举个🌰
isScrolledToBottom() // true
```

:::

## 判断是否含有某个 class

::: code-tabs
@tab JS

```js
function hasClass(element, className) {
  if (Array.isArray(className)) {
    for (var i = 0; i < className.length; i++) {
      if (!element.classList.contains(className[i])) {
        return false
      }
    }

    return true
  } else {
    return element.classList.contains(className)
  }
}
```

@tab TS

```ts
function hasClass(element: HTMLElement, className: string | string[]): boolean {
  if (Array.isArray(className)) {
    for (const name of className) {
      if (!element.classList.contains(name)) {
        return false
      }
    }

    return true
  } else {
    return element.classList.contains(className)
  }
}
```

:::

## 添加 class

::: code-tabs
@tab JS

```js
function addClass(element, classNames) {
  if (!element) return

  if (typeof classNames === 'string') {
    classNames = classNames.split(' ')
  }

  classNames.forEach(function (className) {
    element.classList.add(className)
  })
}
```

@tab TS

```ts
function addClass(element: Element, classNames: string | string[]): void {
  if (!element) return

  if (typeof classNames === 'string') {
    classNames = classNames.split(' ')
  }

  classNames.forEach(function (className: string) {
    element.classList.add(className)
  })
}
```

:::

## 移除 class

::: code-tabs
@tab JS

```js
function removeClass(element, classNames) {
  if (!element) return

  if (typeof classNames === 'string') {
    classNames = classNames.split(' ')
  }

  classNames.forEach(function (className) {
    element.classList.remove(className)
  })
}
```

@tab TS

```ts
function removeClass(element: Element, classNames: string | string[]): void {
  if (!element) return

  if (typeof classNames === 'string') {
    classNames = classNames.split(' ')
  }

  classNames.forEach(function (className: string) {
    element.classList.remove(className)
  })
}
```

:::

## 监听

::: code-tabs
@tab JS

```js
export function on(element, event, handler) {
  if (element && event) {
    element.addEventListener(event, handler, false)
  }
}
```

@tab TS

```ts
import { Element, EventListener } from '@types/dom'

function on(element: Element, event: string, handler: EventListener): void {
  if (element && event) {
    element.addEventListener(event, handler, false)
  }
}
```

:::

## 移除监听

::: code-tabs
@tab JS

```js
export function off(element, event, handler) {
  if (element && event) {
    element.removeEventListener(event, handler, false)
  }
}
```

@tab TS

```ts
import { Element, EventListener } from '@types/dom'

function on(element: Element, event: string, handler: EventListener): void {
  if (element && event) {
    element.removeEventListener(event, handler, false)
  }
}
```

:::
