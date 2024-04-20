import { defineStore } from 'pinia'

export const useUserStore = defineStore('lang', () => {
  const user = reactive({})

  const logout = () => {}
  const modifyPass = () => {}

  return { user, logout, modifyPass }
})
