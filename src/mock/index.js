import Mock from 'mockjs'
import * as user from './module/user'
import * as login from './module/login'
import * as menu from './module/menu'
import * as role from './module/role'
const modules = [user, login, menu, role]

Mock.setup({
  timeout: '200-600'
})

const baseUrl = process.env.BASE_URL
for (let module of modules) {
  for (let key in module) {
    let url = baseUrl + module[key].url
    Mock.mock(new RegExp(url), module[key].type, (opt) => {
      opt['data'] = opt.body ? JSON.parse(opt.body) : null
      console.log('\n')
      console.log('%cmock拦截, 请求: ', 'color:blue', opt)
      console.log('%cmock拦截, 响应: ', 'color:blue', module[key].data)
      return Mock.mock(module[key].data)
    })
  }
}
