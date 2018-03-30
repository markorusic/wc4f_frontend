import epgService from '@/services/epg'

export const actions = {
  loadEpgProposalsPreview ({ commit }) {
    commit('toggleEpgProposalLoading')
    epgService.proposal.getPreviews(
      proposalPreviews => {
        commit('toggleEpgProposalLoading')
        commit('addEpgProposals', proposalPreviews)
      },
      err => {
        console.log(err)
      }
    )
  },
  loadEpgProposal ({ commit }, { epgProposalId }) {
    epgService.proposal.getById(
      epgProposalId,
      epgPorposal => {
        commit('addFullEpgProposal', epgPorposal)
      },
      err => {
        console.log('epg proposal action err')
        console.log(err)
      }
    )
  },
  deleteEpgProposal ({ commit }, epgProposal) {
    epgService.proposal.delete(
      epgProposal.id,
      flag => {
        console.log(flag)
        commit('removeEpgProposal', epgProposal)
      },
      err => {
        console.log('error deleting epg proposal')
        console.log(err)
      }
    )
  }
}
