<template lang='pug'>
  div
    h1 {{ post.title }}
    h3 {{ post.description }}
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
