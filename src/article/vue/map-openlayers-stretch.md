---
date: 2019-08-19
category:
  - Vue
  - Web
  - OpenLayers
tag:
  - Vue
  - 地图
  - 高德地图
layout: ArticleLayout
containerClass: article-container
---

# 解决 OpenLayers 初始化地图贴片被拉伸问题

OpenLayers 地图加载高德地图数据的时候，在初始化的时候地图贴片被拉伸，
下图可以很明显的看到底图被拉伸了，可以配合高德加载的块图片比较下。

<!-- more -->

[http://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=1711&y=831&z=11](http://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=1711&y=831&z=11)

![image](https://image.liubing.me/2019/12/26/28de90461c4b2.png)

![image](https://image.liubing.me/2019/12/26/2fdf854263f84.png)

下图为调整窗口后自动更新了地图的底图尺寸，变成正常的，可以和上面的比较下

![image](https://image.liubing.me/2019/12/26/75a33c6ec1c83.png)

初始化的时候底图被拉伸变形，导致绘图的点的位置不正确，如下面的动图所示。

![1566195584967-5cda7db7-a0e8-427f-8686-3e291f92fdf1](https://image.liubing.me/2019/12/26/8aacb6511c13b.gif)

## 解决方法

通过查阅文档，得知`Map`下面有个`updateSize`方法用于强制重新计算地图大小
所以在地图初始化的可以异步调用下这个方法即可：

```javascript
this.GDMap = new Map({
  target: 'GDMap',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
      })
    }),
    this.vector
  ],
  view: new View({
    projection: 'EPSG:4326',
    center: [120.864608, 32.016212],
    zoom: 11,
    minZoom: 5,
    maxZoom: 20
  })
})
setTimeout(() => {
  this.GDMap.updateSize()
}, 20)
```
