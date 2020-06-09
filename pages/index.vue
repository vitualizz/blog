<template lang='pug'>
  div
    section.intro.hero.is-fullheight.has-text-centered
      .hero-body
        .container
          Logo.logo
          h1.title LeeDev
          h2.subtitle vitualizz
</template>

<style scoped lang='sass'>
.intro
  background-image: url('~@/assets/images/pages/index/bg.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
  h1, h2
    color: $white
  .logo
    min-width: 150px
    max-width: 250px
    margin-bottom: 30px
</style>
