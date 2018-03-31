import userService from '@/services/user'

const shouldLoad = items => items.length === 0

export const actions = {
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
    }
}