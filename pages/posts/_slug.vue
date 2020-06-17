<template lang='pug'>
  section.section.margin-menu
    .container
      nuxt-content(
        :document='post'
      )
</template>

<script>
import ImgLoad from '~/components/shared/ImgLoad.vue'
import imageNotFound from '~/assets/images/resources/study.svg'

export default {
  components: {
    ImgLoad
  },
  async asyncData ({ $content, params, error }) {
    const post = await $content(`es/${params.slug}`)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: err })
      })

    return {
      post
    }
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        // Open Graph
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.post.title + ' - Lee Palacios' },
        { property: 'og:description', content: this.post.description },
        { property: 'og:image', content: this.post.image || this.$store.state.location.origin + imageNotFound },
        { property: 'og:url', content: this.$store.state.location.href },
        // Twitter Card
        { property: 'twitter:title', content: this.post.title + ' - Lee Palacios' },
        { property: 'twitter:description', content: this.post.description },
        { property: 'twitter:image', content: this.post.image || this.$store.state.location.origin + imageNotFound },
        { property: 'twitter:site', content: '@vitualizz' },
        { property: 'twitter:creator', content: '@vitualizz' }
      ]
    }
  }
}
</script>

<style scoped lang='sass'>
.nuxt-content
  width: 60%
  margin: auto
  @media (max-width: 500px)
    width: 100%
  @media (max-width: 921px)
    width: 75%
  @for $i from 1 through 6
    &::v-deep h#{7 - $i}
      font-size: $i * 0.3em
      margin-top: 20px
  &::v-deep
    p, li
      font-weight: 400
    p
      font-size: 1.2rem
      margin: 20px 0
    li
      font-size: 1.2rem
    & > ul
      list-style: inherit
      li > ul
        list-style: circle
        li
          list-style-position: inside
    blockquote
      background-color: #f5f5f5
      border-left: 5px solid #dbdbdb
      padding: 1.25em 2em
      p
        font-size: 1.5rem
        font-weight: bold
        &:last-child
          font-size: 1.2rem
          font-weight: 400
          text-align: right
          margin: 0
</style>
