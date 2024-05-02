import { Base } from './constant'
import { BlogStartDate } from './constant'
import { parseISO, intervalToDuration } from 'date-fns'

export const withBase = (path: string) => {
  if (!path) return ''
  const base = Base
  if (base && path.charAt(0) === '/') {
    return base + path.slice(1)
  } else {
    return path
  }
}
