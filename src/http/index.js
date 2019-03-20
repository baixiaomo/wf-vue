/**
 * 将API绑定到VUE原型上面
 */
import api from './api'

const install = Vue => {
  if (install.installed) {
    console.log('接口组件已绑定...')
  } else {
    install.installed = true
    Object.defineProperties(Vue.prototype, {
      $api: {
        get () {
          return api
        }
      }
    })
  }
}

export default install
