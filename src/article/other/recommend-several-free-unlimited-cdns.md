---
date: 2019-03-16
category:
  - CDN
tag:
  - jsDelivr
  - Statically
  - GitHack
  - Staticaly
  - CDN
layout: ArticleLayout
containerClass: article-container
---

# 推荐几款免费且不限流量的全球 CDN

推荐几个免费的且不限流量的 CDN，包括`jsDelivr` `Statically` `GitHack` 全球通用，可以存储些网站的静态资源，然后引用 CDN 地址，优化网站的访问速度。

<!-- more -->

## jsDelivr

官网地址：[https://www.jsdelivr.com](https://www.jsdelivr.com) 没梯子访问可能有点慢，不过 CDN 的节点是很快的 可以引用的资源包括 NPM、github、wordpress 的所有资源，github 可以是任意体积小于 50M 的仓库，具体使用参考官网，有介绍，或者看下面的介绍

### NPM

```text
//加载在npm上托管的任何项目
https://cdn.jsdelivr.net/npm/package@version/file

//加载jQuery v3.2.1
https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js

//使用版本范围而不是特定版本
https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js
https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js

//完全省略版本以获取最新版本
//你不应该在生产中使用它
https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js

//将“.min”添加到任何JS / CSS文件中以获得缩小版本
//如果一个不存在，我们将为您生成它
https://cdn.jsdelivr.net/npm/jquery@3.2.1/src/core.min.js

//省略文件路径以获取默认文件
https://cdn.jsdelivr.net/npm/jquery@3.2

//在末尾添加/以获取目录列表
https://cdn.jsdelivr.net/npm/jquery/
```

### Github

```text
//加载任何GitHub版本，提交或分支
//注意：我们建议将npm用于支持它的项目
https://cdn.jsdelivr.net/gh/user/repo@version/file

//任意Github仓库
//主分支
https://cdn.jsdelivr.net/gh/liub1934/LB-Blog@master/wp-content/themes/Memory/style.css
//版本分支
https://cdn.jsdelivr.net/gh/liub1934/LB-Blog@630440b51d272219117ca7fe34ec5ee4e005e8a9/wp-content/themes/Memory/style.css

//加载jQuery v3.2.1
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js

//使用版本范围而不是特定版本
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js
https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js

//完全省略版本以获取最新版本
//你不应该在生产中使用它
https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js

//将“.min”添加到任何JS / CSS文件中以获得缩小版本
//如果一个不存在，我们将为您生成它
https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js

//在末尾添加/以获取目录列表
https://cdn.jsdelivr.net/gh/jquery/jquery/
```

### wordpress

```text
//从WordPress.org插件SVN repo加载任何插件
https://cdn.jsdelivr.net/wp/plugins/project/tags/version/file

//加载一个确切的版本
https://cdn.jsdelivr.net/wp/plugins/wp-slimstat/tags/4.6.5/wp-slimstat.js

//加载最新版本
//你不应该在生产中使用它
https://cdn.jsdelivr.net/wp/plugins/wp-slimstat/trunk/wp-slimstat.js

//从WordPress.org主题SVN repo加载任何主题
https://cdn.jsdelivr.net/wp/themes/project/version/file

//加载一个确切的版本
https://cdn.jsdelivr.net/wp/themes/twenty-eightteen/1.7/assets/js/html5.js

//将“.min”添加到任何JS / CSS文件中以获得缩小版本
//如果一个不存在，我们将为您生成它
https://cdn.jsdelivr.net/wp/themes/twenty-eightteen/1.7/assets/js/html5.min.js
```

## Statically

官网地址：[https://www.statically.io](https://www.statically.io)  
轻松地从 GitHub / GitLab / Bitbucket 加载您的项目 没有流量限制或限制。  
文件通过超快速全球 CDN 提供。 在 URL（不是分支）中使用特定标记或提交哈希。  
根据 URL 永久缓存文件。 除 master 分支外，文件在浏览器中缓存 1 年。 具体用法：

### GitHub CDN

```text
https://cdn.statically.io/gh/:user/:repo/:tag/:file
```

### GitLab CDN

```text
https://cdn.statically.io/gl/:user/:repo/:tag/:file
```

### Bitbucket CDN

```text
https://cdn.statically.io/bb/:user/:repo/:tag/:file
```

### WordPress CDN

```text
https://cdn.statically.io/wp/c/:version/wp-includes/:file
https://cdn.statically.io/wp/p/:plugin_name/:version/:file
https://cdn.statically.io/wp/t/:theme_name/:version/:file
```

### Imgpx CDN

```text
https://cdn.statically.io/img/:image_url
```

### Favicons CDN

```text
https://cdn.statically.io/favicons/:favicon_url
```

### 举个栗子

```text
//从GitHub 加载jQuery的生产文件
https://cdn.statically.io/gh/jquery/jquery-dist/master/dist/jquery.min.js

//和Bootstrap CSS
https://cdn.statically.io/gh/twbs/bootstrap/v4-dev/dist/css/bootstrap.min.css

//或者来自WordPress.org SVN的WordPress核心文件
https://cdn.statically.io/wp/c/latest/wp-includes/css/dashicons.min.css

//或者自己的任意仓库
//主分支
https://rawcdn.githack.com/liub1934/LB-Blog/master/wp-content/themes/Memory/emoji/xiaodianshi/baiyan.png

//版本分支
https://rawcdn.githack.com/liub1934/LB-Blog/8806f440d3f9a7cc3e6125d7d75564e40262c6a8/wp-content/themes/Memory/emoji/xiaodianshi/baiyan.png
```

## GitHack

直接从 GitHub，Bitbucket 或 GitLab 提供原始文件  
官网地址：[http://raw.githack.com/](http://raw.githack.com) 具体用法和上面的`Statically`很类似

### github

```text
//主分支
https://rawcdn.githack.com/liub1934/LB-Blog/master/wp-content/themes/Memory/emoji/xiaodianshi/baiyan.png

//版本分支
https://rawcdn.githack.com/liub1934/LB-Blog/8806f440d3f9a7cc3e6125d7d75564e40262c6a8/wp-content/themes/Memory/emoji/xiaodianshi/baiyan.png
```

## 结语

以上几款免费的 CDN，都是不限流量的，所以可以用于个人的项目，公司的项目请酌情考虑使用，  
可能会存在流量过大导致出现一些问题。  
一些比较：  
1、jsDelivr：图片资源过多可能会出现一些问题，例如本站的表情图片，之前用的一直是 jsDelivr，经常出现一大片的表情加载失败的情况，也可能和我表情图片 CDN 用的是 master 主版本的原因，因为经常提交有变动，本站其他的静态资源一切都好。  
2、Statically：和 jsDelivr 的问题一样，过多的表情图片有时候个别的几个表情加载不出来，通过地址直接打开页面 503 报错。不过 Statically 有个`imgpx`可以优化图片，具体参考：[https://www.statically.io/imgpx](https://www.statically.io/imgpx)  
3、GitHack：最后过多的图标表情的问题还是通用 GitHack 加载解决了，没有出现上面所说的部分表情图片加载失败的情况。上面的文件都是通过[CloudFlare](https://www.cloudflare.com)的 CDN 提供，CloudFlare 国外很有名，资源应该也相对稳定些。
