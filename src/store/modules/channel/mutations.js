export const mutations = {
  addChannels (state, channels) {
    state.items = [...state.items, ...channels]
  },
  toggleLoading (state) {
    state.loading = !state.loading
  },
  setLoaded (state, flag) {
    state.loaded = flag
  }
}
