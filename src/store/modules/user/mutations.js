export const mutations = {
    addContacts (state, contacts) {
      state.contacts = [...state.contacts, ...contacts]
    },
    addResources (state, resources) {
        state.resources = [...state.resources, ...resources]
    },
    toggleContactsLoading (state) {
        state.contactsLoading = !state.contactsLoading
    },
    toggleResourcesLoading (state) {
        state.resourcesLoading = !state.resourcesLoading
    }
}
  