import { Base } from './constant'
import { BlogStartDate } from './constant'
import { parseISO, intervalToDuration, formatDuration } from 'date-fns'

export const withBase = (path: string) => {
  if (!path) return ''
  const base = Base
  if (base && path.charAt(0) === '/') {
    return base + path.slice(1)
  } else {
    return path
  }
}

export function setDurationTime() {
  const $el = document.getElementById('blog-duration')
  if (!$el) return
  const start = parseISO(BlogStartDate)
  const end = new Date()
  const duration = intervalToDuration({ start, end })
  const unitMap = {
    years: '年',
    months: '个月',
    days: '天',
    hours: '小时',
    minutes: '分钟',
    seconds: '秒'
  }
  const durationArr: string[] = []
  Object.keys(duration).forEach((key: string) => {
    const value = duration[key as keyof Duration]
    if (value) {
      const unit = unitMap[key as keyof typeof unitMap]
      durationArr.push(value + unit)
    }
  })
  const durationText = durationArr.join(' ')
  $el.innerHTML = durationText
}
