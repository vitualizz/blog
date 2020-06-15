<template lang='pug'>
  div
    section.intro.hero.is-fullheight.has-text-centered
      .hero-body
        .container
          Logo.logo
          Typeit(
            ref='typeit'
            :strings='intro.strings'
            whiteText
            loop
          ).title
          Socials(
            size='3x'
          )
          //- Donation
    section.hero
      .hero-body
        .container
          h1.title Artículos
          Articles
    section.hero.videos
      .hero-body
        .container
          h1.title Videos
          .has-text-centered
            carousel(
              :per-page-custom="[[320, 1], [1199, 2]]"
              navigationEnabled
            )
              slide(
                v-for='(video, index) in listVideos'
                :key='index'
              )
                figure.image
                  iframe(
                    :src="getUrlIframe(video)"
                  ).has-ratio
    section.hero
      .hero-body
        .container
          h1.title Proyectos
          Projects(limit='4')
</template>

<script>
export default {
  data () {
    return {
      intro: {
        strings: [
          'Lee Palacios 🤓',
          'Yo 💕 Tecnología',
          'Autodidacta 😎',
          'Blogger ✍ & Youtuber 👨💻',
          'LeeDev & Vitualizz'
        ]
      }
    }
  },
  computed: {
    listVideos () {
      return this.$store.state.videos
    }
  },
  mounted () {
    this.$refs.typeit.goText()
  },
  methods: {
    getUrlIframe (video) {
      return `https://www.youtube.com/embed/${video.id.videoId}`
    }
  }
}
</script>

<style scoped lang='sass'>
.intro
  background-image: url('~@/assets/images/pages/index/bg.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
  .title
    letter-spacing: 3px
  .logo
    min-width: 150px
    max-width: 250px
    margin-bottom: 30px
.videos
  iframe
    width: 640px
    height: 360px
@media (max-width: 500px)
  .videos
    iframe
      width: 352px
      height: 240px
</style>
