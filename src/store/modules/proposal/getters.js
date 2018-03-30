export const getters = {
  getEpgProposals: state => state.epgProposals,
  getContentProposals: state => state.contentProposals,
  loadingEpgProposals: state => state.loadingEpgProposals,
  loadingContentProposals: state => state.loadingContentProposals,
  getEpgProposalById: state =>
    epgProposalId =>
      state.epgProposals
        .find(proposal => proposal.id === epgProposalId)
}
