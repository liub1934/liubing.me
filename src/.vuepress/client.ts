import { defineClientConfig } from '@vuepress/client'
// import ProjectPanel from '@theme-hope/modules/blog/components/ProjectPanel.js'
import ProjectPanel from './components/ProjectPanel'
import ProjectPanelItem from './components/ProjectPanel/item'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('ProjectPanel', ProjectPanel)
    app.component('ProjectPanelItem', ProjectPanelItem)
  }
})
