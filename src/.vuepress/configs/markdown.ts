import type { MarkdownOptions } from 'vuepress-theme-hope'

export const markdownOptions: MarkdownOptions = {
  tabs: true,
  imgLazyload: true,
  figure: true,
  highlighter: {
    themes: {
      light: 'one-light',
      dark: 'one-dark-pro',
    },
    langs: ['html', 'json', 'javascript', 'typescript', 'vue', 'shellscript', 'yaml', 'markdown', 'csv', 'dotenv', 'sql', 'less', 'scss', 'diff'],
    // 自定义语言别名
    langAlias: {
      env: 'dotenv',
    },
  },
}
