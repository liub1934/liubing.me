import NotFound from './layouts/NotFound/index.vue'
import NavLayout from './layouts/NavLayout/index.vue'
import TrollStoreLayout from './layouts/NavLayout/TrollStore.vue'
import ArticleLayout from './layouts/ArticleLayout/index.vue'
import MacKeyboard from './components/MacKeyboard/index.vue'
import 'vuepress-theme-hope/presets/bounce-icon.scss'
import { defineClientConfig } from '@vuepress/client'
import { onBeforeUnmount, onMounted } from 'vue'
import { setDurationTime } from './utils'

export default defineClientConfig({
  layouts: {
    NotFound,
    NavLayout,
    TrollStoreLayout,
    ArticleLayout
  },
  enhance: ({ app, router, siteData }) => {
    app.component('MacKeyboard', MacKeyboard)
  },
  setup() {
    let timerInterval: ReturnType<typeof setInterval> | null
    onMounted(() => {
      setDurationTime()
      timerInterval = setInterval(() => {
        setDurationTime()
      }, 1000)
    })
    onBeforeUnmount(() => {
      if (timerInterval) clearInterval(timerInterval)
      timerInterval = null
    })
  }
})
