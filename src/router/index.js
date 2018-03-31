import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
import UserHome from '@/components/user/pages/Home'
import UserProfile from '@/components/user/pages/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-user',
      component: UserHome
    },
    {
      path: '/profile',
      name: 'user-profile',
      component: UserProfile
    }
  ]
})
