import yaml from 'js-yaml'
import type Token from 'markdown-it/lib/token.js'
import { withBase } from '../utils'
import { Project } from './projects'

export interface SiteInfo extends Project {
  repo?: string
  preview: string
}

/**
 * 渲染容器列表
 * @param tokens
 * @param idx
 * @returns
 */
export const renderSiteInfos = (tokens: Token[], idx: number) => {
  const { nesting } = tokens[idx]
  // 渲染开头的 ':::' 标记
  if (nesting === 1) {
    let yamlStr = ''
    for (let i = idx; i < tokens.length; i++) {
      const { type, content, info } = tokens[i]
      if (type === 'container_siteInfos_close') break
      if (!content) continue
      if (type === 'fence' && info === 'yaml') {
        // 是代码块类型，并且是yaml代码
        yamlStr = content
      }
    }
    if (yamlStr) {
      const dataObj = yaml.load(yamlStr) // 将yaml字符串解析成js对象
      let dataList: SiteInfo[] = []
      if (dataObj) {
        // 正确解析出数据对象
        if (Array.isArray(dataObj)) {
          dataList = dataObj
        } else {
          dataList = dataObj.data
        }
      }
      // 判断是否有数据
      if (dataList && dataList.length) {
        const getProjectItem = (siteInfo: SiteInfo) => {
          // const repoType = resolveRepoType(siteInfo.repo) || 'link'
          const repoType = 'link'
          const sourceStr = siteInfo.repo
            ? `
            <div class="site-info-source-wrapper">
              <a class="site-info-source" 
                href="${siteInfo.repo}"
                aria-label="源代码" data-balloon-pos="left"
                title="源代码"
                rel="noopener noreferrer"
                target="_blank">
                <span class="iconfont icon-${repoType}"></span>
              </a>
            </div>
          `
            : ''
          return `
            <a class="site-info"
              href="${withBase(siteInfo.link)}"
              rel="noopener noreferrer"
              target="_blank">
              <div class="site-info-preview"
                style="background: url(${withBase(
                  siteInfo.preview
                )}) center center / cover no-repeat;">
              </div>
              <div class="site-info-detail">
                <img class="site-info-logo"
                  src='${withBase(siteInfo.icon)}'
                  no-view
                  loading="lazy">
                <div class="site-info-name">${siteInfo.name}</div>
                <div class="site-info-desc">${siteInfo.desc}</div>
              </div>
              ${sourceStr}
            </a>
            `
        }
        const getSiteInfos = (siteInfos: SiteInfo[]) => {
          let htmlStr = ''
          siteInfos.map((siteInfo) => {
            htmlStr += getProjectItem(siteInfo)
          })
          return htmlStr
        }
        return `<div class="site-info-list">${getSiteInfos(dataList)}`
      }
    }
  } else {
    // 渲染':::' 结尾
    return '</div>'
  }
  return ''
}
