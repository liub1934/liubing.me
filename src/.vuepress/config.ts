import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { AuthorName, Base, Description } from './constant'
import { configPlugins } from './config/plugins'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './config/theme'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: Base,
  lang: 'zh-CN',
  title: AuthorName,
  description: Description,
  shouldPrefetch: false,
  theme,
  markdown: {
    headers: {
      level: [2, 3, 4]
    }
  },
  alias: {
    '@components': path.resolve(__dirname, './components'),
    '@friends': path.resolve(__dirname, '../friends'),
    '@theme-hope/components/PageFooter': path.resolve(
      __dirname,
      './components/PageFooter/index.vue'
    )
  },
  plugins: configPlugins,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {}
  })
})
