import '@/assets/style/reset.css'
import 'uno.css'

import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'

const bootstrap = () => {
  const app = createApp(App)

  setupRouter(app)
  setupStore(app)

  app.mount('#app')
}

bootstrap()
