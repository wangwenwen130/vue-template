declare module System {
  export type LoginReq = {
    password: string
    username: string
  }

  export interface UserInfo {
    hotelUserType: number
    loginName: string
    nickName: string
    userId: number
    userType: number
    webToken: string
    webTokenExpiry: number
  }

  export interface MinioAuth {
    bucket: string
    'x-amz-date': string
    accessKey: string
    'x-amz-signature': string
    host: string
    'x-amz-algorithm': string
    'x-amz-credential': string
    policy: string
  }
}
