import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
import UserHome from '@/components/user/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-user',
      component: UserHome
    }
  ]
})
