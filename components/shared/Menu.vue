<template lang='pug'>
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
          to='/posts'
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
.navbar
  .navbar-item
    font-weight: 400
    &:hover
      font-weight: bold

.navbar:not(.burguer)
  background: transparent
  .navbar-item
    color: $white

.navbar.burguer
  .navbar-item
    color: $black
</style>
