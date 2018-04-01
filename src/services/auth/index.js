import {http} from '@/services/http'
// import store from '@/store'

const AUTH_TOKEN = 'auth_token'
const AUTH_TOKEN_EXPIRATION= 'auth_token_expiration'
const TOKEN_LENGTH = 60 * 60 * 2 * 1000

export default {
    setToken(token, expiration) {
        localStorage.setItem(AUTH_TOKEN, token)
        localStorage.setItem(AUTH_TOKEN_EXPIRATION, expiration)
    },    
    getToken() {
        const token = localStorage.getItem(AUTH_TOKEN)
        const expiration = localStorage.getItem(AUTH_TOKEN_EXPIRATION)        
        if (!token || !expiration) {
            return null
        }        
        if (Date.now() > new Date(localStorage.getItem(AUTH_TOKEN_EXPIRATION)).getTime()) {
            this.destroyToken()
            return null
        }        
        return token
    },    
    destroyToken () {
        localStorage.removeItem(AUTH_TOKEN)
        localStorage.removeItem(AUTH_TOKEN_EXPIRATION)
    },    
    isAuthenticated () {
        return this.getToken() !== null
    },
    isAdmin () {
        return false
    },
    authenticate ({phone, password}, cb, errorCb) {
        http.post('/api/auth/login', {phone, password})
        .then(res => {
            this.setToken(res.data.access_token, new Date(new Date().getTime() + TOKEN_LENGTH))
            http.setAuthHeader(this.getToken())
            console.log(res)
            if (cb) {
                cb(this.getToken())
            }
        })
        .catch(err => {
            console.log(err)
            if (errorCb) {
                errorCb(err)
            }
        })
    }
}
