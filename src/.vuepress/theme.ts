import { hopeTheme } from 'vuepress-theme-hope'
import { sidebarConfig } from './sidebar'
import { navbarConfig } from './navbar'
import { AuthorName, Description, HostName, Repo } from './constant'
import { themePlugins } from './plugins'
import packageData from '../../package.json' assert { type: 'json' }
const devDependencies = packageData.devDependencies
const ThemeVersion = devDependencies['vuepress-theme-hope'].replace('^', 'v')

export default hopeTheme({
  hostname: HostName,
  author: {
    name: AuthorName
  },
  iconAssets: 'https://at.alicdn.com/t/c/font_3842071_cfq9qhwa62j.css',
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
    end: ['Repo', 'Outlook', 'Search']
  },
  headerDepth: 3,
  // 主题色选择器
  themeColor: {
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f'
  },
  // 内置插件
  plugins: themePlugins,
  // 版权信息是否显示
  copyright: false,
  // 自定义页脚
  footer: `
    <div>
      <span>CDN By</span>
      <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://favicon.yandex.net/favicon/cloudflare.com"><b>Cloudflare</b>
      </a>
    </div>
    <div>
      <span>VPS By</span>
      <a href="https://contabo.com" target="_blank" rel="noopener noreferrer">
        <img src="https://favicon.yandex.net/favicon/contabo.com"><b>Contabo</b>
      </a>
    </div>
    <div>
      <span>Server by</span>
      <a href="https://www.bt.cn/?invite_code=MV9senRrbW4=" target="_blank" rel="noopener noreferrer">
        <img src="https://favicon.yandex.net/favicon/bt.cn"><b>宝塔Linux面板</b>
      </a>
    </div>
    <div>
      <span>Powered By</span>
      <a href="https://vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">
        <img src="https://vuepress.vuejs.org/icons/msapplication-icon-144x144.png"><b>VuePress</b>
      </a>
    </div>
    <div>
      <span>Theme By</span>
      <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">
        <img src="https://favicon.yandex.net/favicon/vuepress-theme-hope.github.io"><b>VuePress Theme Hope</b>
      </a>
    </div>
    <div>
      <span>Theme Version</span>
      <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/releases/tag/${ThemeVersion}" target="_blank" rel="noopener noreferrer">
        <b>${ThemeVersion}</b>
      </a>
    </div>
    <div>
      <span>Deploys By</span>
      <a href="https://buddy.works" target="_blank" rel="noopener noreferrer">
        <img src="https://favicon.yandex.net/favicon/buddy.works"><b>Buddy</b>
      </a>
    </div>
    <div>版权所有 © 2019 <a href="${HostName}"><b>${AuthorName}</b></a> | 备案是不可能备案的</div>
    <div>
      <span>本博客已运行</span>
      <span id="blog-duration"></span>
    </div>
  `
})
