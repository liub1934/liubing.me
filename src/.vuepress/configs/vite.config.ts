import { InlineConfig } from 'vite'

const viteOptions: InlineConfig = {
  plugins: [],
  build: {
    assetsInlineLimit: 0 // 设置为0禁止图片转base64
  }
}

export default viteOptions
