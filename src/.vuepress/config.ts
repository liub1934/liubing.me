import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { redirectPlugin } from 'vuepress-plugin-redirect'
import { authorName, Description } from './constant'
import theme from './theme'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: authorName,
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
  plugins: [
    // 谷歌统计差价
    googleAnalyticsPlugin({
      id: 'G-GBZBT89WGJ'
    }),
    // 重定向插件
    redirectPlugin()
  ]
})
