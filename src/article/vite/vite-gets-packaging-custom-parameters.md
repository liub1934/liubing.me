---
date: 2024-03-23
category:
  - Vite
tag:
  - Vite
layout: ArticleLayout
containerClass: article-container
---

# Vite 获取打包自定义参数

虽然 Vite 支持[环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html)，支持配置各种环境变量及获取，但部分情况我们可能不想讲该配置放到环境变量里面，比如我想运行一个打包分析，生成代码分析报告的命令：`npm run report`，执行代码打包并生成代码分析报告，不想因为额外一个命令去维护一个单独的环境变量，此时我们就可以使用`-- --`在打包的时候传递额外的自定义参数。

<!-- more -->

## 使用

`package.json`中新增`report`命令，执行 test 环境打包命令，并附带上`--report`自定义参数。

```json
{
  "scripts": {
    "dev": "run-p type-check && vite",
    "build-test": "run-p type-check && vite build --mode test",
    "report": "run-p type-check && vite build --mode test -- --report"
  }
}
```

在`vite.config.ts`配置文件中可以通过`process.argv`来获取所有的参数，其中也包括自定义的参数，可以`console.log`打印看下。

可以发现返回的结构是一个数组，其中自定义的参数`--report`也在其中。

![image](https://image.liubing.me/i/2024/03/23/65fe4e5e2dc2b.png)

可以判断`--report`存不存在，如果存在的话可以执行一些额外的操作，比如使用打包分析的插件。

```ts
if (process.argv.includes('--report')) {
  // 执行添加打包分析插件
  plugins.push(analyzer)
}
```
