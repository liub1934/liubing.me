import NotFound from './layouts/NotFound/index.vue'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  layouts: {
    NotFound
  },
  enhance: ({ app, router, siteData }) => {
    // app.component('ComponentName', Component)
  }
})
