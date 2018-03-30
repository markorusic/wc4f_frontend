import Vue from 'vue'
import moment from 'moment'

// use local langulage
moment.locale('sr')

Vue.filter('date', value => {
  return value ? moment(value).format('dddd, D.M. u HH:mm') : ''
})

Vue.filter('day', value => {
  return value ? moment(value).format('dddd') : ''
})
