import axios from 'axios'

const http = {
  ...axios.create({
    baseURL: 'https://draganamirkovic.herokuapp.com'
    // baseURL: 'http://192.168.43.220:3000/'
  }),
  setAuthHeader (token = '') {
    if (!token) {
      token = ''
    }
    this.defaults.headers.common['AUTHORIZATION'] = `BARER ${token}`
  }
}

http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
http.setAuthHeader(window.localStorage.getItem('auth_token'))

export { http }
