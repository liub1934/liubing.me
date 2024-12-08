import type { Theme } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import packageData from '../../../package.json' assert { type: 'json' }
import { ArticleInfo, AuthorName, Description, HostName, Repo } from '../utils'
import { markdownOptions } from './markdown'
import { navbarConfig } from './navbar'
import { themePlugins } from './plugins'
import { sidebarConfig } from './sidebar'

const devDependencies = packageData.devDependencies
const ThemeVersion
  = `v${devDependencies['vuepress-theme-hope'].replace('^', '')}`
const year = new Date().getFullYear()

export default hopeTheme(
  // 主题选项
  {
    hostname: HostName,
    author: AuthorName,
    iconAssets: 'https://at.alicdn.com/t/c/font_3842071_wvgq1sz15c.css',
    logo: '/logo.svg',
    repo: Repo,
    docsDir: 'src',
    pageInfo: ArticleInfo,
    navbar: navbarConfig, // 导航栏
    sidebar: sidebarConfig, // 侧边栏
    displayFooter: true,
    blog: {
      description: Description,
      medias: {
        GitHub: 'https://github.com/liub1934',
        Email: 'mailto:w@liubing.me',
        Gmail: 'mailto:liub1934@gmail.com',
      },
      articleInfo: ArticleInfo,
    },
    // page meta
    metaLocales: {
      editLink: '在 GitHub 上编辑此页',
    },
    encrypt: {
      config: {},
    },
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Repo', 'TravellingLink', 'APlayerButton', 'Outlook', 'Search'],
    },
    headerDepth: 3,
    // 内置插件
    plugins: themePlugins,
    // markdown配置
    markdown: markdownOptions,
    // 自定义页脚
    footer: `
    <div>
      <div>
        <span>VPS By</span>
        <a href="https://contabo.com" target="_blank" rel="noopener noreferrer">
          <img src="https://api.liubing.me/favicon/contabo.com.png"><b>Contabo</b>
        </a>
      </div>
      <div>
        <span>CDN By</span>
        <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://api.liubing.me/favicon/cloudflare.com.png"><b>Cloudflare</b>
        </a>
      </div>
      <div>
        <span>Server by</span>
        <a href="https://1panel.cn/" target="_blank" rel="noopener noreferrer">
          <img src="https://api.liubing.me/favicon/1panel.cn.png"><b>1Panel</b>
        </a>
      </div>
      <div>
        <span>Powered By</span>
        <a href="https://vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">
          <img src="https://api.liubing.me/favicon/vuepress.vuejs.org.png"><b>VuePress</b>
        </a>
      </div>
      <div>
        <span>Theme By</span>
        <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">
          <img src="https://api.liubing.me/favicon/theme-hope.vuejs.press.png"><b>VuePress Theme Hope</b>
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
        <span id="running-time"></span>
      </div>
    </div>
  `,
  },
  // 主题行为选项：https://theme-hope.vuejs.press/zh/config/theme/behavior.html
  {
    custom: true,
  },
) as Theme
