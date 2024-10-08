<template>
  <div class="sponsor-button">
    <div class="sponsor-button-wrapper" flex-center>
      <n-popover
        raw
        trigger="click"
        to=".sponsor-button-wrapper"
        display-directive="show"
        :show="showPopover"
        :show-arrow="false"
        :on-update:show="handleUpdateShow"
      >
        <template #trigger>
          <n-button
            type="primary"
            ghost
            round
            @click="showPopover = !showPopover"
          >
            <font-icon icon="like" class="mr-4" />
            <span>赞助</span>
          </n-button>
        </template>
        <div class="sponsor-content" flex items-center>
          <n-space>
            <component
              class="sponsor-item"
              block
              cursor-pointer
              relative
              v-for="item in list"
              :is="item.link ? 'a' : 'div'"
              :key="item.name"
              :class="{
                'no-external-link-icon': !!item.link,
                '!no-underline': !!item.link
              }"
              v-bind="
                item.link
                  ? {
                      href: item.link,
                      target: '_blank',
                      ref: 'noopener noreferrer'
                    }
                  : {}
              "
            >
              <div
                class="icon-content"
                shadow
                bg-white
                rounded-6
                size-50
                flex-center
                overflow-hidden
                relative
              >
                <div
                  class="filled"
                  :style="{
                    background: item.color
                  }"
                ></div>
                <font-icon class="!text-30 relative z-1" :icon="item.icon" />
                <img
                  v-if="item.image"
                  class="qrcode-image"
                  absolute
                  size-full
                  opacity-0
                  z-2
                  :src="item.image"
                />
              </div>

              <div
                class="tooltip"
                :style="{
                  background: item.color
                }"
              >
                {{ item.name }}
              </div>
            </component>
          </n-space>
        </div>
      </n-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, ref } from 'vue'
import { registerPhotoSwipe } from '@vuepress/plugin-photo-swipe/client'

interface SponsorItem {
  name: string
  icon: string
  color: string
  link?: string
  image?: string
}

const showPopover = ref(false)
let destroy: (() => void) | null = null

const list: SponsorItem[] = [
  {
    name: 'PayPal',
    icon: 'paypal',
    color: '#008cff',
    link: 'https://paypal.me/lb1937'
  },
  {
    name: '微信',
    icon: 'weixin',
    color: '#07c160',
    image: '/sponsor-weixin.png'
  },
  {
    name: '支付宝',
    icon: 'alipay',
    color: '#00a3ee',
    image: '/sponsor-alipay.png'
  }
]

onUnmounted(() => {
  destroy?.()
})

function handleUpdateShow(show: boolean) {
  if (show && !destroy) {
    nextTick(async () => {
      const images: HTMLImageElement[] = Array.from(
        document.querySelectorAll('.qrcode-image')
      )
      destroy = await registerPhotoSwipe(images, {
        // PhotoSwipe 选项
      })
    })
  }
}
</script>

<style lang="scss">
.sponsor-button {
  .n-popover {
    box-shadow: none;
  }
  .sponsor-content {
    .sponsor-item {
      &:hover {
        .icon-content {
          color: var(--vp-c-white);
          .filled {
            height: 100%;
          }
        }
        .tooltip {
          opacity: 1;
          visibility: visible;
          top: -40px;
        }
      }
      .icon-content {
        color: var(--vp-c-text);
        background: var(--vp-c-bg-elv);
        transition: all 0.3s ease-in-out;
        .filled {
          position: absolute;
          top: auto;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          transition: all 0.3s ease-in-out;
        }
      }

      .tooltip {
        width: 100%;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        text-align: center;
        padding: 6px 10px;
        border-radius: 6px;
        opacity: 0;
        visibility: hidden;
        font-size: 14px;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
