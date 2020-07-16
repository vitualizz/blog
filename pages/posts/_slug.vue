<template lang='pug'>
  div
    section.section.margin-menu
      .container
        nuxt-content(
          :document='post'
        )
    section.has-text-centered
      Socials(
        :brands='brands'
        color='black'
        size='5x'
      )
</template>

<script>
import 'vue-code-highlight/themes/duotone-sea.css'
import 'vue-code-highlight/themes/window.css'
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
  computed: {
    brands () {
      const url = encodeURIComponent(this.$store.state.location.href)
      const brands = [
        { type: 'fab', name: 'facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=' + url },
        { type: 'fab', name: 'twitter', url: 'https://twitter.com/intent/tweet?url=' + url }
      ]
      return brands
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
  &::v-deep
    pre
      .number
        all: unset
    figure
      padding-top: 100%
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
  @for $i from 1 through 6
    &::v-deep h#{7 - $i}
      font-size: $i * 0.3em
      margin-top: 20px
  @media (min-width: 1408px)
    width: 75%
    .cover
      width: 70%
      margin: auto
    &::v-deep
      p
        font-size: 1.5rem
    @for $i from 1 through 6
      &::v-deep h#{7 - $i}
        font-size: $i * 0.5em
        margin-top: 20px
  @media (max-width: 500px)
    width: 100%
  @media (max-width: 921px)
    width: 75%
@media screen and (min-width: 1408px)
  .container
    max-width: 100%
</style>
