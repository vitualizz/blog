<template lang='pug'>
  .navbar.is-fixed-top(
    v-scroll="handleScroll"
    :class='colorNavbar'
  )
    a.navbar-burger.burger(
      @click='activeNavbar'
    )
      span(aria-hidden='true')
      span(aria-hidden='true')
      span(aria-hidden='true')
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
        { name: 'Proyectos', path: '/' },
        { name: 'Sobre mi', path: '/' },
        { name: 'Contáctame', path: '/' }
      ],
      isWhite: false,
      transparent: false
    }
  },
  computed: {
    colorItem () {
      return `text-${this.isWhite ? 'white' : 'black'}`
    },
    colorNavbar () {
      return (this.transparent ? 'is-transparent' : '')
    }
  },
  created () {
    if (location.pathname === '/') {
      this.isWhite = true
      this.transparent = true
    }
  },
  methods: {
    activeNavbar () {
      $('.navbar').toggleClass('burguer')
      $('.navbar-menu').toggleClass('is-active')
    },
    handleScroll (evt, el) {
      let white = false
      let transparent = false
      if (location.pathname === '/') {
        const intro = $('.intro')[0].offsetHeight - $('.navbar')[0].offsetHeight
        white = transparent = (window.scrollY < intro)
      }
      this.isWhite = white
      this.transparent = transparent
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

.navbar.is-transparent:not(.burguer)
  background: transparent

</style>
