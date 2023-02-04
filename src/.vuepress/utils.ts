import yaml from 'js-yaml'
import type Token from 'markdown-it/lib/token.js'
import { Base } from './constant'

export const withBase = (path: string) => {
  if (!path) return ''
  const base = Base
  if (base && path.charAt(0) === '/') {
    return base + path.slice(1)
  } else {
    return path
  }
}

export interface Project {
  icon: string
  name: string
  desc: string
  link: string
}

/**
 * 渲染容器列表
 * @param tokens
 * @param idx
 * @returns
 */
export const renderProjects = (tokens: Token[], idx: number) => {
  const { nesting: tokenNesting, info: tokenInfo } = tokens[idx]
  // 渲染开头的 ':::' 标记
  if (tokenNesting === 1) {
    let yamlStr = ''
    for (let i = idx; i < tokens.length; i++) {
      const { type, content, info } = tokens[i]
      if (type === 'container_projects_close') break
      if (!content) continue
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
        } else {
          dataList = dataObj.data
        }
      }
      // 判断是否有数据
      if (dataList && dataList.length) {
        const getProjectItem = (
          project: Project,
          index: number,
          type?: string
        ) => {
          const isFriends = type === 'friends'
          return `
              <a class="project project${index % 9}"
                href="${withBase(project.link)}"
                ${isFriends ? '' : 'rel="noopener noreferrer"'}
                target="_blank">
                <img src="${withBase(project.icon)}"
                  alt="${project.name}" class="image" />
                <div class="name">${project.name}</div>
                <div class="desc">${project.desc}</div>
              </a>
            `
        }
        const getProjects = (projects: Project[], type?: string) => {
          let projectsStr = ''
          projects.map((project, index) => {
            projectsStr += getProjectItem(project, index, type)
          })
          return projectsStr
        }
        const type = tokenInfo.split(' ').pop()
        return `<div class="project-panel">${getProjects(dataList, type)}`
      }
    }
  } else {
    // 渲染':::' 结尾
    return '</div>'
  }
  return ''
}

/**
 * Tree数据查找
 * @param tree tree数据
 * @param func 查找方法
 * @param childrenName 子集字段名
 * @returns
 */
export function treeFind<T>(
  tree: T[],
  func: (item: T) => boolean,
  childrenName = 'children'
): T | null {
  for (const item of tree) {
    if (func(item)) return item
    if (item[childrenName]) {
      const res: T | null = treeFind(item[childrenName], func)
      if (res) return res
    }
  }
  return null
}
