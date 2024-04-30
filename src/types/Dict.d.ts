declare module Dict {
  export type Options = {
    label: string
    value: string
  }
  export type Dict = {
    control: string
    controlData: string
    label: string
    name: string
    placeholder: string
    required: boolean
    optionValues: string
  } & Recordable

  export type DictRender = Dict & { controlData: Options[] }

  export type DictCollection = {
    code: string
    dictTypeCode: string
    id: number
    value: string
    extendedFields: Dict[]
    typeFieldData: DictVal[]
  } & Recordable

  export type DictValCol = {
    code: string
    name: string
    extInfo: DictVal[]
  }

  export type DictVal = {
    label: string
    name: string
    value: string
  }
}
