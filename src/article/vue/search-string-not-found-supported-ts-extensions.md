---
date: 2024-11-26
category:
  - Vue
tag:
  - Vue
  - TypeScript
layout: ArticleLayout
containerClass: article-container
---

# vue-tsc 报错 Search string not found: /supportedTSExtensions

手贱升级项目的依赖，完事后运行启动项目的命令，发现一直报错

```
Search string not found: "/supportedTSExtensions = .*(?=;)/"
(Use `node --trace-uncaught ...` to show where the exception was thrown)
```

导致项目一直起不来。就按报错的关键词 Google 搜索了下，找到一个 2 天前 Nuxt 仓库的 [Issue](https://github.com/nuxt/nuxt/issues/30026)

<!-- more -->

## 解决方案

翻了下该 Issue，有人给出了 bug 的来源 [vuejs/language-tools#5018](https://github.com/vuejs/language-tools/issues/5018)，点进去看看，该 Issue 日期也是新鲜的。

Issue 中也有人给出了[解决方法](https://github.com/vuejs/language-tools/issues/5018#issuecomment-2494783497)，自己尝试了是可行的。

- vue-tsc 版本切换成固定的 2.0.29
- typescript 版本切换成固定的 5.6.2

```json {6,7}
{
  "scripts": {
    "build": "vue-tsc -b && vite build"
  },
  "devDependencies": {
    "vue-tsc": "2.0.29",
    "typescript": "5.6.2",
    "vite": "^5.4.10",
    "@vitejs/plugin-vue": "^5.1.4"
  }
}
```

最后重新安装依赖即可，官方应该会最近就会修复该问题了。
