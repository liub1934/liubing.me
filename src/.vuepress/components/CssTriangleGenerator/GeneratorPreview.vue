<template>
  <div class="generator-preview">
    <div
      class="triangle-output h-250 bg-white overflow-auto flex items-center"
      :class="{
        'opacity-80': isDarkmode
      }"
    >
      <div
        class="transition-all mx-auto"
        :style="getStyleInfo.outPutStyle"
      ></div>
    </div>
    <div class="title text-24 font-600 mt-20">CSS</div>
    <n-input
      :value="getStyleInfo.outPutCss"
      autosize
      readonly
      type="textarea"
      @click="handleCopy"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useDarkmode } from '@theme-hope/modules/outlook/composables/index'
import {
  ColorKey,
  DirectionKey,
  TriangleKey,
  TriangleSizeKey,
  UnitKey,
  type DirectionType,
  type TriangleSize
} from './generator'
import { copyText } from '@/utils'

type Direction = 'top' | 'right' | 'bottom' | 'left'

type LengthDirection = {
  [K in Direction]: keyof TriangleSize | boolean
}

const { isDarkmode } = useDarkmode()
const direction = inject(DirectionKey)!
const triangle = inject(TriangleKey)!
const size = inject(TriangleSizeKey)!
const unit = inject(UnitKey)!
const colorValue = inject(ColorKey)!
const colorDirection: Record<DirectionType, Direction> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
  topRight: 'right',
  bottomRight: 'bottom',
  bottomLeft: 'left',
  topLeft: 'top'
}
const lengthDirection: Record<DirectionType, LengthDirection> = {
  top: {
    top: false,
    right: 'widthRight',
    bottom: 'height',
    left: 'widthLeft'
  },
  right: {
    top: 'heightTop',
    right: false,
    bottom: 'heightBottom',
    left: 'width'
  },
  bottom: {
    top: 'height',
    right: 'widthRight',
    bottom: false,
    left: 'widthLeft'
  },
  left: {
    top: 'heightTop',
    right: 'width',
    bottom: 'heightBottom',
    left: false
  },
  topRight: {
    top: false,
    right: 'width',
    bottom: 'height',
    left: false
  },
  bottomRight: {
    top: false,
    right: false,
    bottom: 'height',
    left: 'width'
  },
  bottomLeft: {
    top: 'height',
    right: false,
    bottom: false,
    left: 'width'
  },
  topLeft: {
    top: 'height',
    right: 'width',
    bottom: false,
    left: false
  }
}

const getStyleInfo = computed(() => {
  const outPutStyle = {
    width: 0,
    height: 0,
    'border-style': 'solid'
  } as Record<string, string | number>
  const color = colorValue.value
  const { width, widthLeft, widthRight, height, heightTop, heightBottom } =
    size.value
  const colors: Record<Direction, string> = {
    top: 'transparent',
    right: 'transparent',
    bottom: 'transparent',
    left: 'transparent'
  }
  const lengths: Record<Direction, string | number> = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
  const lengthDirections = lengthDirection[direction.value]
  colors[colorDirection[direction.value]] = color
  for (var key in lengthDirections) {
    const directionKey = key as Direction
    if (lengthDirections[directionKey] === false) {
      lengths[directionKey] = '0'
    } else {
      switch (triangle.value) {
        case 'equilateral':
          if (direction.value === 'top' || direction.value === 'bottom') {
            var equHeight = ((Math.sqrt(3) / 2) * width).toFixed(1)
            switch (lengthDirections[directionKey]) {
              case 'width':
                lengths[directionKey] = equHeight + unit.value
                break
              case 'height':
                lengths[directionKey] = equHeight + unit.value
                break
              case 'widthLeft':
                lengths[directionKey] = width / 2 + unit.value
                break
              case 'widthRight':
                lengths[directionKey] = width / 2 + unit.value
                break
            }
          } else if (
            direction.value === 'left' ||
            direction.value === 'right'
          ) {
            var equHeight = ((Math.sqrt(3) / 2) * height).toFixed(1)
            switch (lengthDirections[directionKey]) {
              case 'width':
                lengths[directionKey] = equHeight + unit.value
                break
              case 'height':
                lengths[directionKey] = equHeight + unit.value
                break
              case 'heightTop':
                lengths[directionKey] = height / 2 + unit.value
                break
              case 'heightBottom':
                lengths[directionKey] = height / 2 + unit.value
                break
            }
          }
          break
        case 'isosceles':
          switch (lengthDirections[directionKey]) {
            case 'width':
              lengths[directionKey] = width + unit.value
              break
            case 'height':
              lengths[directionKey] = height + unit.value
              break
            case 'widthLeft':
              lengths[directionKey] = width / 2 + unit.value
              break
            case 'widthRight':
              lengths[directionKey] = width / 2 + unit.value
              break
            case 'heightTop':
              lengths[directionKey] = height / 2 + unit.value
              break
            case 'heightBottom':
              lengths[directionKey] = height / 2 + unit.value
              break
          }
          break
        case 'scalene':
          switch (lengthDirections[directionKey]) {
            case 'width':
              lengths[directionKey] = width + 'px'
              break
            case 'height':
              lengths[directionKey] = height + 'px'
              break
            case 'widthLeft':
              lengths[directionKey] = widthLeft + 'px'
              break
            case 'widthRight':
              lengths[directionKey] = widthRight + 'px'
              break
            case 'heightTop':
              lengths[directionKey] = heightTop + 'px'
              break
            case 'heightBottom':
              lengths[directionKey] = heightBottom + 'px'
              break
          }
          break
      }
    }
  }
  const colorsString = toArrayString(colors)
  const lengthsString = toArrayString(lengths)
  outPutStyle['border-color'] = colorsString
  outPutStyle['border-width'] = lengthsString
  const outPutCss = `
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${lengthsString};
    border-color: ${colorsString};
  `
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join('\n')
  return {
    outPutCss,
    outPutStyle
  }
})

function toArrayString<T = any>(obj: T) {
  var arr = []
  for (var key in obj) {
    arr.push(obj[key])
  }
  return arr.join(' ')
}

function handleCopy() {
  copyText(getStyleInfo.value.outPutCss)
}
</script>

<style lang="scss" scoped>
.generator-preview {
  .triangle-output {
    background-image: linear-gradient(45deg, #ccc 25%, transparent 0),
      linear-gradient(45deg, transparent 75%, #ccc 0),
      linear-gradient(45deg, #ccc 25%, transparent 0),
      linear-gradient(45deg, transparent 75%, #ccc 0);
    background-position:
      0 0,
      10px 10px,
      10px 10px,
      20px 20px;
    background-size: 20px 20px;
  }
}
</style>
