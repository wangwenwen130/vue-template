import { version } from '../../../package.json'

export const isDev = import.meta.env.DEV

export const isProd = import.meta.env.PROD

export const appVersion = version
