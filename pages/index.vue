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
  mounted () {
    this.$refs.typeit.goText()
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
