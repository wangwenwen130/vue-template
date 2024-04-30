export const HotelApi = {
  add: '/basic/p/base/add',
  del: '/basic/p/base/delete',
  list: '/basic/p/base/list',
  update: '/basic/p/base/update'
}

export const getHotelList = (
  data: Pick<Hotel.BaseInfo, 'groupId' | 'hotelName' | 'hotelId'> & PageReq
) => {
  return useRequest
    .post<PageRes<Hotel.BaseInfo>>({
      url: HotelApi.list,
      data
    })
    .then((res) => res.data)
}

export const addHotel = (data: Pick<Hotel.BaseInfo, 'hotelName' | 'i18Languages' | 'remark'>) => {
  return useRequest
    .post<Hotel.BaseInfo>({
      url: HotelApi.add,
      data
    })
    .then((res) => res.data)
}

export const delHotel = (data: Pick<Hotel.BaseInfo, 'id'>) => {
  return useRequest
    .post<{}>({
      url: HotelApi.del,
      data
    })
    .then((res) => res.data)
}

export const updateHotel = (data: Hotel.BaseInfo) => {
  return useRequest
    .post<Hotel.BaseInfo>({
      url: HotelApi.update,
      data
    })
    .then((res) => res.data)
}
