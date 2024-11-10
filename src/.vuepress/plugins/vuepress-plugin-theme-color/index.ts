import type { PluginFunction } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export function themeColorPlugin(): PluginFunction {
  return () => {
    return {
      name: 'ThemeColorPlugin',
      define: {},
      clientConfigFile: path.resolve(__dirname, './client/index.ts'),
    }
  }
}
