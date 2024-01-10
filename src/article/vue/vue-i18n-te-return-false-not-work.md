---
date: 2024-01-10
category:
  - Vue
tag:
  - Vue
  - i18n
layout: ArticleLayout
containerClass: article-container
---

# 解决vue i18n te方法不生效

在之前vue2的版本中，经常在`axios`请求中对于后端返回的部分错误码进行国际化报错处理，使用`te('some.key')`判断key是否在国际化文件中，如果存在就翻译key进行报错，如果不存在则提示后端返回的具体错误信息。新项目使用Vue3 + [vue-i18n-next](https://github.com/intlify/vue-i18n-next)，发现在使用`te`或者`$te`方法均返回的`false`，Google搜索一番后找到一个[issue](https://github.com/kazupon/vue-i18n/issues/1521)完美解决问题，记录下相关的代码。

<!-- more -->

## 解决代码

重新复写`i18n`的`te`方法，新增国际化key是否存在的判断。

> `has`是`lodash`的方法
> "vue-i18n": "^9.9.0"

```ts
i18n.global.te = (
  key: Parameters<typeof i18n.global.te>[0],
  locale: Parameters<typeof i18n.global.te>[1]
) => {
  const effectiveLocale = locale && locale.length ? locale : i18n.global.locale
  const messages = i18n.global.messages[effectiveLocale]
  return has(messages, key)
}
```
