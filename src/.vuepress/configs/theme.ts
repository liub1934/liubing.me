import type { Theme } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { sidebarConfig } from './sidebar'
import { navbarConfig } from './navbar'
import { AuthorName, Description, HostName, Repo } from '../utils/constant'
import { themePlugins } from './plugins'
import packageData from '../../../package.json' assert { type: 'json' }
const devDependencies = packageData.devDependencies
const ThemeVersion =
  'v' + devDependencies['vuepress-theme-hope'].replace('^', '')
const year = new Date().getFullYear()

export default hopeTheme(
  // 主题选项
  {
    hostname: HostName,
    author: AuthorName,
    iconAssets: 'https://at.alicdn.com/t/c/font_3842071_r1opt0j6nw.css',
    logo: '/logo.svg',
    repo: Repo,
    docsDir: 'src',
    pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
    navbar: navbarConfig, // 导航栏
    sidebar: sidebarConfig, // 侧边栏
    displayFooter: true,
    blog: {
      description: Description,
      medias: {
        GitHub: 'https://github.com/liub1934',
        Email: 'mailto:w@liubing.me',
        Gmail: 'mailto:liub1934@gmail.com'
      }
    },
    // page meta
    metaLocales: {
      editLink: '在 GitHub 上编辑此页'
    },
    encrypt: {
      config: {}
    },
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Repo', 'TravellingLink', 'Outlook', 'Search']
    },
    headerDepth: 3,
    // 内置插件
    plugins: themePlugins,
    // 自定义页脚
    footer: `
    <div>
      <div>
        <span>VPS By</span>
        <a href="https://contabo.com" target="_blank" rel="noopener noreferrer">
          <img src="https://image.liubing.me/i/2023/02/11/a6de6381e4ae6.png"><b>Contabo</b>
        </a>
      </div>
      <div>
        <span>CDN By</span>
        <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://image.liubing.me/i/2023/02/11/7f17f3cf426c3.png"><b>Cloudflare</b>
        </a>
      </div>
      <div>
        <span>Server by</span>
        <a href="https://amh.sh/install.htm?fid=45745" target="_blank" rel="noopener noreferrer">
          <img src="https://liubing.me/assets/amh-CsDyk4kd.ico"><b>AMH面板</b>
        </a>
      </div>
      <div>
        <span>Powered By</span>
        <a href="https://vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">
          <img src="https://vuepress.vuejs.org/hero.png"><b>VuePress</b>
        </a>
      </div>
      <div>
        <span>Theme By</span>
        <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">
          <img src="https://theme-hope.vuejs.press/logo.png"><b>VuePress Theme Hope</b>
        </a>
      </div>
      <div>
        版权所有 © ${year} <a href="${HostName}"><b>${AuthorName}</b></a> | 
        <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/releases/tag/${ThemeVersion}" target="_blank" rel="noopener noreferrer">
          ${ThemeVersion}
        </a> |
        <a href="/about/site.html">关于本站</a>
      </div>
      <div>
        <span>本博客已运行</span>
        <span id="blog-duration"></span>
      </div>
    </div>
  `
  },
  // 主题行为选项：https://theme-hope.vuejs.press/zh/config/theme/behavior.html
  {
    custom: true
  }
) as Theme
