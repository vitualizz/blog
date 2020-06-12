
<template lang='pug'>
  div
    .tabs.is-centered(
      v-if='filterTabs'
    )
      ul
        li(
          v-for='filter in filters'
          :class='activeTab(filter.type)'
        )
          a(
            @click='changeTab(filter.type)'
            ) {{ filter.name }}
    .columns
      .column.is-4(
        v-for='(article, index) in listArticles'
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
    filterTabs: {
      type: Boolean,
      required: false,
      default: false
    },
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
      articles: [],
      categoryActive: 'all',
      filters: [
        { name: 'Todos', type: 'all' },
        { name: 'Tecnología', type: 'technology' },
        { name: 'Personal', type: 'personal' }
      ]
    }
  },
  computed: {
    listArticles () {
      let articles = this.articles
      if (!(this.categoryActive === 'all')) {
        articles = articles.filter(article => article.category === this.categoryActive)
      }
      return articles
    }
  },
  methods: {
    getUrlPost (post) {
      return `/posts/${post}`
    },
    getImage (image) {
      return (image && image.length ? image : imageNotFound)
    },
    activeTab (tab) {
      return (this.categoryActive === tab ? 'is-active' : '')
    },
    changeTab (type) {
      this.categoryActive = type
    }
  }
}
</script>

<style scoped lang='sass'>
.container
  margin-top: 20px
</style>
