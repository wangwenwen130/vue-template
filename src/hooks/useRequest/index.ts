import service, {
  get,
  post,
  type ReqParams,
  type ResPonse,
  type RequestConfig,
  type Retry
} from './axios'

export const useRequest = <T>(data: ReqParams, autoAbort = false) => {
  const { method: fun, data: params } = data
  const method = fun || 'POST'

  // TODO 失败尝试请求
  // if (data.retry) {
  //   data.retry.count = data.retry.count ?? 3
  //   data.retry.delay = data.retry.delay ?? 1000
  //   data.config = data.config || {}
  //   ;(data.config as RequestConfig).retry = data.retry
  // }

  // const reTry = () => {}

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
        return post<T>(data)
      } else return post<T>(data)
    } else if (method === 'GET') {
      return get<T>(data)
    } else {
      return Promise.reject('请求方式暂不支持')
    }
  }

  if (autoAbort) {
    // 防止接口 频繁调用增加内存
    onUnmounted &&
      onUnmounted(() => {
        controller.abort()
      })
  }

  const result = getResult()
  return {
    result,
    cancel: () => controller.abort(),
    then: <K = any>(fn: (value: ResPonse<T>) => K | PromiseLike<K>) => {
      return result.then<K>(fn)
    },
    catch: <K = any>(err: any) => {
      return result.catch<K>(err)
    }
  }
}

useRequest.post = <T>(data: Omit<ReqParams, 'method'>) => {
  return useRequest<T>({ ...data, method: 'POST' })
}
useRequest.get = <T>(data: Omit<ReqParams, 'method' | 'data'>) => {
  return useRequest<T>({ ...data, method: 'GET' })
}
