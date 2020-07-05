<template lang='pug'>
  .navbar.is-fixed-top(
    v-scroll="handleScroll"
  )
    .navbar-menu
      .navbar-end
        nuxt-link(
          v-for='(route, index) in routes'
          :key='index'
          :to='route.path'
        ).navbar-item {{ route.name }}
    .navbar-brand
      a.navbar-burger.burger(
        @click='activeNavbar'
      )
        span(aria-hidden='true')
        span(aria-hidden='true')
        span(aria-hidden='true')
      a.change-color-mode(
        @click='changeColorMode'
      )
        font-awesome-icon(
          v-if='darkMode'
          :icon="['fas', 'moon']"
        )
        font-awesome-icon(
          v-else
          :icon="['fas', 'sun']"
        )
</template>

<script>
export default {
  data () {
    return {
      routes: [
        { name: 'Inicio', path: '/' },
        { name: 'Blog', path: '/posts' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'Sobre mi', path: '/about_me' }
        // { name: 'Contáctame', path: '/' }
      ],
      darkMode: false
    }
  },
  mounted () {
    if (location.pathname === '/') {
      $('.navbar').addClass('is-transparent')
    }
    if ($('html.dark-mode').length) {
      this.darkMode = true
    }
  },
  methods: {
    changeColorMode () {
      this.darkMode = !this.darkMode
      this.$nuxt.$colorMode.preference = (this.darkMode ? 'dark' : 'sepia')
    },
    activeNavbar () {
      $('.navbar').toggleClass('burguer')
      $('.navbar-menu').toggleClass('is-active')
    },
    handleScroll (evt, el) {
      if (location.pathname === '/') {
        const intro = $('.intro')[0].offsetHeight
        $('.navbar').toggleClass('is-transparent white-important', (window.scrollY < intro))
      }
    }
  }
}
</script>

<style scoped lang='sass'>
.white-important
  color: $white
.navbar
  .change-color-mode
    width: 2rem
    display: flex
    align-items: center
  .navbar-menu
    .navbar-item
      font-weight: 400
      &:hover
        font-weight: bold
  a
    color: $white

// Media query equal to navbar-burguer
@media screen and (max-width: 1023px)
  .navbar
    a
      color: $black
</style>
