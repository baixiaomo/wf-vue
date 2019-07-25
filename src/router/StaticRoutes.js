/**
 *  静态路由配置模块
 */
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/home'),
    children: [] // 此处为动态路由加载节点，别动
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/Login')
  }
]
