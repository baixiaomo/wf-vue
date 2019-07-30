// main vuex
import Vuex from 'vuex'
import Vue from 'vue'
import system from './module/system'
import user from './module/user'
import tab from './module/tab'
import logger from './logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system: system,
    user: user,
    tab: tab
  },
  state: {
    test: '1'
  },
  mutations: {
    test (state, val) {
      state.test = val
    }
  },
  plugins: [logger]
})
