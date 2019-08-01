export default {
  state: {
    appName: 'WF-VUE PLATFORM', // 应用名称
    collapse: false, // 导航栏收缩状态
    themeColor: '#007cb6', // 主题颜色
    oldThemeColor: '#14889A', // 上一次主题颜色
    menuRouteLoaded: false, // 菜单路由加载状态
    navTree: [] // 导航菜单树
  },
  getters: {},
  mutations: {
    onCollapse (state) { // 改变收缩状态
      state.collapse = !state.collapse
    },
    setMenuRouteLoaded (state, flag) {
      state.menuRouteLoaded = flag
    },
    setNavTree (state, navTree) {
      state.navTree = navTree
    },
    setThemeColor (state, themeColor) { // 改变主题颜色
      state.oldThemeColor = state.themeColor
      state.themeColor = themeColor
    }
  },
  actions: {}
}
