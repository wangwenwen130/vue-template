import type { AxiosInstance, ResPonse, ReqConfig } from './axios'

const commonHeader = (config: ReqConfig) => {
  if (config.headers) {
    config.headers['amp-user-lang'] = 'zh-cn'
    config.headers['biz-timestamp'] = Date.now() + ''
    config.headers['os-version'] = appVersion
  }
  return config
}

const commonRes = (res: ResPonse) => {
  const code = res.data.code
  if (code !== 0) throw res
  return res
}

export const reqHandles: ((config: ReqConfig) => ReqConfig)[] = [commonHeader]
export const resHandles: ((res: ResPonse) => ResPonse)[] = [commonRes]

export const setHandle = (service: AxiosInstance) => {
  reqHandles.forEach((handle) => {
    service.interceptors.request.use(handle)
  })
  resHandles.forEach((handle) => {
    service.interceptors.response.use(handle)
  })
}
