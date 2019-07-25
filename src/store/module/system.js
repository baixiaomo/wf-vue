export default {
  state: {
    appName: 'WXWP PLATFORM', // 应用名称
    menuRouteLoaded: false, // 菜单路由加载状态
    navTree: [] // 导航菜单树
  },
  getters: {},
  mutations: {
    setMenuRouteLoaded (state, flag) {
      state.menuRouteLoaded = flag
    },
    setNavTree (state, navTree) {
      state.navTree = navTree
    }
  },
  actions: {}
}
