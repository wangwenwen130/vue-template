import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

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
      imports: [
        'vue',
        'vue-router',
        {
          'element-plus': ['ElMessage', 'ElMessageBox', 'ElNotification']
        },
        {
          from: 'element-plus',
          imports: ['ElMessage', 'ElMessageBox', 'ElNotification'],
          type: true
        }
      ],
      dts: true,
      eslintrc: {
        enabled: true
      },
      dirs:['src/stores/**', 'src/hooks/**']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      extensions: ['vue', 'tsx'],
      dts: true,
      deep: true,
      dirs: ['src/components']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
