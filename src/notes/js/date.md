---
order: 2
category:
  - 代码笔记
---

# 日期工具

## 格式化持续时间

```js
function formatDuration(ms) {
  if (ms < 0) ms = -ms
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  }
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ')
}
```

## 格式化秒

```js
function formatSeconds(s) {
  const [hour, minute, second, sign] =
    s > 0
      ? [s / 3600, (s / 60) % 60, s % 60, '']
      : [-s / 3600, (-s / 60) % 60, -s % 60, '-']

  return (
    sign +
    [hour, minute, second]
      .map((v) => `${Math.floor(v)}`.padStart(2, '0'))
      .join(':')
  )
}

// 举个例子🌰
formatSeconds(200) // '00:03:20'
formatSeconds(-200) // '-00:03:20'
formatSeconds(99999) // '27:46:39'
```

## 计算两个日期之间的工作日

```js
function countWeekDaysBetween(startDate, endDate) {
  return Array.from({
    length: (endDate - startDate) / (1000 * 3600 * 24)
  }).reduce((count) => {
    if (startDate.getDay() % 6 !== 0) count++
    startDate = new Date(startDate.setDate(startDate.getDate() + 1))
    return count
  }, 0)
}

// 举个例子🌰
countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 06, 2020')) // 1
countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 14, 2020')) // 7
```

## 日期添加工作日

```js
function addWeekDays(startDate, count) {
  return Array.from({ length: count }).reduce((date) => {
    date = new Date(date.setDate(date.getDate() + 1))
    if (date.getDay() % 6 === 0)
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)))
    return date
  }, startDate)
}

// 举个例子🌰
addWeekDays(new Date('Oct 09, 2020'), 5) // 'Oct 16, 2020'
addWeekDays(new Date('Oct 12, 2020'), 5) // 'Oct 19, 2020'
```

## 日期新增分钟数

```js
function addMinutesToDate(date, n) {
  const d = new Date(date)
  d.setTime(d.getTime() + n * 60000)
  return d.toISOString().split('.')[0].replace('T', ' ')
}

// 举个例子🌰
addMinutesToDate('2020-10-19 12:00:00', 10) // '2020-10-19 12:10:00'
addMinutesToDate('2020-10-19', -10) // '2020-10-18 23:50:00'
```

## 日期新增天数

```js
function addDaysToDate() {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}

// 举个例子🌰
addDaysToDate('2020-10-15', 10) // '2020-10-25'
addDaysToDate('2020-10-15', -10) // '2020-10-05'
```

## 生成日期范围

```js
const dateRangeGenerator = function* (start, end, step = 1) {
  let d = start
  while (d < end) {
    yield new Date(d)
    d.setDate(d.getDate() + step)
  }
}

// 举个例子🌰
[...dateRangeGenerator(new Date('2021-06-01'), new Date('2021-06-04'))];// [ 2021-06-01, 2021-06-02, 2021-06-03 ]
```

## 校验日期是否合法

```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

// 举个例子🌰
isDateValid('December 17, 1995 03:24:00'); // true
isDateValid('1995-12-17T03:24:00'); // true
isDateValid('1995-12-17 T03:24:00'); // false
isDateValid('Duck'); // false
isDateValid(1995, 11, 17); // true
isDateValid(1995, 11, 17, 'Duck
```

## 根据日期获取时间

```js
const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8)

// 举个例子🌰
getColonTimeFromDate(new Date()) // '08:38:00'
```

## 根据日期获取季度和年份

```js
function quarterOfYear(date = new Date()) {
  return [Math.ceil((date.getMonth() + 1) / 3), date.getFullYear()]
}

// 举个例子🌰
quarterOfYear(new Date('07/10/2018')) // [ 3, 2018 ]
quarterOfYear() // [ 4, 2020 ]
```

## 根据日期获取星期几

```js
const dayName = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' })

// 举个例子🌰
dayName(new Date()) // 'Saturday'
dayName(new Date('09/23/2020'), 'de-DE') // 'Samstag'
```

## 根据日期获取几天前的日期

```js
function daysAgo(n, date) {
  let d = date || new Date()
  d.setDate(d.getDate() - Math.abs(n))
  return d.toISOString().split('T')[0]
}

// 举个例子🌰
daysAgo(20) // 2020-09-16 (if current date is 2020-10-06)
```

## 判断日期是否是 ISO 格式

```js
function (val) {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
}

// 举个例子🌰
isISOString('2020-10-12T10:10:10.000Z'); // true
isISOString('2020-10-12'); // false
```

## 获取给定日期的最大值

```js
const maxDate = (...dates) => new Date(Math.max(...dates))

// 举个例子🌰
const dates = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
]
maxDate(...dates) // 2018-03-11T22:00:00.000Z
```

## 获取给定日期的最小值

```js
const minDate = (...dates) => new Date(Math.min(...dates))

// 举个例子🌰
const dates = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
]
minDate(...dates) // 2016-01-08T22:00:00.000Z
```
