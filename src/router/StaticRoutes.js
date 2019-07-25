/**
 *  静态路由配置模块
 */
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/Login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/home')
  },
  {
    path: '/',
    redirect: '/home'
  }
]
