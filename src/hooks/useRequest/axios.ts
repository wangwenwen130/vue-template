import axios from 'axios'
import type {
  AxiosInstance as Instance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'
import { setHandle } from './handle'

export type ReqConfig<T = any> = InternalAxiosRequestConfig<T>
export type ResPonse<T = any> = AxiosResponse<Request.ReqRes<T>>
export type ReqParams<T = any> = Request.ReqParams<T, AxiosRequestConfig>

export interface AxiosInstance extends Instance {
  (config: AxiosRequestConfig): Promise<Request.ReqRes<any>>
  (url: string, config?: AxiosRequestConfig): Promise<Request.ReqRes<any>>
}

const options: CreateAxiosDefaults = {
  baseURL: 'http://127.0.0.1:9091/',
  timeout: 30000,
  withCredentials: true
}
const service = axios.create(options) as AxiosInstance

setHandle(service)

export const post = <T = unknown, K = any>(data: ReqParams<K>) => {
  return service.post<ResPonse<T>>(data.url, data.data, data.config)
}

export const get = <T = unknown, K = any>(data: ReqParams<K>) => {
  return service.get<ResPonse<T>>(data.url, data.config)
}

export default service
