import { getDirname, path } from 'vuepress/utils'
import type { App, PluginFunction } from 'vuepress'

const __dirname = getDirname(import.meta.url)

export const themeColorPlugin = (): PluginFunction => {
  return (app: App) => {
    return {
      name: 'ThemeColorPlugin',
      define: {},
      clientConfigFile: path.resolve(__dirname, './client/index.ts')
    }
  }
}
