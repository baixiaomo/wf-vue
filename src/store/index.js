// main vuex
import Vuex from 'vuex'
import Vue from 'vue'
import system from './module/system'
import logger from './logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system
  },
  plugins: [logger]
})
