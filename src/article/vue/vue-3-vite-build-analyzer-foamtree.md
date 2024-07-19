---
date: 2024-03-23
category:
  - Vue
tag:
  - Vue
  - Vue3
  - FoamTree
  - rollup-plugin-visualizer
  - vite-bundle-analyzer
layout: ArticleLayout
containerClass: article-container
---

# rollup-plugin-visualizer 替代插件 vite-bundle-analyzer

不知道为什么，搜索`vue3打包分析`、`vite打包分析`，清一色的都是推荐的使用`rollup-plugin-visualizer`插件，我自己也使用过，感觉这个打包分析的插件生成的分析报告贼不好用，不支持放大缩小，只能点击模块进行放大，尝试了下按`Exclude`和`Include`关键词搜索也搜索不出内容，不知道是不是我使用有问题还是我搜索方式不对，总之感觉没有vue2的`vue-cli-service`生成的报告好使。

<!-- more -->

## 对比

![image](https://image.liubing.me/i/2024/03/23/65fe43e4a13fa.png)

![image](https://image.liubing.me/i/2024/03/23/65fe423b4c3f4.png)

`vue-cli-service build --report`提供的`--report`可以非常方便的生成打包分析报告，支持放大缩小，模块关键词搜索。

![image](https://image.liubing.me/i/2024/03/23/65fe4463a909f.png)

## 替代插件

后来根据关键词在Google上各种搜索，终于找到了可以替代的打包分析插件[vite-bundle-analyzer](https://github.com/nonzzz/vite-bundle-analyzer)。

![image](https://image.liubing.me/i/2024/03/23/65fe464724647.gif)

## 安装使用

```sh
yarn add vite-bundle-analyzer -D
# or
npm install vite-bundle-analyzer -D
```

```ts
import { defineConfig } from "vite";

import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  plugins: [
    // ...your plugin
    analyzer({
      analyzerMode: "static" // 使用静态模式，会生成一个可以直接打开的html文件
      fileName: "report" // 生成Html的名称
    }),
  ],
});

// If you are using it in rollup you can import 'adapter' from package.
// Then use it with adapter(analyzer())
```

运行打包命令后打开生成的Html就能看到熟悉的界面了。

![image](https://image.liubing.me/i/2024/03/23/65fe474402e99.png)
