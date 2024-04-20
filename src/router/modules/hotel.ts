import type { RouteRecordRaw } from 'vue-router'

export const hotelChild: RouteRecordRaw[] = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/hotel/index.vue'),
    meta: {
      title: '酒店'
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/order/index.vue'),
    meta: {
      title: '订单',
      visible: false
    }
  },
  {
    path: '/132',
    name: '132',
    component: () => import('@/views/sys/index.vue'),
    meta: {
      title: '系统'
    }
  }
]
