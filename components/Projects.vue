<template lang='pug'>
  .columns.is-multiline.is-mobile
    a.column.is-full-mobile.is-one-third-desktop(
      v-for='repo in repositories'
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
import github from 'octonode'
export default {
  async fetch () {
    const gh = github.client()
    const user = await gh.user('vitualizz')
    user.repos((err, data, headers) => {
      if (err) { throw err }
      this.repositories = data
    })
  },
  data () {
    return {
      repositories: null
    }
  }
}
</script>

<style scoped lang='sass'>
.card
  min-height: 170px
  .description
    word-break: break-word
</style>
