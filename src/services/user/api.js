import { http } from '@/services/http'

const MOCK_LOAD_TIME = 1500

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
       }, MOCK_LOAD_TIME) 
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
                },
                {
                    id: 3,
                    amount: 516,
                    unit: 'net',
                    displayValue: 'mb'
                }
            ]
           )
       }, MOCK_LOAD_TIME) 
    }
}
