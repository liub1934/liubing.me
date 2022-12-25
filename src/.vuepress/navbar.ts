import { navbar } from 'vuepress-theme-hope'

export const navbarConfig = navbar([
  '/',
  {
    text: '代码笔记',
    icon: 'code',
    prefix: '/notes/',
    children: [
      {
        text: 'Vue',
        icon: 'vue',
        link: 'vue/'
      },
      {
        text: 'JavaScript',
        icon: 'javascript',
        link: 'js/'
      },
      {
        text: 'CSS',
        icon: 'css',
        link: 'css/'
      },
      {
        text: 'Html',
        icon: 'html',
        link: 'html/'
      }
    ]
  },
  {
    text: '私有图床',
    icon: 'pic',
    link: 'https://image.liubing.me'
  },
  {
    text: '导航',
    icon: 'link',
    link: 'https://nav.liubing.me'
  },
  {
    text: '友情链接',
    icon: 'link',
    link: '/friends'
  }
])
