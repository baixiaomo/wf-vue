export default {
  state: {
    appName: 'WXWP PLATFORM', // 应用名称
    collapse: false, // 导航栏收缩状态
    themeColor: '#14889A', // 主题颜色
    oldThemeColor: '#14889A', // 上一次主题颜色
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
