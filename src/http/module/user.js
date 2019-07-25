import axios from '../axios'

export const save = data => {
  return axios({
    method: 'post',
    url: '/saveUser',
    data
  })
}

export const get = data => {
  return axios({
    method: 'get',
    url: '/getUserById',
    data
  })
}
// 查找用户的菜单权限标识集合
export const findPermissions = (params) => {
  return axios({
    url: '/user/findPermissions',
    method: 'get',
    params
  })
}
