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
