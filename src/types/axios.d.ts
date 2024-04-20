type ReqRes<T> = {
  code: number
  data: T
  msg: string
}

type HWareReqRes<T> = {
  id: string
  type: 'rsp'
  action: number
  result: 0 | 1 //0:成功 1:失败
  msg: string //提示信息
  data: T
}

interface ReqParams<K = unknown> {
  url: string
  data?: any
  config?: AxiosRequestConfig<K> | undefined
}
