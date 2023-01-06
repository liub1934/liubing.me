import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { Description } from './constant'
import theme from './theme'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Bing🐣',
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
    '@theme-hope/components/PageFooter': '@components/PageFooter/index.vue'
  },
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-GBZBT89WGJ'
    })
  ]
})
