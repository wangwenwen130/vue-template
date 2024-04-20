export * from './tags'
import { defineStore } from 'pinia'
import router from '@/router'

export const useRouterStore = defineStore('routes', () => {
  const routes = computed(() => {
    const list = router.getRoutes()
    const layout = list.find((item) => item.name == 'Layout')
    return layout?.children
  })

  const children = ref<
    {
      label: string
      path: string
      visible?: boolean
      icon?: string
    }[]
  >([])

  const updateChild = () => {
    const route = router.currentRoute
    const routes = router.getRoutes().find((item) => item.path === route.value.path)
    children.value =
      routes?.children
        .map((r) => {
          return {
            label: (r.meta?.title || r.name) as string,
            path: r.path,
            visible: (r.meta?.visible ?? true) as boolean,
            ...r.meta
          }
        })
        .filter((r) => r.visible) || []
  }

  return { routes, children, updateChild }
})
