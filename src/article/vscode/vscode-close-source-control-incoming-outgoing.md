---
date: 2024-08-13
category:
  - VsCode
tag:
  - VsCode
layout: ArticleLayout
containerClass: article-container
---

# VsCode 关闭源代码管理中的 传入/传出

前几天自从重启VsCode自动更新后，在源代码管理中多出了`传入/传出`，大量的记录导致VsCode变的极度卡顿，网上搜索一番后记录下怎么关闭。

<!-- more -->

![image](https://image.liubing.me/i/2024/08/13/66bb03400d623.png)

## 关闭 传入/传出

在设置中搜索`showHistoryGraph`，默认是勾选开启状态，取消勾选禁用即可，可以据你的需求选择更改用户/工作区的设置。

![image](https://image.liubing.me/i/2024/08/13/66bb03f4bb3fe.png)

或者直接在配置文件中加入以下内容：

```json
{
  "scm.showHistoryGraph": false
}
```
