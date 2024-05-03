import 'vuepress-theme-hope/presets/bounce-icon.scss'
import 'virtual:uno.css'
import NotFound from './layouts/NotFound/index.vue'
import NavLayout from './layouts/NavLayout/index.vue'
import TrollStoreLayout from './layouts/NavLayout/TrollStore.vue'
import ArticleLayout from './layouts/ArticleLayout/index.vue'
import HeatmapLayout from './layouts/HeatmapLayout/index.vue'
import MacKeyboard from './components/MacKeyboard/index.vue'
import TravellingLink from './components/TravellingLink/index.vue'
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  layouts: {
    NotFound,
    NavLayout,
    TrollStoreLayout,
    ArticleLayout,
    HeatmapLayout
  },
  enhance: ({ app, router, siteData }) => {
    app.component('MacKeyboard', MacKeyboard)
    app.component('TravellingLink', TravellingLink)
  }
})
