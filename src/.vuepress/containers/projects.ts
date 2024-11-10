import type Token from 'markdown-it/lib/token.mjs'
import yaml from 'js-yaml'
import { getGithubShieldsImg, withBase } from '../utils'

export interface Project {
  icon: string
  name: string
  desc: string
  link: string
  github?: string
}

/**
 * 渲染容器列表
 * @param tokens
 * @param idx
 * @returns {string} 渲染后的html
 */
export function renderProjects(tokens: Token[], idx: number) {
  const { nesting: tokenNesting, info: tokenInfo } = tokens[idx]
  // 渲染开头的 ':::' 标记
  if (tokenNesting === 1) {
    let yamlStr = ''
    for (let i = idx; i < tokens.length; i++) {
      const { type, content, info } = tokens[i]
      if (type === 'container_projects_close')
        break
      if (!content)
        continue
      if (type === 'fence' && info === 'yaml') {
        // 是代码块类型，并且是yaml代码
        yamlStr = content
      }
    }
    if (yamlStr) {
      const dataObj = yaml.load(yamlStr) // 将yaml字符串解析成js对象
      let dataList: Project[] = []
      if (dataObj) {
        // 正确解析出数据对象
        if (Array.isArray(dataObj)) {
          dataList = dataObj
        }
      }
      // 判断是否有数据
      if (dataList && dataList.length) {
        const getProjectItem = (
          project: Project,
          index: number,
          type?: string,
        ) => {
          const isFriends = type === 'friends'
          const githubLink = `
            ${
              project.github
                ? `
                <a class="no-external-link-icon flex" target="_blank"
                  rel="noopener noreferrer" href="${project.github}">
                  <img src="${getGithubShieldsImg(project.github)}" alt="Stars">
                </a>
              `
                : ''
            }
          `
          return `
              <div class="vp-project-card color${index % 9}">
                <a href="${withBase(project.link)}"
                  class="no-external-link-icon"
                  ${isFriends ? '' : 'rel="noopener noreferrer"'}
                  target="_blank">
                  <img src="${withBase(project.icon)}"
                    alt="${project.name}" class="vp-project-image" />
                  <div class="vp-project-name ${project.desc ? '' : 'no-desc'}">
                    ${project.name}
                  </div>
                  ${
                    project.desc
                      ? `<div class="vp-project-desc">${project.desc}</div>`
                      : ''
                  }
                </a>
                ${githubLink}
              </div>
            `
        }
        const getProjects = (projects: Project[], type?: string) => {
          let projectsStr = ''
          projects.forEach((project, index) => {
            projectsStr += getProjectItem(project, index, type)
          })
          return projectsStr
        }
        const type = tokenInfo.split(' ').pop()
        return `<div class="vp-project-panel">${getProjects(dataList, type)}`
      }
    }
  }
  else {
    // 渲染':::' 结尾
    return '</div>'
  }
  return ''
}
