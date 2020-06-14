<template lang='pug'>
  div
    Menu
    nuxt
    Footer
</template>

<script>
export default {
  created () {
    this.getRepositories()
  },
  methods: {
    async getRepositories () {
      await this.$axios.$get('/repositories')
        .then((res) => {
          this.$store.commit('getRepositories', res)
        })
    }
  }
}
</script>
