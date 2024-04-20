import type { RouteRecordRaw } from 'vue-router'
import { hotelChild, configChild, sysChild, orderChild } from './modules'

export const layoutChild: RouteRecordRaw[] = [
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('@/views/hotel/index.vue'),
    meta: {
      title: '酒店'
    },
    children: hotelChild
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order/index.vue'),
    meta: {
      title: '订单'
    },
    children: orderChild
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import('@/views/sys/index.vue'),
    meta: {
      title: '系统'
    },
    children: sysChild
  },
  {
    path: '/config',
    name: 'config',
    component: () => import('@/views/config/index.vue'),
    meta: {
      title: '开发配置'
    },
    children: configChild
  }
]
