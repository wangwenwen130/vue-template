declare module Hotel {
  export interface BaseInfo extends CreateInfo, UpdateInfo {
    deleted: number
    groupId: number
    hotelName: string
    i18Languages: string[]
    i18nAddress: I18nLang
    i18nName: I18nLang
    id: number
    hotelId?: number
    logoPath: string
    operateStatus: 0 | 1 | 2 // 0，未运营、1，已运营、2，停运
    operateTime: number
    pmsId: number
    pmsName: string
    remark: string
  }

  export interface GroupInfo extends CreateInfo, UpdateInfo {
    id: number
    idx: number
    name: string
    groupName?: string
    parentId: number
  }
}
