import NotFound from './layouts/NotFound/index.vue'
import NavLayout from './layouts/NavLayout/index.vue'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  layouts: {
    NotFound,
    NavLayout
  },
  enhance: ({ app, router, siteData }) => {
    // app.component('ComponentName', Component)
  }
})
