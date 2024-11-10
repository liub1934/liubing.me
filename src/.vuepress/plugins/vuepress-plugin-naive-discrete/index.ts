import type { PluginFunction } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export function naiveDiscretePlugin(): PluginFunction {
  return () => {
    return {
      name: 'NaiveDiscretePlugin',
      define: {},
      clientConfigFile: path.resolve(__dirname, './client/index.ts'),
    }
  }
}
