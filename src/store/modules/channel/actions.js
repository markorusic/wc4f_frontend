import channelService from '@/services/channel'

export const actions = {
  loadAll ({ getters, commit }) {
    if (getters.loaded) {
      return null
    }
    commit('toggleLoading')
    channelService.getAll(
      channels => {
        commit('addChannels', channels)
        commit('toggleLoading')
        commit('setLoaded', true)
      },
      err => {
        console.log('Channels loading error')
        console.log(err)
        commit('toggleLoading')
      }
    )
  }
}
