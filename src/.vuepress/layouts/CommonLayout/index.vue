<template>
  <NaiveProvider>
    <BlogWrapper>
      <div class="vp-page vp-blog">
        <div class="blog-page-wrapper">
          <main id="main-content" class="vp-blog-main">
            <slot />
          </main>
          <InfoPanel />
        </div>
      </div>
    </BlogWrapper>
  </NaiveProvider>
</template>

<script lang="ts" setup>
import BlogWrapper from '@theme-hope/components/blog/BlogMainLayout'
import InfoPanel from '@theme-hope/components/blog/InfoPanel'
</script>
