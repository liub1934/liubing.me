import type { InlineConfig, PluginOption } from 'vite'
import path from 'node:path'
import unocss from '@unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { analyzer } from 'vite-bundle-analyzer'

const isReport = process.argv.includes('--report')
const vitePlugins: PluginOption[] = [
  unocss(),
  Components({
    resolvers: [NaiveUiResolver()],
    dts: path.resolve(process.cwd(), 'types/components.d.ts'),
    dirs: [path.resolve(__dirname, '../components')],
  }),
]
if (isReport) {
  vitePlugins.push(
    analyzer({
      defaultSizes: 'parsed',
    }),
  )
}
const viteOptions = {
  plugins: vitePlugins,
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
