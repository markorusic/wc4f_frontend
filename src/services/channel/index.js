import { http } from '@/services/http'

export default {
  getAll (cb, errorCb) {
    http.get('/channel')
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  },

  getById (channelId, cb, errorCb) {
    http.get('/channel/' + channelId)
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  }
}
