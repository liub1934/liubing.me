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

/**
 * 格式化文件大小
 * @param {number} size 文件大小
 * @returns {string} B|KB|MB|G
 */
export function formatFileSize(size: number): string {
  const units = ['B', 'KB', 'MB', 'G']
  const index = Math.floor(Math.log(size) / Math.log(1024))
  const fileSize = Math.round(size / 1024 ** index)
  return `${fileSize} ${units[index]}`
}

/**
 * 图片下载
 * @param {File} file 文件File
 * @param {string} fileName 文件名
 */
export function downloadFile(file: File | Blob, fileName: string) {
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function getErrorInfo(error: unknown) {
  if (error instanceof Error) {
    return error.stack
  }
  return error
}

export function getFileName(path: string) {
  if (!path)
    return ''
  return path.split('.').slice(0, -1).join('.')
}

export function getImageSize(file: File): Promise<{ width: number, height: number }> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('文件类型不是图片'))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        resolve({ width: img.width, height: img.height })
      }
      img.onerror = () => {
        reject(new Error('无法加载图片'))
      }
      if (typeof reader.result === 'string') {
        img.src = reader.result
      }
    }
    reader.onerror = () => {
      reject(new Error('无法读取文件'))
    }
    reader.readAsDataURL(file)
  })
}
