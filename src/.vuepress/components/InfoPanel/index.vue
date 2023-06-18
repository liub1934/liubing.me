<template>
  <aside class="vp-blog-info-wrapper">
    <DropTransition>
      <div class="vp-blogger-info-inner">
        <BingLogo />
        <BloggerInfo />
      </div>
    </DropTransition>

    <DropTransition>
      <div class="vp-blogger-info blog-clock-box">
        <BlogClock />
      </div>
    </DropTransition>

    <DropTransition>
      <InfoList />
    </DropTransition>
  </aside>
</template>

<script setup lang="ts">
import DropTransition from '@theme-hope/components/transitions/DropTransition'
import BloggerInfo from '@theme-hope/modules/blog/components/BloggerInfo'
import InfoList from '@theme-hope/modules/blog/components/InfoList'
import BlogClock from '../BlogClock/index.vue'
import BingLogo from '../BingLogo/index.vue'
import '@theme-hope/modules/blog/styles/info-panel.scss'
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
</style>
