import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export default router
