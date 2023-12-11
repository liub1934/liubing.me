import type { InlineConfig } from 'vite'

const viteOptions = {
  plugins: [],
  build: {
    assetsInlineLimit: 0 // 设置为0禁止图片转base64
  }
} as InlineConfig

export default viteOptions
