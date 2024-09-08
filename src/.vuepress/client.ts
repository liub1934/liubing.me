import { defineClientConfig } from 'vuepress/client'
import 'vuepress-theme-hope/presets/bounce-icon.scss'
import 'virtual:uno.css'
import NotFound from './layouts/NotFound/index.vue'
import NavLayout from './layouts/NavLayout/index.vue'
import TrollStoreLayout from './layouts/NavLayout/TrollStore.vue'
import ArticleLayout from './layouts/ArticleLayout/index.vue'
import ToolLayout from './layouts/ToolLayout/index.vue'
import HeatmapLayout from './layouts/HeatmapLayout/index.vue'
import TravellingLink from './components/TravellingLink/index.vue'
import { injectNaiveTheme } from './hooks'

export default defineClientConfig({
  layouts: {
    NotFound,
    NavLayout,
    TrollStoreLayout,
    ArticleLayout,
    HeatmapLayout,
    ToolLayout
  },
  enhance: ({ app, router, siteData }) => {
    injectNaiveTheme(app)
    app.component('TravellingLink', TravellingLink)
  }
})
