export const HotelApi = {
  hotelList: ''
}

export const getHotelList = (data: {}) => {
  return useRequest.post({
    url: HotelApi.hotelList,
    data
  })
}
