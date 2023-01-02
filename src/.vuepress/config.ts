import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import theme from './theme'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Bing🐣',
  description: '基于VuePress的个人博客，记录日常开发问题。',
  head: [['script', { src: '/js/footer.js' }]],
  shouldPrefetch: false,
  theme,
  markdown: {
    headers: {
      level: [2, 3, 4]
    }
  },
  alias: {
    '@components': path.resolve(__dirname, './components')
  },
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-GBZBT89WGJ'
    })
  ]
})
