import store from '../store'
import api from '../http/api'
/**
 * 动态路由配置模块
 */
export default (userName, to, from) => {
  // 判断动态路由是否已经加载
  if (store.state.system.menuRouteLoaded) {
    console.log('动态路由已加载')
    return
  }
  api.login.login()
  // 调用接口查询该用户的路由树和操作权限集合
  api.menu.findNavTree({'userName': userName})
    .then(res => {
      // 动态添加路由
      console.log(res)
    })
}
