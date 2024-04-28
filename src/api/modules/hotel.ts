export const HotelApi = {
  hotelList: ''
}

export const getHotelList = (data: {}) => {
  return useRequest({
    url: HotelApi.hotelList,
    method: 'POST',
    data
  })
}
