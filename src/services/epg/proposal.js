import { http } from '@/services/http'

export default {
  create (file, channelId, cb, errorCb) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('channelId', channelId)
    http.post('/ingest/csv',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  },
  getPreviews (cb, errorCb) {
    http.get('/proposal/epg')
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  },
  getById (proposalId, cb, errorCb) {
    http.get(`/proposal/epg/${proposalId}`)
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  },
  delete (proposalId, cb, errorCb) {
    http.delete(`/proposal/epg/${proposalId}`)
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  },
  lock (proposalId, cb, errorCb) {
    http.get(`/proposal/epg/${proposalId}/lock`)
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  },
  unlock (proposalId, cb, errorCb) {
    http.get(`/proposal/epg/${proposalId}/unlock`)
      .then(res => cb(res.data))
      .catch(err => errorCb(err))
  }
}
