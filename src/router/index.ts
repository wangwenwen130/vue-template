import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import { layoutChild } from './layout-child'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      redirect: '/hotel',
      component: Layout,
      children: layoutChild
    }
  ]
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export default router
