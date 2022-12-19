import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import theme from './theme'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Bing🐣',
  description: '基于VuePress的个人博客，记录日常开发问题。',
  head: [['script', { src: '/js/footer.js' }]],
  shouldPrefetch: false,
  theme,
  alias: {
    '@hooks': path.resolve(__dirname, './hooks'),
    '@components': path.resolve(__dirname, './components')
  }
})
