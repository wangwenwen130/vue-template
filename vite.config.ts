import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

const typeFile = fileURLToPath(new URL('./components.d.ts', import.meta.url))
console.log('typeFile', typeFile)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { compilerOptions: { hoistStatic: false } },
      script: {
        defineModel: true
      }
    }),
    vueJsx(),
    Unocss(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: typeFile,
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      extensions: ['vue', 'tsx'],
      dts: typeFile
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
