<template lang='pug'>
  div
    .navbar.is-fixed-top.is-transparent
      a.navbar-burger.burger(
        @click='activeNavbar'
      )
        span(aria-hidden='true')
        span(aria-hidden='true')
        span(aria-hidden='true')
      .navbar-menu
        .navbar-end
          nuxt-link(
            to='/'
          ).navbar-item Inicio
          nuxt-link(
            to='/'
          ).navbar-item Blog
          nuxt-link(
            to='/'
          ).navbar-item Proyectos
          nuxt-link(
            to='/'
          ).navbar-item Sobre mi
          nuxt-link(
            to='/'
          ).navbar-item Contáctame
    nuxt
</template>

<script>
export default {
  methods: {
    activeNavbar () {
      $('.navbar').toggleClass('burguer')
      $('.navbar-menu').toggleClass('is-active')
    }
  }
}
</script>

<style scoped lang='sass'>
.navbar:not(.burguer)
  background: transparent
  .navbar-item
    color: $white
    font-weight: 400
    &:hover
      font-weight: bold

.navbar.burguer
  .navbar-item
    color: $black
    font-weight: 400
    &:hover
      font-weight: bold
</style>
