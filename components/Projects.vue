<template lang='pug'>
  .columns.is-multiline.is-mobile.is-vcentered
    .column.is-3-desktop.is-12-mobile.is-6-tablet.is-3-widescreen.is-3-fullhd(
      v-for='repo in repositories'
    )
      a(
        target='_blank'
        :href='repo.html_url'
      )
        .card
          .card-content
            .media
              .media-content
                p.title.is-4 {{ repo.name }}
            .content
              p.description {{ repo.description }}
</template>

<script>
export default {
  computed: {
    repositories () {
      return this.$store.state.repositories
    }
  }
}
</script>

<style scoped lang='sass'>
.card
  .description
    word-break: break-word
</style>
