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
    section.hero
      .hero-body
        .container
          h1.title Artículos
          p Bla bla blaaa
    section.hero
      .hero-body
        .container
          h1.title Videos
          figure(
            v-for='video in videos'
          ).image
            iframe(
              :src="getUrlIframe(video)"
            )
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
      },
      videos: []
    }
  },
  mounted () {
    this.$refs.typeit.goText()
    this.getVideos()
  },
  methods: {
    async getVideos () {
      await this
        .$axios
        .$get('/youtube/search?part=snippet&channelId=UCJZEIkTAh4uFr8DbShvZYww&maxResults=5&order=relevance&key=' + process.env.YOUTUBE_KEY)
        .then((res) => {
          this.videos = res.items
        })
    },
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
</style>
