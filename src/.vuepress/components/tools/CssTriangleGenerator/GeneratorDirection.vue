<template>
  <div class="generator-direction">
    <div class="title text-24 font-600">
      方向
    </div>
    <div class="relative flex-center py-60">
      <n-radio-group v-model:value="modelValue" class="ml-4">
        <div class="triangle-direction relative size-60">
          <div class="corners size-60">
            <div
              v-for="(item, index) in directions2"
              :key="item.value"
              class="triangle absolute size-30 cursor-pointer bg-blue hover:(bg-green)"
              :class="{
                'top-0 right-0': index === 0,
                'bottom-0 right-0': index === 1,
                'bottom-0 left-0': index === 2,
                'top-0 left-0': index === 3,
                'bg-green': modelValue === item.value,
              }"
              @click="modelValue = item.value"
            />
          </div>
          <div class="corners absolute top-0 ml-3 mt-4 size-54 -rotate-45">
            <div
              v-for="(item, index) in directions1"
              :key="item.value"
              class="triangle absolute size-27 cursor-pointer bg-fuchsia hover:(bg-green)"
              :class="{
                'top-0 right-0': index === 0,
                'bottom-0 right-0': index === 1,
                'bottom-0 left-0': index === 2,
                'top-0 left-0': index === 3,
                'bg-green': modelValue === item.value,
              }"
              @click="modelValue = item.value"
            />
          </div>
          <div class="absolute-center size-38 bg-white" />
          <n-radio
            v-for="(item, index) in directions"
            :id="item.value + index"
            :key="item.value"
            class="absolute! mr-0!"
            :value="item.value"
            :class="{
              'flex-row-reverse': index === 3 || index === 6 || index === 7,
              '-top-38 left-1/2 -translate-x-1/2': index === 0,
              'top-16 -right-60': index === 1,
              '-bottom-38 left-1/2 -translate-x-1/2': index === 2,
              'top-16 -left-60': index === 3,
              '-top-16 -right-60': index === 4,
              '-bottom-16 -right-60': index === 5,
              '-bottom-16 -left-60': index === 6,
              '-top-16 -left-60': index === 7,
            }"
          >
            {{ item.label }}
          </n-radio>
        </div>
      </n-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DirectionType } from './generator'

interface Direction {
  label: string
  value: DirectionType
}

const modelValue = defineModel<DirectionType>('value')
const directions: Direction[] = [
  {
    label: '上',
    value: 'top',
  },
  {
    label: '右',
    value: 'right',
  },
  {
    label: '下',
    value: 'bottom',
  },
  {
    label: '左',
    value: 'left',
  },
  {
    label: '右上',
    value: 'topRight',
  },
  {
    label: '右下',
    value: 'bottomRight',
  },
  {
    label: '左下',
    value: 'bottomLeft',
  },
  {
    label: '左上',
    value: 'topLeft',
  },
]
const directions1 = [...directions].splice(0, 4)
const directions2 = [...directions].splice(4)
</script>

<style lang="scss">
.generator-direction {
  .el-radio {
    margin-right: 0;
    .el-radio__label {
      padding: 0;
    }
  }
}
</style>
