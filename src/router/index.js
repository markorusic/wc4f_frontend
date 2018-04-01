import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
import UserHome from '@/components/user/pages/Home'
import UserProfile from '@/components/user/pages/Profile'
import LandingPage from '@/components/LandingPage'
import UserPackages from '@/components/user/Packages'
import authMiddleware from './middlewares/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/profil',
      name: 'user-profile',
      component: UserHome,
      beforeEnter: authMiddleware.auth
    },
    {
      path: '/paketi',
      name: 'user-recommendation-packages',
      component: UserPackages,
      beforeEnter: authMiddleware.auth
    }
  ]
})
