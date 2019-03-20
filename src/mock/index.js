import Mock from 'mockjs'
import * as user from './module/user'
import * as login from './module/login'
const modules = [user, login]

Mock.setup({
  timeout: '200-600'
})

const baseUrl = process.env.BASE_URL
for (let module of modules) {
  for (let key in module) {
    Mock.mock(baseUrl + module[key].url, module[key].type, (opt) => {
      // opt['data'] = opt.body ? JSON.parse(opt.body) : null
      console.log('\n')
      console.log('%cmock拦截, 请求: ', 'color:blue', opt)
      console.log('%cmock拦截, 响应: ', 'color:blue', module[key].data)
      return module[key].data
    })
  }
}
