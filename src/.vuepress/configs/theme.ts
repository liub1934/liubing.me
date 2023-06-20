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
    author: {
      name: AuthorName
    },
    iconAssets: 'https://at.alicdn.com/t/c/font_3842071_gp2ohsal3b.css',
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
    // 内置插件
    plugins: themePlugins,
    // 自定义页脚
    footer: `
    <div>
      <div>
        版权所有 © ${year} <a href="${HostName}"><b>${AuthorName}</b></a> | 
        <a href="/about/site.html">关于本站</a>
      </div>
      <div>
        <span>Theme Version </span>
        <a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope/releases/tag/${ThemeVersion}" target="_blank" rel="noopener noreferrer">
          ${ThemeVersion}
        </a>
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
)
