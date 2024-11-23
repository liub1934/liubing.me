import type { InlineConfig } from 'vite'
import unocss from '@unocss/vite'
import path from 'node:path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const viteOptions = {
  plugins: [
    unocss(),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: path.resolve(process.cwd(), 'types/components.d.ts'),
      dirs: [path.resolve(__dirname, '../components')]
    })
  ],
  build: {
    assetsInlineLimit: 0 // 设置为0禁止图片转base64
  },
  ssr: {
    noExternal: ['naive-ui']
  }
} as InlineConfig

export default viteOptions
