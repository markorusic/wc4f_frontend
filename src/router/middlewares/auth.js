import authService from '@/services/auth'

const redirectHome = (next) => {
    next({
        name: 'home'
    })
}

export default {
    auth (to, from, next) {
        if (authService.isAuthenticated()) {
            next()
        }
        else {
            redirectHome(next)
        }
    },
    adminAuth (to, from, next) {
        if (authService.isAuthenticated() && authService.isAdmin()) {
            next()
        }
        else {
            redirectHome(next)
        }
    }
}