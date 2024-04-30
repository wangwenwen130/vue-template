import dayjs from 'dayjs'
export { countDownDate, getDayStart, getDayEnd, dayPipe } from 'day-util'

export const format = (date: string | number | Date, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format)
}

export const dayJs = (time?: dayjs.Dayjs) => dayjs(time)
