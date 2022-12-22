---
title: 友情链接
toc: false
---

```
站点名称：Bing🐣
站点地址：https://liubing.me
站点描述：基于VuePress的个人博客，记录日常开发问题。
站点Logo：https://liubing.me/logo.png
```

请先将本站加入友链后，在下方评论按如下格式提供信息：

```
icon: '网站图标'
name: '网站名字'
desc: '网站描述'
link: '网站链接'
```

## 固定链接

<ProjectPanel :projects="projects1" />

## 友链链接

<ProjectPanel :projects="projects2" />

<script setup lang="ts">
  const projects1 = [
    {
      icon: 'https://cn.vuejs.org/logo.svg',
      name: 'Vue',
      desc: '渐进式 JavaScript 框架',
      link: 'https://cn.vuejs.org/'
    },
    {
      icon: 'https://v2.vuepress.vuejs.org/images/hero.png',
      name: 'VuePress',
      desc: 'Vue 驱动的静态网站生成器',
      link: 'https://v2.vuepress.vuejs.org/zh/'
    },
    {
      icon: 'https://vuepress-theme-hope.github.io/v2/assets/icon/ms-icon-144.png',
      name: 'VuePress Theme Hope',
      desc: '一个具有强大功能的 vuepress 主题✨',
      link: 'https://vuepress-theme-hope.github.io/v2/zh/'
    }
  ]
  const projects2 =  []
</script>
