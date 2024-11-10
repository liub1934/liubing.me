import { useClipboard } from '@vueuse/core'
import { Base } from './constant'

export function withBase(path: string) {
  if (!path)
    return ''
  const base = Base
  if (base && path.charAt(0) === '/') {
    return base + path.slice(1)
  }
  else {
    return path
  }
}

export function calculateRuntime(startDate: string) {
  const units = [
    { name: '年', duration: 1000 * 60 * 60 * 24 * 365 },
    { name: '个月', duration: 1000 * 60 * 60 * 24 * 30 },
    { name: '天', duration: 1000 * 60 * 60 * 24 },
    { name: '小时', duration: 1000 * 60 * 60 },
    { name: '分钟', duration: 1000 * 60 },
    { name: '秒', duration: 1000 },
  ]
  let output = ''
  let diff = Math.abs(new Date().getTime() - new Date(startDate).getTime())
  for (const unit of units) {
    const val = Math.floor(diff / unit.duration)
    if (val > 0) {
      output += `${val}${unit.name} `
      diff %= unit.duration
    }
  }
  return output
}

/**
 * 复制文字
 * @param text 文字内容
 */
export function copyText(text: string) {
  if (!text)
    return
  const { copy, isSupported } = useClipboard()
  if (isSupported) {
    copy(text)
    window.$message.success('复制成功')
  }
}

export function isValidJsonString(jsonString: string) {
  try {
    JSON.parse(jsonString)
    return true
  }
  catch (error) {
    console.log('isValidJsonString error', error)
    return false
  }
}

export function getGithubShieldsImg(url: string) {
  const starsLink = url.split('https://github.com/')[1]
  return `https://img.shields.io/github/stars/${starsLink}`
}
