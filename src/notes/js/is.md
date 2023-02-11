---
category:
  - 代码笔记
---

# is 判断类型

```js
const getType = (data) => Object.prototype.toString.call(data).slice(8, -1)
```

## 是否是数组

```js
function isArray(data): {
  return getType(data) === 'Array';
}
```

## 是否是对象

```js
function isObject(data) {
  return getType(data) === 'Object'
}
```

## 是否是字符串

```js
function isString(data) {
  return getType(data) === 'String'
}
```

## 是否是数字

```js
function isNumber(data) {
  return getType(data) === 'Number' && data === data
}
```

## 是否是正则

```js
function isRegExp(data) {
  return getType(data) === 'RegExp'
}
```

## 是否是文件

```js
function isFile(data) {
  return getType(data) === 'File'
}
```

## 是否是 Blob

```js
function isBlob(data) {
  return getType(data) === 'Blob'
}
```

## 是否是方法

```js
function isFunction(data) {
  return typeof data === 'function'
}
```

## 是否是空对象

```js
function isEmptyObject(data) {
  return isObject(data) && Object.keys(data).length === 0
}
```

## 判断是否是有效值

```js
function isValid(data) {
  return !!data || data === 0 || data === false
}
```
