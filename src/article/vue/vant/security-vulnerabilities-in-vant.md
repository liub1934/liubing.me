---
date: 2024-12-23
category:
  - Vue
  - Vant
tag:
  - Vant
layout: ArticleLayout
containerClass: article-container
---

# 一觉醒来天踏了，Vant 被投毒

每次早上醒来习惯性打开掘金签到，首页忽然看到 [Vant 和 Rspack 被注入恶意代码](https://juejin.cn/post/7450080841546121243)的推荐文章，打开一看好家伙，前端开源项目 Vant 的多个版本被注入恶意代码后，发布到了 npm 上，导致全网大面积被感染。

<!-- more -->

## 影响

相信国内 H5 开发，基本上都是用的 Vant 组件库，此次事件估计不少使用 Vant 的中枪，如果你最近有升级过版本，请迅速检查项目中是否使用到以下的 Vant 版本。相关讨论可以参考该[Issue](https://github.com/youzan/vant/issues/13275)和[Discussion](https://github.com/youzan/vant/discussions/13273)。

以下是已经废弃的异常版本，请勿使用 ⚠️

- 4.9.14
- 4.9.13
- 4.9.12
- 4.9.11
- 3.6.15
- 3.6.14
- 3.6.13
- 2.13.5
- 2.13.4
- 2.13.3

![image](https://image.liubing.me/i/2024/12/23/6768b498dbf96.png)

上述风险废弃的包在 NPM 上也会醒目提示着该版本已经弃用。

![image](https://image.liubing.me/i/2024/12/23/6768b66f24dd2.png)

相关风险可以参考 [web-infra-dev/rspack#8767 (comment)](https://github.com/web-infra-dev/rspack/issues/8767#issuecomment-2555772131) 里的代码，主要是被用于挖矿，以及云服务器 Token 泄露的风险，这个主要是在编译构建的时候会有风险。

## 解决

在项目中使用`npm ls vant`查看输出的 Vant 版本是否在上述废弃版本中，如果是的话赶紧升级 Vant 版本到最新。
