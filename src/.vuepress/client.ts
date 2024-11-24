import { defineClientConfig } from 'vuepress/client'
import APlayerButton from './components/APlayer/APlayerButton.vue'
import APlayer from './components/APlayer/index.vue'
import TravellingLink from './components/TravellingLink/index.vue'
import { injectNaiveTheme, injectPlayer } from './hooks'
import ArticleLayout from './layouts/ArticleLayout/index.vue'
import HeatmapLayout from './layouts/HeatmapLayout/index.vue'
import NavLayout from './layouts/NavLayout/index.vue'
import TrollStoreLayout from './layouts/NavLayout/TrollStore.vue'
import NoteLayout from './layouts/NoteLayout/index.vue'
import NotFound from './layouts/NotFound/index.vue'
import ToolLayout from './layouts/ToolLayout/index.vue'
import 'vuepress-theme-hope/presets/bounce-icon.scss'
import 'virtual:uno.css'

export default defineClientConfig({
  layouts: {
    NotFound,
    NavLayout,
    TrollStoreLayout,
    ArticleLayout,
    HeatmapLayout,
    ToolLayout,
    NoteLayout,
  },
  enhance: ({ app }) => {
    injectNaiveTheme(app)
    injectPlayer(app)
    app.component('TravellingLink', TravellingLink)
    app.component('APlayerButton', APlayerButton)
  },
  rootComponents: [APlayer],
})
