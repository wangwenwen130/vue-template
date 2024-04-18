import '@/assets/style/reset.css'
import 'uno.css'

import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import { setupI18n } from './i18n'
import { setupDirectives } from './directives'

const bootstrap = () => {
  const app = createApp(App)

  setupRouter(app)
  setupStore(app)
  setupI18n(app)
  setupDirectives(app)

  app.mount('#app')
}

bootstrap()
