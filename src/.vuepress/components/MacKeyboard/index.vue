<template>
  <div class="mac-keyboard">
    <div
      v-for="(key, i) in props.keys"
      :key="i"
      class="keyboard"
      :class="{
        [getKeyboardSize(key)]: true,
        'keyboard-multiline': getTop(key) && getBottom(key),
        'align-bottom': getBottom(key) && !getTop(key),
      }"
    >
      <div v-if="key !== 'space'" class="keyboard-inner">
        <template v-if="getTop(key)">
          <div
            class="keyboard-top"
            :class="{
              [`align-${getTopAlign(key)}`]: true,
              'top-multiple': getTop(key)!.length > 1,
            }"
          >
            <span v-for="(top, ti) in getTop(key)" :key="ti">
              {{ top }}
            </span>
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
            'bottom-multiple': getBottom(key)!.length > 1,
          }"
        >
          <span
            v-for="(text, textIndex) in getBottom(key)"
            :key="textIndex"
            :class="{
              'type-number': typeof text === 'number',
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
const props = defineProps<{
  keys: string[]
}>()

const keyMap: any = {
  control: {
    top: ['⌃'],
    bottom: ['control'],
    topAlign: 'right',
  },
  option: {
    top: ['⌥'],
    bottom: ['option'],
    topAlign: 'right',
  },
  command: {
    top: ['⌘'],
    size: 'kw-2',
    bottom: ['command'],
    topAlign: 'right',
  },
  enter: {
    bottom: ['⏎'],
    size: 'kw-3',
    bottomAlign: 'right',
  },
  tab: {
    bottom: ['⇥'],
    size: 'kw-2',
    bottomAlign: 'left',
  },
  delete: {
    bottom: ['⌫'],
    size: 'kw-2',
    bottomAlign: 'right',
  },
  shift: {
    bottom: ['⇧'],
    size: 'kw-4',
    bottomAlign: 'left',
  },
  esc: {
    bottom: ['esc'],
    size: 'kw-3',
    bottomAlign: 'left',
  },
  space: {
    size: 'kw-space',
  },
  dot: {
    top: ['~'],
    bottom: ['・'],
  },
  slash: {
    top: ['?'],
    bottom: ['/'],
  },
  leftBracket: {
    top: ['「', '{'],
    bottom: ['【', '['],
  },
  rightBracket: {
    top: ['」', '}'],
    bottom: ['】', ']'],
  },
  topArrow: {
    center: '▴',
    size: 'kh-half',
  },
  rightArrow: {
    center: '▸',
    size: 'kh-half',
  },
  bottomArrow: {
    center: '▾',
    size: 'kh-half',
  },
  leftArrow: {
    center: '◂',
    size: 'kh-half',
  },
  1: {
    top: ['!'],
    bottom: [1],
  },
  2: {
    top: ['@'],
    bottom: [2],
  },
  3: {
    top: ['#'],
    bottom: [3],
  },
  4: {
    top: ['¥', '$'],
    bottom: [4],
  },
  5: {
    top: ['%'],
    bottom: [5],
  },
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
    // style from: https://uiverse.io/dylanharriscameron/good-dingo-46
    background-color: #000;
    color: #fff;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
    width: 60px;
    height: 60px;
    border-radius: 15px 15px 12px 12px;
    cursor: pointer;
    position: relative;
    will-change: transform;
    transition: all 0.1s ease-in-out 0s;
    user-select: none;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0)
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    background-position:
      bottom right,
      bottom right;
    background-size:
      100% 100%,
      100% 100%;
    background-repeat: no-repeat;
    box-shadow:
      inset -4px -10px 0px rgba(255, 255, 255, 0.4),
      inset -4px -8px 0px rgba(0, 0, 0, 0.3),
      0px 2px 1px rgba(0, 0, 0, 0.3),
      0px 2px 1px rgba(255, 255, 255, 0.1);
    transform: perspective(70px) rotateX(5deg) rotateY(0deg);
    margin-left: 10px;
    margin-top: 10px;
    padding: 6px 6px 12px 6px;
    display: flex;
    justify-content: center;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2),
        rgba(0, 0, 0, 0.5)
      );
      z-index: -1;
      border-radius: 15px;
      box-shadow:
        inset 4px 0px 0px rgba(255, 255, 255, 0.1),
        inset 4px -8px 0px rgba(0, 0, 0, 0.3);
      transition: all 0.1s ease-in-out 0s;
      &:active {
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5),
          rgba(255, 255, 255, 0.2)
        );
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0)
        ),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
      background-position:
        bottom right,
        bottom right;
      background-size:
        100% 100%,
        100% 100%;
      background-repeat: no-repeat;
      z-index: -1;
      border-radius: 15px;
      transition: all 0.1s ease-in-out 0s;
    }
    &:active {
      will-change: transform;
      transform: perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px)
        scale(0.96);
      height: 64px;
      border: 0.25px solid rgba(0, 0, 0, 0.2);
      box-shadow:
        inset -4px -8px 0px rgba(255, 255, 255, 0.2),
        inset -4px -6px 0px rgba(0, 0, 0, 0.8),
        0px 1px 0px rgba(0, 0, 0, 0.9),
        0px 1px 0px rgba(255, 255, 255, 0.2);
      transition: all 0.1s ease-in-out 0s;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 5%;
        left: 20%;
        width: 50%;
        height: 80%;
        background-color: rgba(255, 255, 255, 0.1);
        animation: overlay 0.1s ease-in-out 0s;
        pointer-events: none;
      }
    }
    &:focus {
      outline: none;
    }
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
@keyframes overlay {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
