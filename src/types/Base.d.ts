declare interface CreateInfo {
  createBy: string
  createTime: number
}
declare interface UpdateInfo {
  updateBy: string
  updateTime: number
}

declare interface I18nLang {
  en_US: string
  ja_JP: string
  zh_CN: string
}

declare interface PageReq {
  orders?: { asc: boolean; column: string }[]
  page: number
  pageSize: number
}

declare interface PageRes<T> {
  data: T[]
  page: number
  pageSize: number
  totalCount: number
  totalPage: number
}

declare interface DialogControl {
  visible: boolean
  title?: string
  width?: string
  data?: T
  onClose?: () => void
}
