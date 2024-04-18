import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { zhCn, en } from 'element-plus/es/locale/index'
import messages from './messages/index'

const i18n = createI18n({
  locale: 'zh',
  messages: messages
})

export const setupI18n = (app: App) => {
  app.use(i18n)
}
