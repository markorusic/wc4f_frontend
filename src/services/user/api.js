import { http } from '@/services/http'

export default {
    getContacts (cb) {
       setTimeout(() => {
           cb(
            [
                {
                    id: 1,
                    name: "John Doe"
                },
                {
                    id: 2,
                    name: "Dragana Mirkovic"
                },
                {
                    id: 3,
                    name: "John Doee"
                }
            ]
        )
       }, 1000) 
    },
    getResources (cb) {
       setTimeout(() => {
           cb(
            [
                {
                    id: 1,
                    amount: 90,
                    unit: 'minute',
                    displayValue: 'minuta'
                },
                {
                    id: 2,
                    amount: 200,
                    unit: 'sms',
                    displayValue: 'sms'
                },
                {
                    id: 3,
                    amount: 56,
                    unit: 'net',
                    displayValue: 'mb'
                }
            ]
           )
       }, 1000) 
    }
}
