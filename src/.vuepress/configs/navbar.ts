import { navbar } from 'vuepress-theme-hope'

export const navbarConfig = navbar([
  {
    text: '首页',
    icon: 'material-symbols:home',
    link: '/',
  },
  {
    text: '代码笔记',
    icon: 'ant-design:code-filled',
    prefix: '/notes/',
    children: [
      {
        text: 'Vue',
        icon: 'bxl:vuejs',
        link: 'vue/',
      },
      {
        text: 'JavaScript',
        icon: 'mdi:language-javascript',
        link: 'js/',
      },
      {
        text: 'CSS',
        icon: 'mdi:language-css3',
        link: 'css/',
      },
      {
        text: 'Html',
        icon: 'mdi:language-html5',
        link: 'html/',
      },
      {
        text: 'Linux',
        icon: 'devicon-plain:linux',
        link: 'linux/command',
      },
    ],
  },
  {
    text: '导航',
    icon: 'mynaui:navigation-one-solid',
    link: '/nav/',
  },
  {
    text: '工具箱',
    icon: 'clarity:tools-solid',
    prefix: '/tools/',
    children: [
      {
        text: 'CSS三角形生成器',
        icon: 'mdi:triangle',
        link: 'css-triangle-generator',
      },
      {
        text: '图片压缩',
        icon: 'icon-park-solid:compression',
        link: 'compress-image',
      },
      {
        text: '短视频去水印',
        icon: 'ic:round-video-library',
        link: 'short-video-remove-watermark',
      },
    ],
  },
  {
    text: '友情链接',
    icon: 'mdi:link-box',
    link: '/friends/',
  },
  {
    text: '关于本站',
    icon: 'ix:about-filled',
    link: '/about/site',
  },
  {
    text: '其他',
    icon: 'mdi:dots-horizontal-circle',
    children: [
      {
        text: '私有图床',
        icon: 'material-symbols:image-rounded',
        link: 'https://image.liubing.me',
      },
      {
        text: '服务状态',
        icon: 'icon-park-solid:server',
        link: 'https://uptime.liubing.me',
      },
    ],
  },
])
