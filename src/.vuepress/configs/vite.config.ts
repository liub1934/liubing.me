import type { InlineConfig } from 'vite'
import unocss from '@unocss/vite'

const viteOptions = {
  plugins: [unocss()],
  build: {
    assetsInlineLimit: 0 // 设置为0禁止图片转base64
  }
} as InlineConfig

export default viteOptions
