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

// 登出
export const logout = () => {
  return axios({
    url: '/logout',
    method: 'get'
  })
}
