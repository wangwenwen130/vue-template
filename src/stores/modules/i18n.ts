import { defineStore } from 'pinia'
import { zhCn, en } from 'element-plus/es/locale/index'

const languages = {
  'zh-CN': zhCn, 
  en
}
type I18n = keyof typeof languages 
export const useLangStore = defineStore('lang', () => {
  const language = ref<I18n>('zh-CN')

  const lang = computed({
    get: () => {
      return language.value
    },
    set:(val) => {
      language.value = val
    }
  })

  const eleI18n = computed(() => languages[language.value])
  return { lang, eleI18n }
})
