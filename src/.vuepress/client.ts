import { defineClientConfig } from '@vuepress/client'
import AutoCatalog from './components/AutoCatalog/index.vue'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('Catalog', AutoCatalog)
  }
})
