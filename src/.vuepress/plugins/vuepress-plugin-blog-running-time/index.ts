import { getDirname, path } from 'vuepress/utils'
import type { App, PluginFunction } from 'vuepress'
import type { BlogRunningTimeOptions } from './type'

const __dirname = getDirname(import.meta.url)

export const blogRunningTimePlugin = (
  options: BlogRunningTimeOptions
): PluginFunction => {
  return (app: App) => {
    return {
      name: 'BlogRunningTimePlugin',
      define: {
        __BLOG_RUNNING_TIME_OPTIONS__: options
      },
      clientConfigFile: path.resolve(__dirname, './client/index.ts')
    }
  }
}
