import { defineConfig } from '@unocss/vite'
import { presetIcons } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(vue|ts)($|\?)/]
    }
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetRemToPx({
      baseFontSize: 4
    }),
    presetAttributify()
  ],
  theme: {
    colors: {}
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'wh-screen': 'w-screen h-screen',
    'flex-center': 'flex justify-center items-center',
    'absolute-center':
      'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
  }
})
