import axios from 'axios'

let http = {
  ...axios.create({
    baseURL: 'http://localhost:8088/'
  }),
  setAuthHeader (token = '') {
    if (!token) {
      token = ''
    }
    this.defaults.headers.common['X-AUTH-TOKEN'] = token
  }
}

http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
http.setAuthHeader(window.localStorage.getItem('auth_token'))

export { http }
