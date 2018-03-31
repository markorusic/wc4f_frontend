// import { http } from '@/services/http'
import mockData from './mockData.js'

const MOCK_LOAD_TIME = 1500

export default {
    getContacts (cb) {
       setTimeout(() => {
           cb(mockData.contacts)
       }, MOCK_LOAD_TIME)
    },
    getResources (cb) {
       setTimeout(() => {
           cb(mockData.resources)
       }, MOCK_LOAD_TIME)
    },
    getOffers (cb) {
        setTimeout(() => {
            cb(mockData.offers)
        }, MOCK_LOAD_TIME)
     }
}
