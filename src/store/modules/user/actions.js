import userService from '@/services/user'

const shouldLoad = items => items.length === 0

export const actions = {
    loadUser ({ commit, getters }) {
        if(getters.user !== null) {
            return null
        }
        userService.api.getUserDetails(
            { phone: getters.getUser.phone },
            user => {
                commit('setUser', user)
            }
        )
    },
    loadContacts ({ commit, getters }) {
        if (!shouldLoad(getters.getContacts)) {
            return null
        }
        commit('toggleContactsLoading')
        userService.api.getContacts(
            contacts => {
                commit('addContacts', contacts)
                commit('toggleContactsLoading')
            }
        )
    },
    loadResources ({ commit, getters }) {
        if (!shouldLoad(getters.getResources)) {
            return null
        }
        commit('toggleResourcesLoading')
        userService.api.getResources(
            resources => {
                commit('addResources', resources)
                commit('toggleResourcesLoading')
            }
        )
    },
    loadOffers ({ commit, getters }) {
        if (!shouldLoad(getters.getOffers)) {
            return null
        }
        commit('toggleOffersLoading')
        userService.api.getOffers(
            offers => {
                commit('addOffers', offers)
                commit('toggleOffersLoading')
            }
        )
    }
}