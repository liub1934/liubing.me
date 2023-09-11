import { InlineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

const viteOptions = {
  plugins: [
    // 打包分析插件要放最后面
    visualizer({
      filename: 'report.html',
      open: true,
      brotliSize: true,
      gzipSize: true,
      projectRoot: '/'
    })
  ],
  build: {
    assetsInlineLimit: 0 // 设置为0禁止图片转base64
  }
} as InlineConfig

export default viteOptions
