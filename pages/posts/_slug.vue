<template lang='pug'>
  section.section.margin-menu
    .container
      nuxt-content(
        :document='post'
      )
</template>

<script>
import ImgLoad from '~/components/shared/ImgLoad.vue'

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
    p
      font-weight: 400
      font-size: 1.2rem
      margin: 20px 0
    .isLoading
      filter: blur(9px)
</style>
