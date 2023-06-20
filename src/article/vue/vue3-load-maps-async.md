---
date: 2023-02-25
category:
  - Vue
  - Vue3
tag:
  - Vue
  - Vue3
  - 地图
  - 百度地图
  - 高德地图
layout: ArticleLayout
containerClass: article-container
---

# Vue3 按需加载百度地图、高德地图

记录下日常开发中需要使用地图的场景下加载并使用地图的方法。

<!-- more -->

## 百度地图

官网文档地址：[点击前往](https://lbsyun.baidu.com/index.php?title=jspopularGL)

参考[异步加载地图 Demo](https://lbsyun.baidu.com/jsdemo.htm#aAsynLoadMap)，写一个通用的加载地图的方法。

### 百度地图通用方法

::: code-tabs
@tab JS

```js
export function loadBMapScript(key) {
  return new Promise((resolve, reject) => {
    if (typeof BMapGL !== 'undefined') {
      resolve(BMapGL)
      return
    }
    window.onCallback = function () {
      resolve(BMapGL)
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${key}&callback=onCallback`
    script.onerror = reject
    document.body.appendChild(script)
  })
}
```

@tab TS

```ts
export function loadBMapScript(key: string): Promise<BMapGL> {
  return new Promise<BMapGL>((resolve, reject) => {
    if (typeof BMapGL !== 'undefined') {
      resolve(BMapGL)
      return
    }
    ;(window as any).onCallback = function () {
      resolve(BMapGL)
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${key}&callback=onCallback`
    script.onerror = reject
    document.body.appendChild(script)
  })
}
```

:::

### 百度地图方法使用

```vue
<template>
  <div id="bmap"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { loadBMapScript } from './utils'
onMounted(() => {
  loadBMapScript('百度地图Key')
    .then((BMapGL) => {
      // 创建Map实例
      const map = new BMapGL.Map('bmap')
      // 创建点坐标
      const point = new BMapGL.Point(116.404, 39.915)
      // 创建Point点标记
      const pointMarker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915))
      // 地图设置中心点和放大级别
      map.centerAndZoom(point, 10)
      // 地图添加点标记
      map.addOverlay(pointMarker)
    })
    .catch(() => {
      console.log('地图加载失败')
    })
})
</script>

<style scoped>
#bmap {
  width: 100vw;
  height: 100vh;
}
</style>
```

### 百度地图效果预览

![image](https://image.liubing.me/i/2023/02/25/63f980c4d9072.png)

## 高德地图

官网文档地址：[点击前往](https://lbs.amap.com/api/jsapi-v2/summary/)

方法可以同百度地图，只需要修改下 SDK 的地址。

### 高德地图通用方法

::: code-tabs
@tab JS

```js
export function loadAMapScript(key) {
  return new Promise((resolve, reject) => {
    if (typeof AMap !== 'undefined') {
      resolve(AMap)
      return
    }
    window.onCallback = function () {
      resolve(AMap)
    }
    window._AMapSecurityConfig = {
      // serviceHost:'您的代理服务器域名或地址/_AMapService',
      // 例如 ：serviceHost:'http://1.1.1.1:80/_AMapService',
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}&callback=onCallback`
    script.onerror = reject
    document.body.appendChild(script)
  })
}
```

@tab TS

```ts
export function loadAMapScript(key: string): Promise<AMap> {
  return new Promise<AMap>((resolve, reject) => {
    if (typeof AMap !== 'undefined') {
      resolve(AMap)
      return
    }
    ;(window as any).onCallback = function () {
      resolve(AMap)
    }
    ;(window as any)._AMapSecurityConfig = {
      // serviceHost:'您的代理服务器域名或地址/_AMapService',
      // 例如 ：serviceHost:'http://1.1.1.1:80/_AMapService',
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}&callback=onCallback`
    script.onerror = reject
    document.body.appendChild(script)
  })
}
```

:::

此外在 JS API 2.0 版本还提供了`JSAPI Loader`进行地图的加载，如下所示：

```js
import AMapLoader from '@amap/amap-jsapi-loader'

AMapLoader.load({
  key: '', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
  .then((AMap) => {
    const map = new AMap.Map('container')
  })
  .catch((e) => {
    console.log(e)
  })
```

### 高德地图方法使用

```vue
<template>
  <div id="amap"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { loadAMapScript } from './utils'
onMounted(() => {
  loadAMapScript('高德地图Key')
    .then((AMap) => {
      // 创建Map实例
      const map = new AMap.Map('amap', {
        zoom: 10, //放大级别
        center: [116.404, 39.915] //中心点坐标
      })
      // 点标记
      const pointMarker = new AMap.Marker({
        position: new AMap.LngLat(116.404, 39.915)
      })
      // 地图添加点标记
      map.add(pointMarker)
    })
    .catch(() => {
      console.log('地图加载失败')
    })
})
</script>

<style scoped>
#amap {
  width: 100vw;
  height: 100vh;
}
</style>
```

::: tip
无论何种加载方式，2021 年 12 月 02 日申请以后的 key 需要配合您的安全密钥一起使用，具体如何使用请参考官方的[说明文档](https://lbs.amap.com/api/jsapi-v2/guide/abc/load)
:::

### 高德地图预览效果

![image](https://image.liubing.me/i/2023/02/25/63f99bffd2255.png)
