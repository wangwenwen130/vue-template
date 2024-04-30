export const GroupApi = {
  add: '/basic/p/group/add',
  del: '/basic/p/group/delete',
  list: '/basic/p/group/list'
}

export const getGroupList = (data: PageReq) => {
  return useRequest
    .post<PageRes<Hotel.GroupInfo>>({
      url: GroupApi.list,
      data
    })
    .then((res) => res.data)
}

export const addGroup = (data: Pick<Hotel.GroupInfo, 'groupName'>) => {
  return useRequest
    .post<Hotel.GroupInfo>({
      url: GroupApi.add,
      data
    })
    .then((res) => res.data)
}

export const delGroup = (data: Pick<Hotel.GroupInfo, 'id'>) => {
  return useRequest
    .post<{}>({
      url: GroupApi.del,
      data
    })
    .then((res) => res.data)
}
