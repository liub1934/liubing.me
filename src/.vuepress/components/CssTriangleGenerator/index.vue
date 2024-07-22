<template>
  <div class="css-triangle-generator">
    <el-row :gutter="40">
      <el-col :span="24" :md="8">
        <GeneratorDirection v-model:value="direction" class="mb-20" />
        <GeneratorOption v-model:value="triangle" class="mb-20" />
        <GeneratorSize v-model:unit="unit" v-model:size="size" class="mb-20" />
        <GeneratorColor v-model:color="colorValue" />
      </el-col>
      <el-col :span="24" :md="16">
        <GeneratorPreview />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import {
  ColorKey,
  DirectionKey,
  TriangleKey,
  TriangleSizeKey,
  UnitKey,
  type ColorValue,
  type DirectionType,
  type TriangleSize,
  type TriangleType
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
  heightBottom: 50
})
const colorValue = ref<ColorValue>({
  type: 'hex',
  color: '#60a5fa'
})

provide(DirectionKey, direction)
provide(TriangleKey, triangle)
provide(ColorKey, colorValue)
provide(TriangleSizeKey, size)
provide(UnitKey, unit)
</script>

<style lang="scss" scoped></style>
