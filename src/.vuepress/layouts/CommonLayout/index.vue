<template>
  <BlogWrapper>
    <div class="vp-page vp-blog">
      <div class="blog-page-wrapper">
        <main class="vp-blog-main" id="main-content">
          <DropTransition>
            <ProjectPanel />
          </DropTransition>
          <DropTransition>
            <slot></slot>
          </DropTransition>
        </main>
        <DropTransition>
          <InfoPanel />
        </DropTransition>
      </div>
    </div>
  </BlogWrapper>
</template>

<script lang="ts" setup>
import CommonWrapper from '@theme-hope/components/CommonWrapper'
import DropTransition from '@theme-hope/components/transitions/DropTransition'
import BlogWrapper from '@theme-hope/modules/blog/components/BlogWrapper'
import InfoPanel from '@theme-hope/modules/blog/components/InfoPanel'
import ProjectPanel from '@theme-hope/modules/blog/components/ProjectPanel'
</script>
