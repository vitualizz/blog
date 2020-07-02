<template lang='pug'>
  ul.brand
    li(
      v-for='brand in brands'
      :class='addSize'
    )
      a(
        :href='brand.url'
        target='_blank'
        :class='colorItem'
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
    },
    brands: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: 'white'
    }
  },
  computed: {
    addSize () {
      return `fa-${this.size}`
    },
    colorItem () {
      return `text-${this.color}`
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
