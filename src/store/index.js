// main vuex
import Vuex from 'vuex'
import Vue from 'vue'
import {state} from './state'
import {mutations} from './mutation'
import {getters} from './getter'
import {actions} from './action'
import {moduleA} from './module/moduleA'
import logger from './logger'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    moduleA
  },
  plugins: [logger]
})
