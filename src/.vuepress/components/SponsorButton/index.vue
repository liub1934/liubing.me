<template>
  <div class="sponsor-button">
    <div class="sponsor-button-wrapper" flex-center>
      <n-popover
        raw trigger="click" to=".sponsor-button-wrapper" display-directive="show" :show="showPopover"
        :show-arrow="false" :on-update:show="handleUpdateShow"
      >
        <template #trigger>
          <n-button
            type="primary"
            ghost
            round
            @click="showPopover = !showPopover"
          >
            <VPIcon icon="material-symbols:favorite" class="mr-4" />
            <span>随意打赏</span>
          </n-button>
        </template>
        <div class="sponsor-content" flex items-center>
          <n-space>
            <component
              :is="item.link ? 'a' : 'div'"
              v-for="item in list" :key="item.name" class="sponsor-item"
              relative
              block
              cursor-pointer
              :class="{
                'no-external-link-icon': !!item.link,
                '!no-underline': !!item.link,
              }"
              v-bind="
                item.link
                  ? {
                    href: item.link,
                    target: '_blank',
                    ref: 'noopener noreferrer',
                  }
                  : {}
              "
              @click="handleClick(item)"
            >
              <div
                class="icon-content"
                relative size-50 flex-center overflow-hidden rounded-6 bg-white shadow
              >
                <div
                  class="filled"
                  :style="{
                    background: item.color,
                  }"
                />
                <VPIcon class="relative z-1 !text-30" :icon="item.icon" />
                <img
                  v-if="item.image"
                  class="qrcode-image"
                  absolute z-2 size-full opacity-0
                  :src="item.image"
                >
              </div>
              <div
                class="tooltip"
                :style="{
                  background: item.color,
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
import { createPhotoSwipe } from '@vuepress/plugin-photo-swipe/client'
import { nextTick, onUnmounted, ref } from 'vue'

interface SponsorItem {
  name: string
  icon: string
  color: string
  link?: string
  image?: string
  index?: number
}

interface PhotoSwipeState {
  open: (index: number) => void
  close: () => void
  destroy: () => void
}

const showPopover = ref(false)
let state: PhotoSwipeState | null = null

const list: SponsorItem[] = [
  {
    name: 'PayPal',
    icon: 'mdi:paypal',
    color: '#008cff',
    link: 'https://paypal.me/lb1937',
  },
  {
    name: '微信',
    icon: 'uiw:weixin',
    color: '#07c160',
    image: '/sponsor-weixin.png',
    index: 0,
  },
  {
    name: '支付宝',
    icon: 'ant-design:alipay-outlined',
    color: '#00a3ee',
    image: '/sponsor-alipay.png',
    index: 1,
  },
]

onUnmounted(() => {
  state?.destroy()
  state = null
})

function handleClick(item: SponsorItem) {
  if (item.index !== undefined) {
    state?.open(item.index)
  }
}

function handleUpdateShow(show: boolean) {
  if (show && !state) {
    nextTick(async () => {
      const $images: HTMLImageElement[] = Array.from(
        document.querySelectorAll('.qrcode-image'),
      )
      const images = $images.map(img => img.src)
      state = await createPhotoSwipe(images, {
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
