import Vue from 'vue'
import Vuex from 'vuex'
import channel from './modules/channel'
import proposal from './modules/proposal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'will code 4 food'
  },
  getters: {
    msg: state => state.msg
  },

  modules: {
    channel,
    proposal
  }
})
