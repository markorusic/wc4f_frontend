import userService from '@/services/user'

export const actions = {
    loadContacts ({ commit }) {
        commit('toggleContactsLoading')
        userService.api.getContacts(
            contacts => {
                commit('addContacts', contacts)
                commit('toggleContactsLoading')
            }
        )
    },
    loadResources ({ commit }) {
        commit('toggleResourcesLoading')
        userService.api.getResources(
            resources => {
                commit('addResources', resources)
                commit('toggleResourcesLoading')
            }
        )
    }
}