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
      },
      {
        text: 'Linux',
        icon: 'linux',
        link: 'linux/command'
      }
    ]
  },
  {
    text: '导航',
    icon: 'nav',
    link: '/nav/'
  },
  {
    text: '工具箱',
    icon: 'tool',
    prefix: '/tools/',
    children: [
      {
        text: 'CSS三角形生成器',
        icon: 'triangle',
        link: 'css-triangle-generator'
      },
      {
        text: '图片压缩',
        icon: 'pic',
        link: 'compress-image'
      },
      {
        text: '短视频去水印',
        icon: 'video',
        link: 'short-video-remove-watermark'
      }
    ]
  },
  {
    text: '友情链接',
    icon: 'link',
    link: '/friends/'
  },
  {
    text: '私有图床',
    icon: 'pic',
    rel: ' ',
    link: 'https://image.liubing.me'
  },
  {
    text: '关于本站',
    icon: 'about',
    link: '/about/site'
  }
])
