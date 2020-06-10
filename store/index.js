export const state = () => ({
  videos: []
})

export const mutations = {
  getVideos (state, data) {
    state.videos = data
  }
}
