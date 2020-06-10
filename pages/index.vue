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
          p Bla bla blaaa
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
      videos: {}
    }
  },
  mounted () {
    this.$refs.typeit.goText()
    this.getVideos()
  },
  methods: {
    async getVideos () {
      console.log(process.env.YOUTUBE_KEY)
      this.videos = await this.$axios.get('/youtube/search?part=snippet&channelId=UCJZEIkTAh4uFr8DbShvZYww&maxResults=5&order=relevance&key=' + process.env.YOUTUBE_KEY)
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
