import http from '@/services/http'

const AUTH_TOKEN = 'auth_token'
const AUTH_TOKEN_EXPIRATION= 'auth_token_expiration'
const TOKEN_LENGTH = 60 * 60 * 24 * 1000

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
    destroyToken() {
        localStorage.removeItem(AUTH_TOKEN)
        localStorage.removeItem(AUTH_TOKEN_EXPIRATION)
    },    
    isAuthenticated() {
        return this.getToken() !== null
    },
    authenticate({email, password}, cb, errorCb) {
        http.post('/authorization/login', {email, password})
        .then(res => {
            this.setToken(res.data.token, new Date(new Date().getTime() + TOKEN_LENGTH))
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
