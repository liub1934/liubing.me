<template>
  <aside class="vp-blog-info-wrapper">
    <div class="vp-blogger-info-inner">
      <BingLogo />
      <BloggerInfo />
    </div>

    <div class="vp-blogger-info node-support flex-center">
      <iframe
        frameborder="0"
        src="https://support.nodeget.com/page/promotion?id=176"
      />
    </div>

    <div class="vp-blogger-info">
      <Heatmap />
    </div>

    <div class="vp-blogger-info blog-clock-box">
      <BlogClock />
    </div>

    <InfoList />
  </aside>
</template>

<script setup lang="ts">
import BloggerInfo from '@theme-hope/components/blog/BloggerInfo'
import InfoList from '@theme-hope/components/blog/InfoList'
import '@theme-hope/styles/blog/info-panel.scss'
</script>

<style lang="scss" scoped>
.blog-clock-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vp-blogger-info-inner {
  position: relative;
}
.vp-blogger-info {
  &.node-support {
    padding: 0;
    iframe {
      height: 246px;
    }
  }
}
</style>
