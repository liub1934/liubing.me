import { defineClientConfig } from '@vuepress/client'
import ProjectPanel from './components/ProjectPanel'
import ProjectPanelItem from './components/ProjectPanel/item'
import Catalog from 'vuepress-plugin-components/client/components/Catalog'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('ProjectPanel', ProjectPanel)
    app.component('ProjectPanelItem', ProjectPanelItem)
    app.component('Catalog', Catalog)
  }
})
