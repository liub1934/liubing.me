import { PluginConfig } from 'vuepress'
import { redirectPlugin } from 'vuepress-plugin-redirect'
import { PluginsOptions } from 'vuepress-theme-hope'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { containerPlugin } from '@vuepress/plugin-container'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { renderProjects } from '../containers/projects'
import { renderSiteInfos } from '../containers/siteInfos'

// VuePress插件配置
export const configPlugins: PluginConfig = [
  // 谷歌统计插件
  googleAnalyticsPlugin({
    id: 'G-GBZBT89WGJ'
  }),
  // 重定向插件
  redirectPlugin(),
  // 搜索插件
  searchProPlugin({
    indexContent: true
  }),
  // 自定义容器插件
  containerPlugin({
    type: 'projects',
    render: (tokens, idx) => {
      return renderProjects(tokens, idx)
    }
  }),
  containerPlugin({
    type: 'siteInfos',
    render: (tokens, idx) => {
      return renderSiteInfos(tokens, idx)
    }
  })
]

// 主题内置插件配置
export const themePlugins: PluginsOptions = {
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
      // 舍弃about文件夹的页面
      if (filePathRelative.startsWith('about/')) return false
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
  // 版权信息是否显示
  copyright: false,
  // If you don’t need comment feature, you can remove following option
  // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
  // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
  // 评论插件配置
  comment: {
    /**
     * Using Giscus
     */
    // provider: 'Giscus',
    // repo: Repo,
    // repoId: 'R_kgDOIq_bDg',
    // category: 'General',
    // categoryId: 'DIC_kwDOIq_bDs4CTP9q'

    /**
     * Using Twikoo
     */
    // provider: "Twikoo",
    // envId: "https://twikoo.ccknbc.vercel.app",

    /**
     * Using Waline
     */
    provider: 'Waline',
    serverURL: 'https://waline.liubing.me',
    requiredMeta: ['nick', 'mail'],
    wordLimit: 5,
    search: false
  },
  // Disable features you don’t want here
  // Markdown 增强插件配置
  mdEnhance: {
    // align: true,
    // attrs: true,
    // chart: true,
    codetabs: true,
    // container: true,
    // demo: true,
    // echarts: true,
    figure: true,
    // flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true
    // katex: true,
    // mark: true,
    // mermaid: true,
    // playground: {
    //   presets: ['ts', 'vue']
    // },
    // presentation: {
    //   plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
    // },
    // stylize: [
    //   {
    //     matcher: 'Recommended',
    //     replacer: ({ tag }) => {
    //       if (tag === 'em')
    //         return {
    //           tag: 'Badge',
    //           attrs: { type: 'tip' },
    //           content: 'Recommended'
    //         }
    //     }
    //   }
    // ],
    // sub: true,
    // sup: true,
    // tabs: true,
    // vPre: true,
    // vuePlayground: true
  },
  // PWA插件配置
  // pwa: false // 暂时关闭PWA功能
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
}
