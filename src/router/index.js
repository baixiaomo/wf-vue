import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
// 引入静态路由和动态路由模块
import staticRoutes from './StaticRoutes'
import DynamicRoutes from './DynamicRoutes'

Vue.use(Router)

// 声明router对象，并将静态路由注入
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: staticRoutes
})

router.beforeEach((to, from, next) => {
  // 判断用户是否登录
  let token = Cookies.get('token')
  // let userName = sessionStorage.getItem('user')
  DynamicRoutes()
  if (to.name === 'login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (token) {
      next({ path: '/home' })
    } else {
      next()
    }
  } else {
    if (!token) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: '/login' })
    } else {
      // 加载动态菜单和路由
      // addDynamicMenuAndRoutes(userName, to, from)
      next()
    }
  }
})

export default router
