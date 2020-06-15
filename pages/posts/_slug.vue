<template lang='pug'>
  section.section.margin-menu
    .container
      h1.title {{ post.title }}
      h3.subtitle {{ post.description }}
      nuxt-content(
        :document='post'
      )
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const post = await $content(`es/${params.slug}`)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: err })
      })

    return {
      post
    }
  }
}
</script>

<style scoped lang='sass'>
.container
  &::v-deep p
    font-weight: 400
    font-size: 1.2rem
</style>
