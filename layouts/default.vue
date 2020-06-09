<template lang='pug'>
  div
    .navbar.is-fixed-top.is-transparent
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

<style scoped lang='sass'>
.navbar
  background: transparent
  .navbar-item
    color: $white
    font-weight: 400
    &:hover
      font-weight: bold
</style>
