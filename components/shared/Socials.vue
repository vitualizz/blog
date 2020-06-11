<template lang='pug'>
  ul.brand
    li(
      v-for='brand in brands'
      :class='addSize'
    )
      a(
        :href='brand.url'
        target='_blank'
      )
       font-awesome-icon(
        :icon="[brand.type, brand.name]"
      )
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: '1x'
    }
  },
  data () {
    return {
      brands: [
        { type: 'fab', name: 'facebook', url: 'https://facebook.com/lee.devel0p' },
        { type: 'fab', name: 'instagram', url: 'https://instagram.com/lee.develop' },
        { type: 'fab', name: 'medium', url: 'https://medium.com/@vitualizz' },
        // { type: 'fa', name: 'whatsapp' },
        { type: 'fa', name: 'envelope', url: 'https://medium.com/@vitualizz' }
      ]
    }
  },
  computed: {
    addSize () {
      return `fa-${this.size}`
    }
  }
}
</script>

<style scoped lang='sass'>
.brand
  display: inline-flex
  li
    transition: all 0.4s ease
    margin: 0px 35px
    a
      color: $white
    &:hover
      -webkit-transform: scale(1.5)
      -ms-transform: scale(1.5)
      transform: scale(1.5)
</style>
