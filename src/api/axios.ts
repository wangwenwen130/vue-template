import axios from 'axios'
import type {
  AxiosInstance as Instance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults
} from 'axios'

const options: CreateAxiosDefaults = {
  baseURL: 'http://127.0.0.1:9091/',
  timeout: 30000,
  withCredentials: true
}

interface AxiosInstance extends Instance {
  (config: AxiosRequestConfig): Promise<ReqRes<any>>
  (url: string, config?: AxiosRequestConfig): Promise<ReqRes<any>>
}

const service = axios.create(options) as AxiosInstance
service.interceptors.request.use((config) => {
  const isDev = import.meta.env.MODE === 'development'
  config.baseURL = isDev ? 'http://192.168.2.114:9091/' : options.baseURL
  if (config.headers) {
    config.headers['Accept-Language'] = 'zh-cn'
  }
  return config
})

service.interceptors.response.use((res: AxiosResponse<ReqRes<any>>) => {
  const code = res.data.code
  if (code !== 0) return Promise.reject(res.data)
  return res
})

type ResPonse<T> = AxiosResponse<ReqRes<T>>

export const post = <T = unknown>(data: ReqParams) => {
  return service.post<ResPonse<T>>(data.url, data.data, data.config)
}

export const get = <T = unknown>(data: ReqParams) => {
  return service.get<ResPonse<T>>(data.url, data.config)
}

export default service
