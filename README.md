# liubing.me

基于 VuePress 的个人博客，记录日常开发问题。

## 博客主题

[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)

## 启动服务

> 本仓库使用的 Node 版本：v18.16.0

```sh
pnpm install # 安装依赖
pnpm docs:dev # 启动服务
pnpm docs:build # 打包
```

## 打包构建

~~由于需要发布到自己的服务器，加上 Github Action 被封了，不得已利用 Buddy，相关教程参考：[点击前往](https://liubing.me/article/vue/vuepress-automatically-deploys-to-own-servers-with-buddy.html)~~

Buddy 免费额度构建时间太少，已经改用[CircleCI](https://circleci.com/)，具体配置文件参考[config.yml](https://github.com/liub1934/liubing.me/blob/main/.circleci/config.yml)
