/* eslint-disable vue/multi-word-component-names */
import type { App } from 'vue'
import { Check, Close, Loading, Plus } from '@element-plus/icons-vue'

export const setupIcons = (app: App) => {
  app.component('Close', Close)
  app.component('Check', Check)
  app.component('Loading', Loading)
  app.component('Plus', Plus)
}
