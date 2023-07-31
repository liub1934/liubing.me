<template>
  <SkipLink />
  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
        <template #contentBefore>
          <div class="theme-hope-content custom-content-before">
            <div class="hint-container tip">
              <p class="hint-container-title">提示</p>
              <p>
                以下应用均来自电报交流群，有需要补充的应用可以在下方评论区留言，有时间会上传。<br />
                TrollStore安装及使用可以参考
                <a
                  href="/article/other/troll-store-install.html"
                  target="_blank"
                >
                  该教程
                </a>
                或者自行Google搜索。
              </p>
            </div>
            <div class="hint-container danger">
              <p class="hint-container-title">警告</p>
              <p>
                某些修改版应用谨慎登录账号（如微信），账号被封与本站无任何关系，本站只是搬运工。
              </p>
            </div>
          </div>
        </template>
      </NormalPage>
    </FadeSlideY>
  </CommonWrapper>
</template>

<script setup lang="ts">
import CommonWrapper from '@theme-hope/components/CommonWrapper'
import NormalPage from '@theme-hope/components/NormalPage'
import SkipLink from '@theme-hope/components/SkipLink'
import FadeSlideY from '@theme-hope/components/transitions/FadeSlideY'
</script>
