import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './messages/index'

const i18n = createI18n({
  locale: 'zh',
  messages: messages
})

export const setupI18n = (app: App) => {
  app.use(i18n)
}

export const $t = (key: string) => {
  return i18n.global.t(key)
}
