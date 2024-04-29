<template>
  <BlogWrapper>
    <div class="vp-page vp-blog">
      <div class="blog-page-wrapper">
        <main class="vp-blog-main" id="main-content">
          <slot></slot>
        </main>
        <InfoPanel />
      </div>
    </div>
  </BlogWrapper>
</template>

<script lang="ts" setup>
import BlogWrapper from '@theme-hope/modules/blog/components/BlogWrapper'
import InfoPanel from '@theme-hope/modules/blog/components/InfoPanel'
</script>
