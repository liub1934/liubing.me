import type { InjectionKey, Ref } from 'vue'

export type DirectionType =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'

/**
 * 三角形类型：
 *
 * 'equilateral'：等边
 *
 * 'isosceles'：等腰
 *
 * 'scalene'：不等边
 */
export type TriangleType = 'equilateral' | 'isosceles' | 'scalene'

export interface TriangleSize {
  width: number
  widthLeft: number
  widthRight: number
  height: number
  heightTop: number
  heightBottom: number
}

export type ColorType = 'hex' | 'rgba'

export interface ColorValue {
  type: ColorType
  color: string
}

export const DirectionKey = Symbol() as InjectionKey<Ref<DirectionType>>
export const TriangleKey = Symbol() as InjectionKey<Ref<TriangleType>>
export const UnitKey = Symbol() as InjectionKey<Ref<string>>
export const TriangleSizeKey = Symbol() as InjectionKey<Ref<TriangleSize>>
export const ColorKey = Symbol() as InjectionKey<Ref<ColorValue>>
