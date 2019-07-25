// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(api)

// 开发环境是否启用mock
let openMock = true
if (process.env.NODE_ENV === 'development' && openMock) {
  console.log('开启mock')
  require('./mock')
}

// 路由全局钩子
router.beforeEach((to, from, next) => {
  console.log(to, from)
  // 可以配置全局路由拦截
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
