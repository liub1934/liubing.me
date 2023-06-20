---
date: 2019-05-17
category:
  - Vue
  - Web
tag:
  - Vue
  - 地图
  - 高德地图
layout: ArticleLayout
containerClass: article-container
---

# vue+高德地图开发采坑持续记录[2019-06-25]

整理了下日常地图开发过程中遇到的问题及解决方法，供大家参考，文章将会持续更新。

<!-- more -->

## 1、地图引入问题

网上搜索了一些资料，大部门都是 index.html 直接引入高德地图的 js 文件，个人感觉没有必要，毕竟地图只是部分页面需要使用，所以这种方法直接不考虑了。
然后又找到了一种地图懒加载的方法，需要的时候按需引入地图即可。
整理了下按需加载地图的 js，我们可以新建一个 js 文件，如`loadMap.js`,位置可以随意

这里为了引入方便直接放组件同级目录了，代码如下：

```javascript
/**
 * 动态加载高德地图
 *
 * @export
 * @param {*} key 高德地图key
 * @param {*} plugins 高德地图插件
 * @param {string} [v='1.4.14'] 高德地图版本
 * @returns
 */
export default function loadMap(key, plugins, v = '1.4.14') {
  return new Promise(function (resolve, reject) {
    if (typeof AMap !== 'undefined') {
      // eslint-disable-next-line no-undef
      resolve(AMap)
      return true
    }
    window.onCallback = function () {
      // eslint-disable-next-line no-undef
      resolve(AMap)
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=${v}&key=${key}&plugin=${plugins}&callback=onCallback`
    script.onerror = reject
    document.head.appendChild(script)
  })
}
```

### 使用

在需要用到的地方直接引用这个文件，再`mounted`的时候执行

```javascript
loadMap(this.key, this.plugins, this.v)
  .then((AMap) => {
    // 此处地图就加载成功了，然后就可以使用`new AMap.Map`来实例化地图了
    console.log('地图加载成功！')
  })
  .catch(() => {
    console.log('地图加载失败！')
  })
```

### 完整代码

为了更好的体验，这里加了一个`loading`动画，地图加载成功`complete`后取消`loading`效果。

```javascript
<template>
  <div class="map">
    <div id="GDMap"
      v-loading="loading">
    </div>
  </div>
</template>

<script>
import loadMap from './loadMap'
export default {
  data () {
    return {
      // 地图实例
      GDMap: null,
      // 加载的一些插件
      // 更多参考：https://lbs.amap.com/api/javascript-api/guide/abc/plugins#plugins
      plugins: [
        'AMap.OverView',
        'AMap.MouseTool',
        'AMap.PolyEditor',
        'AMap.RectangleEditor',
        'AMap.PlaceSearch',
        'AMap.DistrictLayer',
        'AMap.CustomLayer'
      ],
      // key
      key: 'c5eac55551560531336988396dacbf53',
      // 地图版本
      v: '1.4.14',
      loading: true
    }
  },
  mounted () {
    loadMap(this.key, this.plugins, this.v)
      .then(AMap => {
        this.GDMap = new AMap.Map('GDMap', {
          zoom: 11,
          center: [116.397428, 39.90923]
        })
        this.GDMap.on('complete', () => {
          this.loading = false
        })
      })
      .catch(() => {
        this.loading = false
        console.log('地图加载失败！')
      })
  }
}
</script>

<style>
#GDMap {
  width: 1200px;
  height: 500px;
    position: relative;
}
</style>
```

### 预览

<iframe width="100%" height="500" src="//jsrun.pro/8sbKp/embedded/all/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
 
## 2、获取多边形编辑的点的问题
 
说的直白点，就是多边形在拖动点编辑过程中知道是哪个点 
看了下官网的相关文档：[https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.PolyEditor](https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.PolyEditor) 
没找到相关的api，无奈只能自己写了。 
大致思路就是多边形在编辑过程中其他的点的坐标是不变了，唯一变化的就是被编辑的点，在编辑过程中做个判断即可找到这个点的索引。 
多边形在被编辑过程中是会触发`change`事件，所以可以利用这个事件写些判断， 
在拿到这个点的索引后我们就可以干点其他事情了。
 
### 核心代码
 
```javascript
// 多边形的path
let polygonPath = polygon.getPath()
// 索引
let index
// change事件
polygon.on('change', (ev) => {
  const curPath = ev.target.getPath()
  for (let i = 0; i < path.length; i++) {
    // 判断一直在变化的点
    if (polygonPath[i].lng !== curPath[i].lng || polygonPath[i].lat !== curPath[i].lat) {
      index = i
      break
    }
  }
  polygonPath = JSON.parse(JSON.stringify(curPath))
  console.log('编辑点索引：', index)
})
```
 
### 完整代码
 
```javascript
<template>
  <div class="map">
    <div id="GDMap"
      v-loading="loading">
    </div>
  </div>
</template>
 
<script>
import loadMap from './loadMap'
export default {
  data () {
    return {
      // 地图实例
      GDMap: null,
      // 加载的插件
      plugins: [
        'AMap.OverView',
        'AMap.MouseTool',
        'AMap.PolyEditor',
        'AMap.RectangleEditor',
        'AMap.PlaceSearch',
        'AMap.DistrictLayer',
        'AMap.CustomLayer'
      ],
      // key
      key: 'c5eac55551560531336988396dacbf53',
      // 地图版本
      v: '1.4.14',
      loading: true
    }
  },
  mounted () {
    loadMap(this.key, this.plugins, this.v)
      .then(AMap => {
        this.GDMap = new AMap.Map('GDMap', {
          zoom: 11,
          center: [116.397428, 39.90923]
        })
        this.GDMap.on('complete', () => {
          this.loading = false
        })
 
        const path = [
          [116.403322, 39.920255],
          [116.410703, 39.897555],
          [116.402292, 39.892353],
          [116.389846, 39.891365]
        ]
        const polygon = new AMap.Polygon({
          path: path,
          strokeColor: '#FF33FF',
          strokeWeight: 6,
          strokeOpacity: 0.2,
          fillOpacity: 0.4,
          fillColor: '#1791fc',
          zIndex: 50
        })
        // 地图添加多边形
        this.GDMap.add(polygon)
        // 缩放地图到合适的视野级别
        this.GDMap.setFitView([ polygon ])
 
        // 多边形编辑实例
        const polyEditor = new AMap.PolyEditor(this.GDMap, polygon)
        // 开启编辑
        polyEditor.open()
 
        // 多边形的path
        let polygonPath = polygon.getPath()
        // 索引
        let index
        // change事件
        polygon.on('change', (ev) => {
          const curPath = ev.target.getPath()
          for (let i = 0; i < path.length; i++) {
            // 判断一直在变化的点
            if (polygonPath[i].lng !== curPath[i].lng || polygonPath[i].lat !== curPath[i].lat) {
              index = i
              break
            }
          }
          polygonPath = JSON.parse(JSON.stringify(curPath))
          console.log('编辑点索引：', index)
        })
      })
      .catch(() => {
        this.loading = false
        console.log('地图加载失败！')
      })
  }
}
</script>
 
<style>
#GDMap {
  width: 1200px;
  height: 500px;
}
</style>
```
 
### 效果图
 
![image](https://image.liubing.me/2019/12/26/1993a054121e3.gif)
 
## 3、信息窗口使用问题
 
看了下官网信息窗口的相关[例子](https://lbs.amap.com/api/javascript-api/example/infowindow/default-style-infowindow)，发现写法都不太友好，例如以下几种形式的写法：
 
![image](https://image.liubing.me/2019/12/26/3efb240dfb6a3.png)
 
![image](https://image.liubing.me/2019/12/26/5c9bc35add80c.png)
 
要是按照这种写法，vue中相关事件及数据传递怎么整，后期维护还很困难， 
所以这种形式直接被我pass掉了，自己写一个类似的组件，放在地图上不就行了吧，自由程度高，可定制化也高。
 
### 简单的信息窗口组件
 
自定义了一个简单的信息窗口组件`InfoWindow`，显示出来后大致就长这个样子，UI样式可以自己定义，所以很方便。
 
![image](https://image.liubing.me/2019/12/26/100561490126f.png)
 
### 组件代码
 
```html
<template>
  <div id="GDMap">
    <info-window></info-window>
  </div>
 
  <div class="info-window">
    <div class="top">
      <span class="title">标题</span>
      <span class="close">x</span>
    </div>
    <div class="content">
      我是窗口的内容
    </div>
  </div>
</template>
 
<script>
export default {
 
}
</script>
 
<style scoped>
.info-window {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  min-width: 300px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  z-index: 10;
  transform: translate(-50%, -50%);
}
.info-window::after {
  content: "◆";
  font-size: 36px;
  height: 24px;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
 
.info-window .top {
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 
.info-window .top .title {
  font-size: 12px;
}
 
.info-window .top .close {
  width: 24px;
  font-size: 12px;
  cursor: pointer;
}
</style>
```
 
### 窗口位置
 
这是官网信息窗口在地图拖拽过程中的表现，会发现一直固定在某一个点相对位置
 
![image](https://image.liubing.me/2019/12/26/69baa6cdaf57f.gif)
 
再看看我们写的信息窗口组件，看到差异了吧，信息窗口被固定死了。
 
![image](https://image.liubing.me/2019/12/26/665c32c0b0c4c.gif)
 
通过审核元素你会发现官方的信息窗口的位置随着地图的拖拽在实时变化。
 
![image](https://image.liubing.me/2019/12/26/ed2d397ba9c3d.gif)
 
所以加下来我们要做的就是这个。 
看了下文档，找到了地图的一个方法`lngLatToContainer`， 
官方给出的描述是：`地图经纬度坐标转为地图容器像素坐标`， 
实际上窗口信息在地图上显示靠的是一个坐标点，有了这个坐标点信息窗口才知道需要哪个位置进行显示， 
对于信息窗口组件来说这个坐标点就是`absolute`定位中的`top`和`left`，对于地图来讲就是`lng`和`lat`经纬度， 
所以先定一个地图的坐标点，`pos: [116.397428, 39.90923]`，该坐标也是地图初始化时候的中心点坐标`(center)`， 
地图拖动过程中会触发`mapmove`事件，在该事件中，通过`lngLatToContainer`方法获取到`pos`点在地图容器的实时像素坐标，然后实时改变组件的`top`和`left`即可达到效果。
 
#### 相关代码
 
```javascript
this.GDMap.on('mapmove', () => {
  let position = this.GDMap.lngLatToContainer(this.pos)
  this.$refs.infoWindow.$el.style.left = position.x + 'px'
  this.$refs.infoWindow.$el.style.top = position.y + 'px'
})
```
 
#### 预览
 
这样就差不多和官方的信息窗口差不多了。
 
![image](https://image.liubing.me/2019/12/26/9f3459d6cc9ec.gif)
 
### 代码完善
 
接下来我们将代码稍微完善以下，增加一个新功能，点击地图上的热点的时候，出现信息窗口，显示相应热点的信息。
 
#### 代码
 
```html
<template>
  <div class="map">
    <div id="GDMap"
      v-loading="loading">
      <info-window v-if="visible"
        :pos="position"
        :info="info"
        @close="visible = false">
      </info-window>
    </div>
  </div>
</template>
 
<script>
import loadMap from './loadMap'
import InfoWindow from './InfoWindow'
export default {
  components: {
    InfoWindow
  },
  data () {
    return {
      // 地图实例
      GDMap: null,
      // 加载的插件
      plugins: [
        'AMap.OverView',
        'AMap.MouseTool',
        'AMap.PolyEditor',
        'AMap.RectangleEditor',
        'AMap.PlaceSearch',
        'AMap.DistrictLayer',
        'AMap.CustomLayer'
      ],
      // key
      key: 'c5eac55551560531336988396dacbf53',
      // 地图版本
      v: '1.4.14',
      loading: true,
      pos: [116.397428, 39.90923],
      position: {},
      visible: false,
      info: {}
    }
  },
  mounted () {
    loadMap(this.key, this.plugins, this.v)
      .then(AMap => {
        this.GDMap = new AMap.Map('GDMap', {
          zoom: 11,
          center: [116.397428, 39.90923]
        })
 
        // 地图加载完成事件
        this.GDMap.on('complete', () => {
          this.loading = false
        })
 
        // 热点点击事件
        this.GDMap.on('hotspotclick', ev => {
          console.log(ev)
          this.visible = true
          this.pos = [ev.lnglat.lng, ev.lnglat.lat]
          this.info = ev
        })
      })
      .catch(() => {
        this.loading = false
        console.log('地图加载失败！')
      })
  },
  methods: {
    mapmove () {
      this.position = this.GDMap.lngLatToContainer(this.pos)
    }
  },
  watch: {
    pos (newPos) {
      this.position = this.GDMap.lngLatToContainer(newPos)
    },
    visible (newVisible) {
      if (this.GDMap) {
        if (newVisible) {
          // 绑定地图平移事件
          this.GDMap.on('mapmove', this.mapmove)
        } else {
          // 移除事件绑定
          this.GDMap.off('mapmove', this.mapmove)
        }
      }
    }
  }
}
</script>
 
<style>
#GDMap {
  width: 1200px;
  height: 500px;
  position: relative;
}
</style>
```
 
#### 信息窗口组件
 
```html
<template>
  <div class="info-window"
    ref="infoWindow">
    <div class="top">
      <span class="title">{ { info.name }}</span>
      <span class="close"
        @click="handleClose">x</span>
    </div>
    <div class="content">
      id：{ { info.id }}<br>
      type:{ { info.type }}<br>
      lnglat：{ { info.lnglat.lng }},{ { info.lnglat.lat }}<br>
    </div>
    <div class="footer">
      by: liubing.me
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    // 像素坐标
    pos: Object,
    // 窗口信息
    info: Object,
    // 信息窗口偏移
    offset: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: -20
        }
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  },
  watch: {
    pos: {
      handler (newPos) {
        if (newPos && newPos.x && newPos.y) {
          this.$nextTick(() => {
            const infoHeight = document.querySelector('.info-window').clientHeight
            this.$refs.infoWindow.style.left = newPos.x + this.offset.x + 'px'
            this.$refs.infoWindow.style.top = newPos.y - infoHeight / 2 + this.offset.y + 'px'
          })
        }
      },
      immediate: true
    }
  }
}
 
</script>
 
<style scoped>
.info-window {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  min-width: 300px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  z-index: 10;
  transform: translate(-50%, -50%);
}
.info-window::after {
  content: "◆";
  font-size: 36px;
  height: 24px;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
 
.info-window .top {
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 
.info-window .top .title {
  font-size: 12px;
}
 
.info-window .top .close {
  width: 24px;
  font-size: 12px;
  cursor: pointer;
}
.info-window .content {
  text-align: left;
}
.info-window .footer {
  font-size: 12px;
  color: #cccccc;
  text-align: right;
}
</style>
```
 
### 最终预览
 
最后，大家可以根据这个法子自定义出自己的信息窗口组件，而不用受高德地图信息窗口的约束了。
 
![image](https://image.liubing.me/2019/12/26/8771fc2890b7e.gif)
 
## 4、多边形绘制边缘自动吸附
 
由于高德自带的绘制工具提供的事件太少，目前就一个`draw`事件，
完全不满足我的需求，所以自力更生自己实现一个多边形绘制，大致思路如下：
1、点击绘制按钮，将鼠标变成十字架
2、通过地图的`click`事件，每点击一次用`new AMap.CircleMarker`生成一个圆点
3、根据所生成的圆点坐标生成一个多边形
 
### 自定义多边形绘制
 
#### 定义数据
 
先在`data`中定义一些我们需要的变量数据
 
```javascript
isDrawing: false, // 是否正在绘制
polygons: [], // 多边形集合数据
polygonsGroup: null, // 多边形OverlayGroup集合实例，方便管理
drawingPolygon: {
  polyline: null, // 绘制过程中的折线实例
  polylinePath: [], // 折线的path
  polygon: null, // 根据折线路径自动生成的多边形的实例
  pointsGroup: null, // 绘制过程中点的集合的实例
  pointOnLine: null, // 多边形边上的点的实例
  isOnPolygon: null // 点是否在多边形上
},
// 一些样式
styles: {
  // 圆点样式option
  circleMarker: {
    radius: 4,
    strokeColor: '#010301',
    strokeWeight: 2,
    strokeOpacity: 1,
    fillColor: '#FFFFFF',
    fillOpacity: 1,
    bubble: true,
    cursor: 'pointer',
    clickable: true,
    zIndex: 999999
  },
  // 绘制过程中折线样式的option
  drawingPolyline: {
    strokeColor: '#dd9ab0',
    strokeWeight: 5,
    strokeStyle: 'dashed',
    strokeDasharray: [5, 20],
    bubble: true
  }
}
```
 
#### 点击地图生成圆点
 
点击相应的绘制按钮后，点击地图生成一个个圆点，到时候利用这些圆点生成多边形。
先增加个地图点击事件及相应的处理方法：
 
```javascript
// 地图点击事件
mapOnClick(ev) {
  if (!this.isDrawing) return let position = [ev.lnglat.lng, ev.lnglat.lat] // 鼠标点击的坐标
  this.addPolygonPoint(position) // 地图上增加相应的点
},
// 添加围成多边形的点
addPolygonPoint(position) {
  // 样式及坐标option
  const option = {
    ...this.styles.circleMarker,
    center: position
  }
  const circlePointMarker = new AMap.CircleMarker(option) // 单个圆点实例
  // 先判断是否存在圆点集合实例，不存在话就创建一个
  // 所有的圆点这里通过高德提供的OverlayGroup统一管理
  if (!this.drawingPolygon.pointsGroup) { // 如果不存在
    this.drawingPolygon.pointsGroup = new AMap.OverlayGroup() // 创建绘制过程中点的集合的实例
    this.GDMap.add(this.drawingPolygon.pointsGroup) // 将集合添加到地图上显示
  }
  this.drawingPolygon.pointsGroup.addOverlay(circlePointMarker) // 将点添加到集合里面
}
```
 
效果图：
 
![image](https://image.liubing.me/2019/12/26/6b012489b4e0c.gif)
 
#### 生成绘制过程中的鼠标移动位置的折线
 
绘制点击生成圆点的同时新增绘制过程中的折线
 
```javascript
// 新增绘制中的折线
addDrawingPolyline(path) {
  // 判断有无折线
  if (this.drawingPolygon.polyline) {
    this.drawingPolygon.polyline.setPath(path) // 有的话直接设置折线路径
  } else { // 没有的话需要创建折线
    // 折线样式及路径
    const option = {...this.styles.drawingPolyline,
      path: path
    }
    this.drawingPolygon.polyline = new AMap.Polyline(option) // 生成折线
    this.GDMap.add(this.drawingPolygon.polyline) // 地图上添加折线
  }
  this.drawingPolygon.polylinePath = path // 存一下折线的路径
}
```
 
鼠标移动过程中实时改变绘制过程中的折线路径
 
```javascript
// 地图鼠标移动事件
mapOnMouseMove(ev) {
  if (!this.isDrawing) return
  const position = [ev.lnglat.lng, ev.lnglat.lat]
  this.setDrawingPolyline(position)
}
 
// 设置绘制中的折线的路径
setDrawingPolyline (position) {
  if (this.drawingPolygon.polyline) {
    // 新增的折线的路径，由上次记录折线的开始点+鼠标坐标位置点
    const linePath = [
      this.drawingPolygon.polylinePath[0], // 上次记录折线的开始点
      position // 鼠标坐标位置点
    ]
    this.drawingPolygon.polyline.setPath(linePath)
    this.drawingPolygon.polylinePath = linePath
  }
}
```
 
效果图：
 
![image](https://image.liubing.me/2019/12/26/86a253cf45716.gif)
 
#### 连接圆点形成实时多边形
 
根据上面的画点我们就可以组成一个多边形了，每次点击的都执行这个方法生成或者修改多边形的path
 
```javascript
mapOnClick (ev) {
  if (!this.isDrawing) return
  let position = [ev.lnglat.lng, ev.lnglat.lat] // 鼠标点击的坐标
  this.addPolygonPoint(position) // 地图上增加相应的点
  this.addDrawingPolyline([position, position]) // 添加绘制过程中的鼠标移动位置的折线
  this.drawPolygonByPoints() // 通过点围成多边形
}
```
 
```javascript
// 根据点画区块多边形
drawPolygonByPoints () {
  const pointsGroup = this.drawingPolygon.pointsGroup
  const pointsLength = pointsGroup ? pointsGroup.getOverlays().length : 0
 
  if (pointsLength > 1) {
    const paths = pointsGroup.getOverlays().map(item => {
      const path = item.getCenter()
      return [path.lng, path.lat]
    })
    if (this.drawingPolygon.polygon) {
      this.drawingPolygon.polygon.setPath(paths)
    } else {
      const option = {
        ...this.styles.polygon,
        path: paths
      }
      this.drawingPolygon.polygon = new AMap.Polygon(option)
      this.drawingPolygon.polygon.setMap(this.GDMap)
    }
  }
}
```
 
效果图：
 
![image](https://image.liubing.me/2019/12/26/92db146e6ce62.gif)
 
#### 双击绘制完成
 
通过高德提供的`dblclick`双击事件来执行`complateDraw`完成绘制， 
绘制完成的时候获取到`drawingPolygon`中`polygon`的path，将该path存起来， 
通过该path在地图上添加新绘制的多边形 
最后将之前的一些数据清理掉，准备下次的绘制。
 
```javascript
// 绘制完成
complateDraw () {
  const paths = this.drawingPolygon.polygon.getPath().map(item => [item.lng, item.lat]) // 绘制完成的多边形path
  this.isDrawing = false // 取消绘制
  this.polygons.push(paths) // 添加绘制的多边形
  this.addPolygon(paths) // 地图上添加绘制的多边形
  this.clearUselessOverlays() // 清理数据
},
// 清理无用的图层
clearUselessOverlays () {
  if (!this.GDMap) return
  this.GDMap.remove(this.drawingPolygon.polyline)
  this.GDMap.remove(this.drawingPolygon.polygon)
  this.GDMap.remove(this.drawingPolygon.pointsGroup)
  this.drawingPolygon.polyline = null
  this.drawingPolygon.polygon = null
  this.drawingPolygon.pointsGroup = null
  this.drawingPolygon.polylinePath = []
},
// 添加多边形
addPolygon (paths) {
  if (!this.GDMap) return
  const option = {
    ...this.styles.polygon,
    path: paths
  }
  const polygon = new AMap.Polygon(option)
  if (!this.polygonsGroup) {
    this.polygonsGroup = new AMap.OverlayGroup()
    this.GDMap.add(this.polygonsGroup)
  }
  this.polygonsGroup.addOverlay(polygon)
}
```
 
效果图：
 
![image](https://image.liubing.me/2019/12/26/da145854d73b1.gif)
 
### 现有问题
 
上面实现了自定义的多边形绘制，但是存在一个问题，画图的时候虽然是对准这边缘画的， 
但是放大后会发现有缝隙或者重叠现象，如下图所示：
 
![image](https://image.liubing.me/2019/12/26/65d55220c8719.gif)
 
### 线边缘自动吸附
 
说起来有点繁琐，有时间再写，先直接上完整代码，代码可能待优化，先实现功能：
 
```html
<template>
  <div class="map">
    { {this.polygons}}
    <button type="primary"
      @click="drawPolygon">画多边形</button>
    <div id="GDMap">
    </div>
  </div>
</template>
 
<script>
import loadMap from './loadMap'
export default {
  data () {
    return {
      // 地图实例
      GDMap: null,
      // 加载的一些插件
      // 更多参考：https://lbs.amap.com/api/javascript-api/guide/abc/plugins#plugins
      plugins: [
        'AMap.OverView',
        'AMap.MouseTool',
        'AMap.PolyEditor',
        'AMap.RectangleEditor',
        'AMap.PlaceSearch',
        'AMap.DistrictLayer',
        'AMap.CustomLayer'
      ],
      // key
      key: 'c5eac55551560531336988396dacbf53',
      // 地图版本
      v: '1.4.14',
      loading: true,
      // 多边形集合
      polygons: [
        [
          [ 116.402921, 39.984507 ],
          [ 116.531324, 39.938719 ],
          [ 116.525144, 39.858648 ],
          [ 116.423521, 39.821742 ]
        ]
      ],
      polygonsGroup: null, // 多边形OverlayGroup集合实例，方便管理
      isDrawing: false, // 是否正在绘制
      drawingPolygon: {
        polyline: null, // 绘制过程中的折线实例
        polylinePath: [], // 折线的path
        polygon: null, // 根据折线路径自动生成的多边形的实例
        pointsGroup: null, // 绘制过程中点的集合的实例
        pointOnLine: null, // 多边形边上的点的实例
        isOnPolygon: null // 点是否在多边形上
      },
      styles: {
        // 圆点option
        circleMarker: {
          radius: 4,
          strokeColor: '#010301',
          strokeWeight: 2,
          strokeOpacity: 1,
          fillColor: '#FFFFFF',
          fillOpacity: 1,
          bubble: true,
          cursor: 'pointer',
          clickable: true,
          zIndex: 999999
        },
        // 绘制过程中折线的option
        drawingPolyline: {
          strokeColor: '#dd9ab0',
          strokeWeight: 5,
          strokeStyle: 'dashed',
          strokeDasharray: [5, 20],
          bubble: true
        },
        polygon: {
          fillColor: '#DC3021', // 填充色
          fillOpacity: 0.2, // 填充透明度
          strokeColor: '#DC3021', // 轮廓颜色
          strokeWeight: 1, // 轮廓宽度
          strokeOpacity: 0.9 // 轮廓透明度
        }
      }
    }
  },
  mounted () {
    loadMap(this.key, this.plugins, this.v)
      .then(AMap => {
        this.GDMap = new AMap.Map('GDMap', {
          zoom: 11,
          center: [116.397428, 39.90923],
          isHotspot: false
        })
        // 绑定地图单击事件
        this.GDMap.on('click', this.mapOnClick)
        // 地图双击事件
        this.GDMap.on('dblclick', this.mapOnDblclick)
        // 绑定地图鼠标移动事件
        this.GDMap.on('mousemove', this.mapOnMouseMove)
 
        this.GDMap.on('complete', () => {
          // 地图加载完成后初始化已有的多边形
          this.polygons.forEach(polygon => {
            this.addPolygon(polygon)
          })
        })
      })
      .catch(() => {
        console.log('地图加载失败！')
      })
  },
  methods: {
    drawPolygon () {
      this.isDrawing = true
    },
    // 地图点击事件
    mapOnClick (ev) {
      if (!this.isDrawing) return
      let position = [ev.lnglat.lng, ev.lnglat.lat] // 鼠标点击的坐标
      // 判断是否存在存在线上圆点实例及是否在线上
      if (this.drawingPolygon.isOnPolygon && this.drawingPolygon.pointOnLine) {
        const center = this.drawingPolygon.pointOnLine.getCenter() // 获取线上圆点的中心
        position = [center.lng, center.lat]
      }
      this.addPolygonPoint(position) // 地图上增加相应的点
      this.addDrawingPolyline([position, position]) // 添加绘制过程中的鼠标移动位置的折线
      this.drawPolygonByPoints() // 通过点围成多边形
    },
    // 地图双击事件
    mapOnDblclick (ev) {
      if (!this.isDrawing) return
      this.complateDraw()
    },
    // 地图鼠标移动事件
    mapOnMouseMove (ev) {
      if (!this.isDrawing) return
      const position = [ev.lnglat.lng, ev.lnglat.lat]
      const linePath = this.getPointLine(position) // 获取点所在的线
      let recentPoint = null // 定义最近的点
      if (this.drawingPolygon.isOnPolygon) {
        // 如果点在线上（这个点存在偏移，所以还得通过getRecentPoint获取到正在的最近的一个点）
        // 获取该点到线的最近的一个点
        recentPoint = this.getRecentPoint(linePath, position)
        this.addDrawingOnLinePoint(recentPoint) // 在线上添加圆点，也就是自动吸附的时候创建的点
      } else {
        this.removeDrawingOnLinePoint()
      }
      this.setDrawingPolyline(position)
    },
    // 添加围成多边形的点
    addPolygonPoint (position) {
      // 样式及坐标option
      const option = {
        ...this.styles.circleMarker,
        center: position
      }
      const circlePointMarker = new AMap.CircleMarker(option) // 单个圆点实例
      // 先判断是否存在圆点集合实例
      // 所有的圆点这里通过高德提供的OverlayGroup统一管理
      if (!this.drawingPolygon.pointsGroup) { // 如果不存在
        this.drawingPolygon.pointsGroup = new AMap.OverlayGroup() // 创建绘制过程中点的集合的实例
        this.GDMap.add(this.drawingPolygon.pointsGroup) // 将集合添加到地图上显示
      }
      this.drawingPolygon.pointsGroup.addOverlay(circlePointMarker) // 将点添加到集合里面
    },
    // 新增绘制中的折线
    addDrawingPolyline (paths) {
      // 判断有无折线
      if (this.drawingPolygon.polyline) {
        this.drawingPolygon.polyline.setPath(paths) // 有的话直接设置折线路径
      } else { // 没有的话需要创建折线
        // 折线样式及路径
        const option = {
          ...this.styles.drawingPolyline,
          path: paths
        }
        this.drawingPolygon.polyline = new AMap.Polyline(option) // 生成折线
        this.GDMap.add(this.drawingPolygon.polyline) // 地图上添加折线
      }
      this.drawingPolygon.polylinePath = paths // 存一下折线的路径
    },
    // 设置绘制中的折线的路径
    setDrawingPolyline (position) {
      if (this.drawingPolygon.polyline) {
        // 新增的折线的路径，由上次记录折线的开始点+鼠标坐标位置点
        const linePath = [
          this.drawingPolygon.polylinePath[0], // 上次记录折线的开始点
          position // 鼠标坐标位置点
        ]
        this.drawingPolygon.polyline.setPath(linePath)
        this.drawingPolygon.polylinePath = linePath
      }
    },
    // 根据点画区块多边形
    drawPolygonByPoints () {
      const pointsGroup = this.drawingPolygon.pointsGroup // 点及的集合实例
      const pointsLength = pointsGroup ? pointsGroup.getOverlays().length : 0 // 点的长度
      if (pointsLength > 1) {
        // 获取每个点的中心点组成path
        const paths = pointsGroup.getOverlays().map(item => {
          const path = item.getCenter()
          return [path.lng, path.lat]
        })
        // 地图上绘制多边形
        if (this.drawingPolygon.polygon) {
          this.drawingPolygon.polygon.setPath(paths)
        } else {
          const option = {
            ...this.styles.polygon,
            path: paths
          }
          this.drawingPolygon.polygon = new AMap.Polygon(option)
          this.drawingPolygon.polygon.setMap(this.GDMap)
        }
      }
    },
    // 绘制完成
    complateDraw () {
      const paths = this.drawingPolygon.polygon.getPath().map(item => [item.lng, item.lat]) // 绘制完成的多边形path
      this.isDrawing = false // 取消绘制
      this.polygons.push(paths) // 添加绘制的多边形
      this.addPolygon(paths) // 地图上添加绘制的多边形
      this.clearUselessOverlays() // 清理数据
    },
    // 清理无用的图层
    clearUselessOverlays () {
      if (!this.GDMap) return
      this.GDMap.remove(this.drawingPolygon.polyline)
      this.GDMap.remove(this.drawingPolygon.polygon)
      this.GDMap.remove(this.drawingPolygon.pointsGroup)
      if (this.drawingPolygon.pointOnLine) {
        this.GDMap.remove(this.drawingPolygon.pointOnLine)
      }
      this.drawingPolygon.polyline = null
      this.drawingPolygon.polygon = null
      this.drawingPolygon.pointsGroup = null
      this.drawingPolygon.polylinePath = []
      this.drawingPolygon.isOnPolygon = false
    },
    // 添加多边形
    addPolygon (paths) {
      if (!this.GDMap) return
      const option = {
        ...this.styles.polygon,
        path: [...paths]
      }
      const polygon = new AMap.Polygon(option)
      if (!this.polygonsGroup) {
        this.polygonsGroup = new AMap.OverlayGroup()
        this.GDMap.add(this.polygonsGroup)
      }
      this.polygonsGroup.addOverlay(polygon)
    },
    // 添加多边形边线上的点
    addDrawingOnLinePoint (center) {
      if (this.drawingPolygon.pointOnLine) {
        this.drawingPolygon.pointOnLine.setCenter(center)
        return
      }
      const option = {
        map: this.GDMap,
        center: center,
        ...this.styles.circleMarker
      }
      this.drawingPolygon.pointOnLine = new AMap.CircleMarker(option)
    },
    // 移除多边形线上的点
    removeDrawingOnLinePoint () {
      if (this.drawingPolygon.pointOnLine) {
        this.GDMap.remove(this.drawingPolygon.pointOnLine)
        this.drawingPolygon.pointOnLine = null
      }
    },
    // 获取点所在的线
    getPointLine (position) {
      const resolution = this.GDMap.getResolution()// 获取指定位置的地图分辨率，单位：米/像素
      const pointWidth = 6 * resolution// 线段上圆点的宽度，也就是误差
      let linePath = []
      this.drawingPolygon.isOnPolygon = false // 默认点不在线上
      // 循环所有的多边形，取到所有的线一一比较，存在性能问题
      for (let i = 0; i < this.polygons.length; i++) {
        const itemPath = this.polygons[i]
        let hasFind = false
        for (let n = 0; n < itemPath.length; n++) {
          const path = itemPath[n]
          const nextPath = itemPath[n + 1]
          const line = nextPath ? [path, nextPath] : [path, itemPath[0]]
          // 高德地图提供的isPointOnSegment判断点是否在线段上
          const isPointOnSegment = AMap.GeometryUtil.isPointOnSegment(position, line[0], line[1], pointWidth)
          if (isPointOnSegment) {
            linePath = line
            this.drawingPolygon.isOnPolygon = true
            hasFind = true
            break
          }
        }
        if (hasFind) break
      }
      return linePath
    },
    // 获取最近的点的坐标
    getRecentPoint (paths, curPointPosition) {
      const recentPoint = AMap.GeometryUtil.closestOnLine(curPointPosition, paths)
      return recentPoint
    }
  },
  watch: {
    isDrawing (newState) {
      if (newState) {
        this.GDMap.setDefaultCursor('crosshair')
      } else {
        this.GDMap.setDefaultCursor('')
      }
      this.GDMap.setStatus({
        doubleClickZoom: !newState
      })
    }
  }
}
</script>
 
<style>
#GDMap {
  width: 1200px;
  height: 500px;
  position: relative;
}
</style>
```
 
### 最终效果图
 
这样画出的来的多边形边缘就不会存在缝隙或者重叠的现象了。
 
![image](https://image.liubing.me/2019/12/26/771d4092263db.gif)
 
![image](https://image.liubing.me/2019/12/26/d33b4c532c831.gif)
 
### 在线预览
 
<iframe width="100%" height="500" src="//jsrun.net/jdyKp/embedded/all/light/" allowfullscreen="allowfullscreen" frameborder="0">
</iframe>
 
> 所画的多边形编辑过程中线边缘自动吸附暂时没想到什么法子，
> 高德提供的方法太少，目前已经更换为开源的地图`openlayers`实现了，
> Github：[https://github.com/liub1934/vue-openlayers](https://github.com/liub1934/vue-openlayers)
> Demo预览：[https://github.liubing.me/vue-openlayers](https://github.liubing.me/vue-openlayers)
