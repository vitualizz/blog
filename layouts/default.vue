<template lang='pug'>
  div
    Menu
    nuxt
    no-ssr
      FloatButton
    Footer
</template>

<script>
export default {
  created () {
    if (this.$nuxt.$colorMode.preference === 'system') {
      this.$nuxt.$colorMode.preference = 'sepia'
    }
  },
  mounted () {
    if (process.env.NODE_ENV === 'production') {
      this.getRepositories()
      this.getVideos()
    }
  },
  methods: {
    async getRepositories () {
      await this.$axios.$get('/repositories')
        .then((res) => {
          this.$store.commit('getRepositories', res)
        })
    },
    async getVideos () {
      await this.$axios.$get('/videos')
        .then((res) => {
          this.$store.commit('getVideos', res.items)
        })
    }
  }
}
</script>
