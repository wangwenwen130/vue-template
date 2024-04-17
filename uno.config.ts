import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      warn: true,
      prefix: ['i-'],
      extraProperties: {
        display: 'inline-block'
      },
      collections: {
        icon: FileSystemIconLoader('./src/assets/icons'),
        images: FileSystemIconLoader('./src/assets/images')
      }
    }),
    presetAttributify(),
    presetRemToPx({ baseFontSize: 4 })
  ],
  transformers: [transformerVariantGroup()],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['f-c-c', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col'],
    ['flex-col-c-c', 'flex flex-col justify-center items-center'],
    ['card-border', 'border border-solid border-light_border dark:border-dark_border'],
    ['auto-bg', 'bg-white dark:bg-dark'],
    ['auto-bg-hover', 'hover:bg-#eaf0f1 hover:dark:bg-#1b2429'],
    ['auto-bg-highlight', 'bg-#eaf0f1 dark:bg-#1b2429'],
    ['text-highlight', 'rounded-4 px-8 py-2 auto-bg-highlight']
  ]
})
