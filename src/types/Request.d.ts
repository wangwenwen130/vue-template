declare module Request {
  export interface ReqRes<T> {
    code: number
    data: T
    msg: string
  }

  export interface HWareReqRes<T> {
    id: string
    type: 'rsp'
    action: number
    result: 0 | 1 //0:成功 1:失败
    msg: string //提示信息
    data: T
  }

  export interface ReqParams<K = unknown, D = any> {
    url: string
    methods?: 'POST' | 'GET' // value 'POST'
    data?: K
    config?: D
  }

  export interface Page<T> {
    data: T[]
    page?: number
    pageSize?: number
    totalCount?: number
    totalPage?: number
  }
}
