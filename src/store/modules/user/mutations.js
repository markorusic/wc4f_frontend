import _ from 'lodash'

export const mutations = {
    addContacts (state, contacts) {
      state.contacts = _.uniqBy([...state.contacts, ...contacts], 'id')
    },
    addResources (state, resources) {
        state.resources = _.uniqBy([...state.resources, ...resources], 'id')
    },
    toggleContactsLoading (state) {
        state.contactsLoading = !state.contactsLoading
    },
    toggleResourcesLoading (state) {
        state.resourcesLoading = !state.resourcesLoading
    }
}
  