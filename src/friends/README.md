---
toc: false
pageInfo: false
panelRenderTag: 'a'
---

# 友情链接

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

<ProjectPanel :projects="fixedLinks" />

## 友链链接

<ProjectPanel :projects="friendLinks" />

<script setup lang="ts">
  import fixedLinks from '@friends/fixedLinks'
  import friendLinks from '@friends/friendLinks'
</script>
