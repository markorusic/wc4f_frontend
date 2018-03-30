export const mutations = {
  addEpgProposals (state, proposals) {
    const copyProposals = [...state.epgProposals]
    state.epgProposals = proposals.map(proposal => {
      const localProposal = copyProposals.find(pr => pr.id === proposal.id)
      if (localProposal) {
        return localProposal
      }
      return proposal
    })
  },
  addFullEpgProposal (state, epgProposal) {
    let isUpdated = false
    state.epgProposals = state.epgProposals
      .map(proposal => {
        if (proposal.id === epgProposal.id) {
          isUpdated = true
          return epgProposal
        }
        return proposal
      })
    if (!isUpdated) {
      state.epgProposals.push(epgProposal)
    }
  },
  removeEpgProposal (state, epgProposal) {
    state.epgProposals = state.epgProposals
      .filter(proposal => proposal.id !== epgProposal.id)
  },
  addContentProposal (state, proposal) {
    state.contentProposals.push(proposal)
  },
  toggleEpgProposalLoading (state) {
    state.loadingEpgProposals = !state.loadingEpgProposals
  },
  toggleContentProposalLoading (state) {
    state.loadingContentProposals = !state.loadingContentProposals
  }
}
