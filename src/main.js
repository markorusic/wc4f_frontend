// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './filters/index.js'

import 'animate.css'
import './assets/css/main.css'

import wLoader from '@/components/shared/wLoader'

Vue.component('w-loader', wLoader)

// register global functions
// Vue.mixin({
//   methods: {
//     serverPath: () => '/'
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
