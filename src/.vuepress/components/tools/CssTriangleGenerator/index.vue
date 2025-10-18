<template>
  <div class="css-triangle-generator flex flex-col gap-20 md:(flex-row)">
    <div class="w-full md:(w-50%)">
      <GeneratorDirection v-model:value="direction" class="mb-20" />
      <GeneratorOption v-model:value="triangle" class="mb-20" />
      <GeneratorSize v-model:unit="unit" v-model:size="size" class="mb-20" />
      <GeneratorColor v-model:color="colorValue" />
    </div>
    <div class="w-full md:(w-50%)">
      <GeneratorPreview />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DirectionType, TriangleSize, TriangleType } from './generator'
import { provide, ref } from 'vue'
import {
  ColorKey,
  DirectionKey,

  TriangleKey,

  TriangleSizeKey,

  UnitKey,
} from './generator'

const direction = ref<DirectionType>('top')
const triangle = ref<TriangleType>('isosceles')
const unit = ref('px')
const size = ref<TriangleSize>({
  width: 200,
  widthLeft: 100,
  widthRight: 100,
  height: 100,
  heightTop: 50,
  heightBottom: 50,
})
const colorValue = ref<string>('#60a5fa')

provide(DirectionKey, direction)
provide(TriangleKey, triangle)
provide(ColorKey, colorValue)
provide(TriangleSizeKey, size)
provide(UnitKey, unit)
</script>

<style lang="scss" scoped></style>
