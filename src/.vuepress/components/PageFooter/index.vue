<template>
  <PageFooter></PageFooter>
</template>

<script lang="ts" setup>
import PageFooter from 'vuepress-theme-hope/components/PageFooter'
import dayjs from 'dayjs'
import duration, { DurationUnitType } from 'dayjs/plugin/duration'
import { onBeforeUnmount, onMounted } from 'vue'
import { BlogStartDate } from '../../constant'
dayjs.extend(duration)

let timer
const blogStartDate = dayjs(BlogStartDate)
function setDurationTime() {
  const $el = document.getElementById('blog-duration')
  if (!$el) return
  let durationText = ''
  const nowDate = dayjs(new Date())
  const $duration = dayjs.duration(nowDate.diff(blogStartDate))
  const arrMap = [
    {
      key: 'years',
      label: '年'
    },
    {
      key: 'months',
      label: '个月'
    },
    {
      key: 'days',
      label: '天'
    },
    {
      key: 'hours',
      label: '小时'
    },
    {
      key: 'minutes',
      label: '分钟'
    },
    {
      key: 'seconds',
      label: '秒'
    }
  ]
  arrMap.map((item, index) => {
    const { key, label } = item
    const getValue = $duration.get(key as DurationUnitType)
    if (getValue) {
      const timeValue =
        index < 3 ? getValue : getValue.toString().padStart(2, '0')
      durationText += `${timeValue}${label} `
    }
  })
  $el.innerHTML = durationText
}

onMounted(() => {
  setDurationTime()
  timer = setInterval(() => {
    setDurationTime()
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>
