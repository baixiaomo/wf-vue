// main vuex
import Vuex from 'vuex'
import Vue from 'vue'
import system from './module/system'
import user from './module/user'
import logger from './logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system: system,
    user: user
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
