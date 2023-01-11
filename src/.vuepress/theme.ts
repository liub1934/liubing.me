import { hopeTheme } from 'vuepress-theme-hope'
import { sidebarConfig } from './sidebar'
import { navbarConfig } from './navbar'
import { authorName, Description, HostName, Repo } from './constant'

export default hopeTheme({
  hostname: HostName,
  author: {
    name: authorName
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
    left: ['Brand'],
    center: ['Links'],
    right: ['Repo', 'Outlook', 'Search']
  },
  headerDepth: 3,
  // 主题色选择器
  themeColor: {
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f'
  },
  // 内置插件
  plugins: {
    // 博客插件配置
    blog: {
      timeline: 'archives', // 时间轴访问路径修改成archives
      // 过滤列表页面
      filter: ({ filePathRelative, frontmatter }) => {
        // 舍弃那些不是从 Markdown 文件生成的页面
        if (!filePathRelative) return false
        // 舍弃notes文件夹的页面
        if (filePathRelative.startsWith('notes/')) return false
        // 舍弃nav文件夹的页面
        if (filePathRelative.startsWith('nav/')) return false
        // 舍弃所有的README.md页面
        if (filePathRelative.endsWith('README.md')) return false
        // 舍弃那些没有使用默认布局的页面
        if (frontmatter.home || frontmatter.layout) return false
        return true
      }
    },
    // 复制代码插件配置
    copyCode: {
      showInMobile: true // 手机端显示代码复制
    },
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // 评论插件配置
    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: Repo,
      repoId: 'R_kgDOIq_bDg',
      category: 'General',
      categoryId: 'DIC_kwDOIq_bDs4CTP9q'

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },
    // Disable features you don’t want here
    // Markdown 增强插件配置
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue']
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              }
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },
    // PWA插件配置
    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      themeColor: '#2f54eb',
      update: 'hint',
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black'
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff'
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }
  },
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
        <img src="https://favicon.yandex.net/favicon/vuepress.vuejs.org"><b>VuePress</b>
      </a>
    </div>
    <div>
      <span>Theme By</span>
      <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">
        <img src="https://favicon.yandex.net/favicon/vuepress-theme-hope.github.io"><b>VuePress Theme Hope</b>
      </a>
    </div>
    <div>版权所有 © 2019 <a href="${HostName}"><b>${authorName}</b></a> | 备案是不可能备案的</div>
    <div>
      <span>本博客已运行</span>
      <span id="blog-duration"></span>
    </div>
  `
})
