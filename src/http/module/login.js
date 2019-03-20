/**
 * 登陆模块接口
 */
import axios from '../axios'

export const login = data => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}

export const logout = data => {
  return axios({
    method: 'post',
    url: '/logout',
    data
  })
}
