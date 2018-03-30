import Vue from 'vue'

Vue.filter('ucFirst', str => str ? str.charAt(0).toUpperCase() + str.slice(1) : '')
Vue.filter('uc', str => str ? str.toUpperCase() : '')
Vue.filter('limitChars', (str, maxChars) => {
  if (str) {
    let slicedStr = str.slice(0, maxChars)
    if (str.length > slicedStr.length) {
      slicedStr += '...'
    }
    return slicedStr
  }
  return ''
})
Vue.filter('limitWords', (str, maxWords) => {
  if (str) {
    let slicedStr = str.split(' ').slice(0, maxWords).join(' ')
    if (str.length > slicedStr.length) {
      slicedStr += '...'
    }
    return slicedStr
  }
  return ''
})
