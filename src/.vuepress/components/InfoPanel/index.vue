<template>
  <aside class="blog-info-wrapper">
    <DropTransition>
      <BloggerInfo />
    </DropTransition>

    <DropTransition>
      <div class="blog-info-box">
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
import './info-panel.scss'
</script>
