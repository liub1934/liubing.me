import { defineClientConfig } from 'vuepress/client'
import { setupNaiveDiscreteApi } from './naiveDiscreteApi'

export default defineClientConfig({
  setup() {
    setupNaiveDiscreteApi()
  },
})
