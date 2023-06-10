<template>
  <div class="mac-keyboard">
    <div
      class="keyboard"
      v-for="key in props.keys"
      :class="{
        [getKeyboardSize(key)]: true,
        'keyboard-multiline': getTop(key) && getBottom(key),
        'align-bottom': getBottom(key) && !getTop(key)
      }"
    >
      <div v-if="key !== 'space'" class="keyboard-inner">
        <template v-if="getTop(key)">
          <div
            class="keyboard-top"
            :class="{
            [`align-${getTopAlign(key)}`]: true,
            'top-multiple': getTop(key)!.length > 1
          }"
          >
            <span v-for="top in getTop(key)">{{ top }}</span>
          </div>
        </template>
        <div v-if="getCenter(key)" class="keyboard-center">
          {{ getCenter(key) }}
        </div>
        <div
          v-if="getBottom(key)"
          class="keyboard-bottom"
          :class="{
            [`align-${getBottomAlign(key)}`]: true,
            'bottom-multiple': getBottom(key)!.length > 1
          }"
        >
          <span
            v-for="text in getBottom(key)"
            :class="{
              'type-number': typeof text === 'number'
            }"
          >
            {{ text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  keys: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})

const keyMap: any = {
  control: {
    top: ['⌃'],
    bottom: ['control'],
    topAlign: 'right'
  },
  option: {
    top: ['⌥'],
    bottom: ['option'],
    topAlign: 'right'
  },
  command: {
    top: ['⌘'],
    size: 'kw-2',
    bottom: ['command'],
    topAlign: 'right'
  },
  enter: {
    bottom: ['⏎'],
    size: 'kw-3',
    bottomAlign: 'right'
  },
  tab: {
    bottom: ['⇥'],
    size: 'kw-2',
    bottomAlign: 'left'
  },
  delete: {
    bottom: ['⌫'],
    size: 'kw-2',
    bottomAlign: 'right'
  },
  shift: {
    bottom: ['⇧'],
    size: 'kw-4',
    bottomAlign: 'left'
  },
  esc: {
    bottom: ['esc'],
    size: 'kw-3',
    bottomAlign: 'left'
  },
  space: {
    size: 'kw-space'
  },
  dot: {
    top: ['~'],
    bottom: ['・']
  },
  slash: {
    top: ['?'],
    bottom: ['/']
  },
  leftBracket: {
    top: ['「', '{'],
    bottom: ['【', '[']
  },
  rightBracket: {
    top: ['」', '}'],
    bottom: ['】', ']']
  },
  topArrow: {
    center: '▴',
    size: 'kh-half'
  },
  rightArrow: {
    center: '▸',
    size: 'kh-half'
  },
  bottomArrow: {
    center: '▾',
    size: 'kh-half'
  },
  leftArrow: {
    center: '◂',
    size: 'kh-half'
  },
  1: {
    top: ['!'],
    bottom: [1]
  },
  2: {
    top: ['@'],
    bottom: [2]
  },
  3: {
    top: ['#'],
    bottom: [3]
  },
  4: {
    top: ['¥', '$'],
    bottom: [4]
  },
  5: {
    top: ['%'],
    bottom: [5]
  }
}

function getTop(key: string): string[] | undefined {
  return keyMap[key]?.top
}

function getCenter(key: string): string | undefined {
  if (keyMap[key]?.center) {
    return keyMap[key]?.center
  }
  return !getTop(key) && !getBottom(key) ? key : undefined
}

function getBottom(key: string): string[] | undefined {
  return keyMap[key]?.bottom
}

function getKeyboardSize(key: string): string {
  return keyMap[key]?.size || 'kw-1'
}

function getTopAlign(key: string): string {
  return keyMap[key]?.topAlign || 'center'
}

function getBottomAlign(key: string): string {
  return keyMap[key]?.bottomAlign || 'center'
}
</script>

<style lang="scss" scoped>
.mac-keyboard {
  margin-left: -10px;
  margin-top: -10px;
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .keyboard {
    width: 60px;
    height: 60px;
    margin-left: 10px;
    margin-top: 10px;
    background: #000;
    border-radius: 6px;
    border: 1px solid var(--dark-grey);
    padding: 6px;
    display: flex;
    justify-content: center;

    &.kw-1 {
      width: 60px;
    }
    &.kw-2 {
      width: 90px;
    }
    &.kw-3 {
      width: 120px;
    }
    &.kw-4 {
      width: 150px;
    }
    &.kh-half {
      height: 30px;
    }
    &.kw-space {
      width: 300px;
    }
    &.keyboard-multiline {
      .keyboard-inner {
        flex-direction: column;
        justify-content: space-between;
        .keyboard-bottom {
          font-size: 16px;
        }
      }
    }
    &.align-bottom {
      align-items: flex-end;
      .keyboard-inner,
      .keyboard-bottom {
        width: 100%;
      }
    }
    .keyboard-inner {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .keyboard-top {
      width: 100%;
      display: flex;
      &.top-multiple {
        min-width: 40px;
        justify-content: space-between;
      }
    }

    .keyboard-bottom {
      display: flex;
      align-items: center;
      line-height: 24px;
      &.bottom-multiple {
        min-width: 40px;
        justify-content: space-between;
      }
    }
  }
  .align-right {
    justify-content: flex-end;
  }
  .align-left {
    justify-content: flex-start;
  }
  .type-number {
    font-size: 20px;
  }
}
</style>
