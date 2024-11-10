import type { InlineConfig } from 'vite'
import path from 'node:path'
import unocss from '@unocss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

const viteOptions = {
  plugins: [
    unocss(),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: path.resolve(process.cwd(), 'types/components.d.ts'),
      dirs: [path.resolve(__dirname, '../components')],
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: 'report.html',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    assetsInlineLimit: 0, // 设置为0禁止图片转base64
  },
  ssr: {
    noExternal: ['naive-ui'],
  },
} as InlineConfig

export default viteOptions
