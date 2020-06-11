
<template lang='pug'>
  .columns
    .column.is-4(
      v-for='(article, index) in articles'
      :key='index'
    )
      nuxt-link(
        :to='getUrlPost(article.slug)'
      )
        .card
          .card-image
            figure.image.is-4by3
              img(
                :src='getImage(article.image)'
              )
          .card-content
            .media
              .media-content
                p.title.is-4 {{ article.title }}
            .content {{ article.description }}
              br
              time {{ article.created_at }}
</template>

<script>
import imageNotFound from '~/assets/images/resources/study.svg'
export default {
  props: {
    limit: {
      type: Number,
      required: false,
      default: 3
    }
  },
  async fetch () {
    this.articles = await this.$content('es')
      .only(['title', 'description', 'slug', 'image', 'created_at'])
      .limit(this.limit)
      .where({ published: true })
      .fetch()
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getUrlPost (post) {
      return `/posts/${post}`
    },
    getImage (image) {
      return (image && image.length ? image : imageNotFound)
    }
  }
}
</script>

<style scoped lang='sass'>
.container
  margin-top: 20px
</style>
