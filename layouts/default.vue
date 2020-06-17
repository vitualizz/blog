<template lang='pug'>
  div
    Menu
    nuxt
    FloatButton
    Footer
</template>

<script>
export default {
  watch: {
    $route () {
      this.getLocation()
    }
  },
  created () {
    this.getRepositories()
    this.getVideos()
  },
  mounted () {
    this.getLocation()
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
    },
    getLocation () {
      this.$store.commit('getLocation', location.href)
    }
  }
}
</script>
