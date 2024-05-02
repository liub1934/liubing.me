import { onBeforeUnmount, onMounted } from 'vue'
import { defineClientConfig, useRouter } from 'vuepress/client'
import type { BlogRunningTimeOptions } from '../type'

declare const __BLOG_RUNNING_TIME_OPTIONS__: BlogRunningTimeOptions

export default defineClientConfig({
  setup() {
    let timerInterval: ReturnType<typeof setInterval> | null
    onMounted(() => {
      const router = useRouter()
      setRuntime()
      router.beforeEach((to, from) => {
        clearTimeInterval()
        setRuntime()
      })
    })
    onBeforeUnmount(() => {
      clearTimeInterval()
    })

    function calculateRuntime(startDate: string) {
      const units = [
        { name: '年', duration: 1000 * 60 * 60 * 24 * 365 },
        { name: '个月', duration: 1000 * 60 * 60 * 24 * 30 },
        { name: '天', duration: 1000 * 60 * 60 * 24 },
        { name: '小时', duration: 1000 * 60 * 60 },
        { name: '分钟', duration: 1000 * 60 },
        { name: '秒', duration: 1000 }
      ]
      let output = ''
      let diff = Math.abs(new Date().getTime() - new Date(startDate).getTime())
      for (let unit of units) {
        const val = Math.floor(diff / unit.duration)
        if (val > 0) {
          output += `${val}${unit.name} `
          diff %= unit.duration
        }
      }
      return output
    }
    function setRuntime() {
      const { el, startDate } = __BLOG_RUNNING_TIME_OPTIONS__
      const $el = document.querySelector(el)
      if ($el) {
        $el.innerHTML = calculateRuntime(startDate)
        timerInterval = setInterval(() => {
          $el.innerHTML = calculateRuntime(startDate)
        }, 1000)
      }
    }
    function clearTimeInterval() {
      if (timerInterval) {
        clearInterval(timerInterval)
        timerInterval = null
      }
    }
  }
})
