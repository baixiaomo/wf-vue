/**
 *  静态路由配置模块
 */
export default [
  {
    path: '/',
    name: '主页',
    component: () => import('../views/Home'),
    children: [] // 此处为动态路由加载节点，别动
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  }
]
