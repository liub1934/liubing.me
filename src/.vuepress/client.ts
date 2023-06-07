import NotFound from './layouts/NotFound/index.vue'
import NavLayout from './layouts/NavLayout/index.vue'
import MacKeybord from './components/MacKeybord/index.vue'
import { defineClientConfig } from '@vuepress/client'
import { onBeforeUnmount, onMounted } from 'vue'
import { setDurationTime } from './utils'

export default defineClientConfig({
  layouts: {
    NotFound,
    NavLayout
  },
  enhance: ({ app, router, siteData }) => {
    app.component('MacKeybord', MacKeybord)
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
