import { get, post, type ReqParams, type ResPonse } from './axios'

export const useRequest = <T>(data: ReqParams) => {
  const { method: fun, data: params } = data
  const method = fun || 'POST'

  const setJson = () => {
    data.config = data.config || {}
    data.config.headers = {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

  const setAbort = () => {
    data.config = data.config || {}
    data.config.headers = {
      // @ts-ignore
      signal: controller.signal
    }
  }

  const controller = new AbortController()
  const getResult = () => {
    setAbort()
    if (method === 'POST') {
      if (params && isObject(params)) {
        setJson()
        return post<ResPonse<T>>(data)
      } else return post<ResPonse<T>>(data)
    } else if (method === 'GET') {
      return get<ResPonse<T>>(data)
    } else {
      return Promise.reject('请求方式暂不支持')
    }
  }

  onUnmounted &&
    onUnmounted(() => {
      controller.abort()
    })

  return {
    result: getResult(),
    cancel: () => {
      controller.abort()
    }
  }
}

useRequest.post = <T>(data: Omit<ReqParams, 'method'>) => {
  return useRequest<T>({ ...data, method: 'POST' })
}
useRequest.get = <T>(data: Omit<ReqParams, 'method' | 'data'>) => {
  return useRequest<T>({ ...data, method: 'GET' })
}
