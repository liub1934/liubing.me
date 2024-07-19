---
date: 2022-12-16
category:
  - VsCode
tag:
  - VsCode
  - VsCode插件
  - Todo Tree
layout: ArticleLayout
containerClass: article-container
---

# VsCode 通用插件推荐之 Todo Tree

平常在码代码的过程中避免不了会加些 TODO、FIXME 之类的标记注释来提醒自己某处需要优化或者修复，当时间长久之后，标记注释内容就会过多，查找起来难免困难，难道你还在用全局搜索 TODO 关键词大法吗，这样就 Out 了，而且 TODO 相关的注视会和普通注释一样很不起眼，这时候你就需要一款管理和标记这些内容的插件了，大力推荐使用`Todo Tree`，该插件有很强的可自定义化，可按自己的需求进行颜色、背景色、图标等配置。

<!-- more -->

![image](https://image.liubing.me/2022/12/16/6bb1a771a76d6.png)

## 插件安装

在 VsCode 扩展中搜索`Todo Tree`进行安装

![image](https://image.liubing.me/2022/12/15/fb1672fc32ac6.png)

## 插件配置

插件支持很多个性化的配置，具体有哪些配置可以参考[文档说明](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)，插件支持`defaultHighlight`配置默认的高亮显示和`customHighlight`配置自定义的高亮显示。

![image](https://image.liubing.me/2022/12/16/c4429c0ea2151.png)

## 部分参数说明

### type

高亮的样式，支持的值有 `tag` `text` `tag-and-comment` `tag-and-subTag` `text-and-comment` `line` `whole-line`，样式说明请参考文档说明。下面罗列部分样式：

> `tag`显示效果

![image](https://image.liubing.me/2022/12/16/8535ef81d78a4.png)

> `text`显示效果

![image](https://image.liubing.me/2022/12/16/da05499f47360.png)

> `line`显示效果

![image](https://image.liubing.me/2022/12/16/f1d19d5ecbf96.png)

### foreground

设置高亮文字颜色，如下图所示设置的`white`和`blue`颜色

![image](https://image.liubing.me/2022/12/16/8535ef81d78a4.png)

![image](https://image.liubing.me/2022/12/16/9dfe3a4ea2d5e.png)

### icon

设置小图标显示，支持 N 多的图标，支持的图标可以在[https://octicons.github.com](https://octicons.github.com)或[https://microsoft.github.io/vscode-codicons/dist/codicon.html](https://microsoft.github.io/vscode-codicons/dist/codicon.html)获取。

![image](https://image.liubing.me/2022/12/16/59e9b39d03bd1.png)

![image](https://image.liubing.me/2022/12/16/7ac8c105d42fb.png)

![image](https://image.liubing.me/2022/12/16/77c100527fc0d.png)

### background、iconColour

高亮背景色和小图标的颜色，一般这个都设置成同一个值。

### gutterIcon

是否在编辑器侧边槽显示小图标，设置为 true 后会显示下图位置的小图标

![image](https://image.liubing.me/2022/12/16/0cfd940feafbf.png)

## 示例配置

单独针对`TODO`和`FIXME`类型设置了不同图标和高亮背景色。

```js
"todo-tree.highlights.defaultHighlight": {
    "type": "tag",
    "gutterIcon": true,
    "foreground": "white"
},
"todo-tree.highlights.customHighlight": {
  "TODO": {
    "icon": "checklist",
    "background": "orange",
    "iconColour": "orange"
  },
  "FIXME": {
    "icon": "bug",
    "background": "red",
    "iconColour": "red"
  }
},
```

除了上述 2 种关键词类型，插件还内置了以下类型，如果以下类型还不满足你的要求，还可以继续往下追加自定义的类型。

```js
"todo-tree.general.tags": [
  "BUG",
  "HACK",
  "FIXME",
  "TODO",
  "XXX",
  "[ ]",
  "[x]"
]
```
