import { defineStore } from 'pinia'
import router from '@/router'

export enum CloseType {
  'all',
  'other',
  'current',
  'left',
  'right'
}

export interface Tag {
  name: string
  path: string
}

export const useTagsStore = defineStore('tags', () => {
  const routeTags = ref<Tag[]>([])
  const route = router.currentRoute
  const tagsHandle = {
    has: () => {
      return routeTags.value.find((tag) => tag.path === route.value.path)
    },
    push: (tag: Tag) => {
      routeTags.value.push(tag)
    },
    tagsClose: (type: CloseType, tag?: Tag) => {
      const curTag = tag || route.value
      if (routeTags.value.length === 1) return
      switch (type) {
        case CloseType.all:
          routeTags.value = routeTags.value = []
          router.push('/')
          break
        case CloseType.other:
          routeTags.value = routeTags.value.filter((item) => item.path === curTag.path)
          break
        case CloseType.current:
          routeTags.value = routeTags.value.filter((item) => item.path !== curTag.path)
          break
        case CloseType.left: {
          let tag = routeTags.value[0]
          if (!tag) return
          while (tag.path !== curTag.path) {
            routeTags.value.shift()
            tag = routeTags.value[0]
          }
          break
        }
        case CloseType.right: {
          let tag = routeTags.value[routeTags.value.length - 1]
          if (!tag) return
          while (tag.path !== curTag.path) {
            routeTags.value.pop()
            tag = routeTags.value[routeTags.value.length - 1]
          }
          break
        }
      }
      if (
        curTag.path === route.value.path ||
        !routeTags.value.find((item) => item.path === route.value.path)
      ) {
        router.push(routeTags.value[0].path)
      }
    }
  }

  const tags = computed(() => routeTags.value)
  return { tagsHandle, tags }
})
