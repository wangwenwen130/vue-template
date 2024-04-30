export const SysApi = {
  login: '/sys/p/login/password',
  upload: '/sys/p/file/minio/policy'
}

// 系统登录
export const getLogin = (
  data: System.LoginReq
) => {
  return useRequest
    .post<System.UserInfo>({
      url: SysApi.login,
      data
    })
    .then((res) => res.data.data)
}


// 文件直传

export const getMinioAuth = (data: {
  objectName: string
}) => {
  return useRequest.post<System.MinioAuth>({
    url: SysApi.upload,
    data
  }).then((res)=> res.data)
}
