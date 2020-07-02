<template lang='pug'>
  .navbar.is-fixed-top(
    v-scroll="handleScroll"
    :class='colorNavbar'
  )
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
    .navbar-menu
      .navbar-end
        nuxt-link(
          v-for='(route, index) in routes'
          :key='index'
          :to='route.path'
          :class='colorItem'
        ).navbar-item {{ route.name }}
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
      darkMode: false,
      bgWhite: false,
      transparent: false
    }
  },
  computed: {
    colorItem () {
      return `text-${this.bgWhite ? 'white' : 'black'}`
    },
    colorNavbar () {
      return this.transparent ? 'is-transparent' : ''
    }
  },
  watch: {
    $route (to, from) {
      this.changeColor(to.path)
    }
  },
  mounted () {
    this.changeColor()
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
      let white = false
      let transparent = false
      if ($('.navbar-burger').is(':hidden') && location.pathname === '/' && window.innerWidth > window.innerHeight) {
        const intro = $('.intro')[0].offsetHeight - $('.navbar')[0].offsetHeight
        white = transparent = (window.scrollY < intro)
      }
      this.bgWhite = white
      this.transparent = transparent
    },
    changeColor (path = null) {
      path = path || window.location.pathname
      let white = false
      let transparent = false
      if ($('.navbar-burger').is(':hidden') && (path === '/')) {
        white = transparent = true
      }
      this.bgWhite = white
      this.transparent = transparent
    }
  }
}
</script>

<style scoped lang='sass'>
.navbar
  .change-color-mode
    width: 2rem
    display: flex
    align-items: center
  .navbar-item
    font-weight: 400
    &:hover
      font-weight: bold

.navbar.is-transparent:not(.burguer)
  background: transparent

</style>
