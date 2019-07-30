import store from '../store'
import api from '../http/api'
/**
 * 动态路由配置模块
 */
export default (router, userName, to, from) => {
  // 判断动态路由是否已经加载
  if (store.state.system.menuRouteLoaded) {
    console.log('动态路由已加载')
    return
  }
  // 调用接口查询该用户的路由树和操作权限集合
  api.menu.findNavTree({'userName': userName})
    .then(res => {
      // 动态添加路由
      console.log('routes->', res.data)
      let dynamicRoutes = createDynamicRoutes(res.data)
      addDynamicRoutes(router, dynamicRoutes)
      // 记录记载状态和菜单树
      store.commit('setMenuRouteLoaded', true)
      store.commit('setNavTree', res.data)
    }).then(res => {
      api.user.findPermissions({'userName': userName}).then(res => {
        store.commit('setPermission', res.data)
      })
    })
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function createDynamicRoutes (menuList = [], routes = []) {
  var temp = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '')
      // 创建路由配置
      var route = {
        path: menuList[i].url,
        component: null,
        name: menuList[i].name,
        meta: {
          icon: menuList[i].icon,
          index: menuList[i].id
        }
      }
      try {
        // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
        // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
        let array = menuList[i].url.split('/')
        let url = ''
        for (let i = 0; i < array.length; i++) {
          url += array[i].substring(0, 1).toUpperCase() + array[i].substring(1) + '/'
        }
        url = url.substring(0, url.length - 1)
        route['component'] = resolve => require([`@/views/${url}`], resolve)
      } catch (e) {}
      // }
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    createDynamicRoutes(temp, routes)
  } else {
    console.log('动态路由加载...')
    console.log(routes)
    console.log('动态路由加载完成.')
  }
  return routes
}

function addDynamicRoutes (router, dynamicRoutes) {
  router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
  router.addRoutes(router.options.routes)
  console.log('router-》', router)
}
