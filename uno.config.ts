import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetIcons, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'
import { generateColorCombinations } from './utils'

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(vue|ts)($|\?)/],
    },
  },
  presets: [
    presetWind3({
      dark: {
        dark: '[data-theme="dark"]',
      },
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetRemToPx({
      baseFontSize: 4,
    }),
    presetAttributify(),
  ],
  theme: {
    colors: {
      // 生成如下颜色数据
      // 'primary': 'rgba(var(--n-primary-color))'
      // 'primary-1': 'rgba(var(--n-primary-color-1))',
      // 'primary-hover': 'rgba(var(--n-primary-color-hover))',
      // ...其他
      ...generateColorCombinations(),
      text: 'var(--vp-c-text)',
      subText: 'var(--vp-c-text-subtle)',
      grey: 'var(--vp-c-grey-text)',
      border: 'var(--border-color)',
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'wh-screen': 'w-screen h-screen',
    'flex-center': 'flex justify-center items-center',
    'absolute-center':
      'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
  },
  rules: [['shadow', { 'box-shadow': '0 1px 3px 1px var(--vp-c-shadow)' }]],
  safelist: [
    ...Array.from({ length: 10 }, (_, i) => `bg-primary-${i + 1}`),
    'flex',
    'text-13',
    'text-red',
    'text-right',
  ],
})
