/**
 * 使用promise进行异步封装
 */
import axios from 'axios'
import config from './config'
// options 为api入参
export default function $axios (options) {
  return new Promise((resolve, reject) => {
    // 创建 axios对象，并设置拦截器
    const instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout
    })
    // 请求拦截器配置
    instance.interceptors.request.use(
      request => {
        // 这里可以进行token等权限判断
        return request
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截器配置
    instance.interceptors.response.use(
      response => {
        // 这里可以根据返回的状态码进行个性化处理 如200，404,500
        /* if (response.status === '200') {
          return response.data
        } */
        return response.data
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 处理请求
    instance(options).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
