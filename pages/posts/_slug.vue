<template lang='pug'>
  section.section.margin-menu
    .container
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
.nuxt-content
  @for $i from 1 through 6
    &::v-deep h#{7 - $i}
      font-size: $i * 0.3em
      margin-top: 20px
  &::v-deep p
    font-weight: 400
    font-size: 1.2rem
    margin: 20px 0
</style>
