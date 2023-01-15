import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { AuthorName, Description } from './constant'
import { configPlugins } from './plugins'
import theme from './theme'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
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
  plugins: configPlugins
})
