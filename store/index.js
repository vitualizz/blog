export const state = () => ({
  videos: [],
  repositories: [],
  location: {
    href: null,
    origin: null,
    path: null
  }
})

export const mutations = {
  getVideos (state, data) {
    state.videos = data
  },
  getRepositories (state, data) {
    state.repositories = data
  },
  getLocation (state, data) {
    data = new URL(data)
    state.location.href = data.href
    state.location.origin = data.origin
    state.location.path = data.pathname
  }
}
