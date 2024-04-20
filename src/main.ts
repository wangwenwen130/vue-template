import '@/assets/style/reset.css'
import 'uno.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'

import App from './App.vue'
import { setupI18n } from './i18n'
import { setupRouter } from './router'
import { setupDirectives } from './directives'
import { setupIcons } from './components'
import { setupStore } from './stores'

const bootstrap = () => {
  const app = createApp(App)

  setupRouter(app)
  setupStore(app)
  setupI18n(app)
  setupDirectives(app)
  setupIcons(app)

  app.mount('#app')
}

bootstrap()
