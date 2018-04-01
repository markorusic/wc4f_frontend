import _ from 'lodash'

export const mutations = {
    setUser (state, user) {
        state.user = {
            ...state.user,
            ...user
        }
    },
    addContacts (state, contacts) {
      state.contacts = _.uniqBy([...state.contacts, ...contacts], 'id')
    },
    addResources (state, resources) {
        state.resources = _.uniqBy([...state.resources, ...resources], 'id')
    },
    addOffers (state, offers) {
        state.offers = _.uniqBy([...state.offers, ...offers], 'id')
    },
    toggleContactsLoading (state) {
        state.contactsLoading = !state.contactsLoading
    },
    toggleResourcesLoading (state) {
        state.resourcesLoading = !state.resourcesLoading
    },
    toggleOffersLoading (state) {
        state.offersLoading = !state.offersLoading
    }
}
  