import { http } from '@/services/http'
import mockData from './mockData.js'

const MOCK_LOAD_TIME = 0

export default {
    getUserDetails ({ phone }, cb) {
        http.get(`/api/users?phone=${phone}`)
            .then(res => {
                console.log(res.data)
                cb(res.data)
            })
    },
    getContacts (cb) {
       setTimeout(() => {
           cb(mockData.contacts)
       }, MOCK_LOAD_TIME)
    },
    getResources (cb) {
        http.get('/api/users')
            .then(res => {
                cb(res.data)
            })
    //    setTimeout(() => {
    //        cb(mockData.resources)
    //    }, MOCK_LOAD_TIME)
    },
    getOffers (cb) {
        setTimeout(() => {
            cb(mockData.offers)
        }, MOCK_LOAD_TIME)
     }
}
