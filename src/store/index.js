import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'will code 4 food'
  },
  getters: {
    msg: state => state.msg
  },

  modules: {
    user
  }
})
