/**
 * axios 配置
 */
export default {
  baseUrl: process.env.BASE_URL,
  method: 'get',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 100000,
  responseType: 'json'
}
