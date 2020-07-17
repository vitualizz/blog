export const state = () => ({
  videos: [],
  repositories: []
})

export const mutations = {
  getVideos (state, data) {
    state.videos = data
  },
  getRepositories (state, data) {
    state.repositories = data
  }
}
