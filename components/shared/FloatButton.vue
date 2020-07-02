<template lang='pug'>
  div.is-hidden-mobile
    .mainopShadow
    .fab
      .mainop
        i#addIcon
          font-awesome-icon(
            :icon="['fa', 'share']"
          )
      a.minifab(
        v-for='(btn, index) in buttons'
        :key='index'
        :href='getUrl(btn.type, btn.url)'
        :style='colorButton(btn.color)'
        target='_blank'
      )
        i.minifabIcon
          font-awesome-icon(
            :icon="['fab', btn.type]"
          )
</template>

<script>
export default {
  data () {
    return {
      buttons: [
        { color: '3B5990', type: 'facebook' },
        { color: '00ACEE', type: 'twitter' }
      ]
    }
  },
  methods: {
    colorButton (color) {
      return { backgroundColor: '#' + (color || '8b7dfb') }
    },
    getUrl (type) {
      let url = encodeURIComponent(this.$store.state.location.href)
      switch (type) {
        case 'facebook':
          url = 'https://www.facebook.com/sharer/sharer.php?u=' + url
          break
        case 'twitter':
          url = 'https://twitter.com/intent/tweet?url=' + url
          break
      }
      return url
    }
  }
}
</script>

<style scoped lang='sass'>
// Based in https://codepen.io/tom22ger/pen/YjEePd
.fab, .mainop, .mainopShadow
  height: 64px
  width: 64px
  border-radius: 32px

.fab, .mainopShadow
  position: fixed
  right: 50px
  bottom: 50px

.fab
  background-color: transparent
  transition: height 300ms
  transition-timing-function: ease
  text-align: center
  overflow: hidden

  &:hover
    height: 200px // (items.length * 100)

.mainop
  margin: auto
  position: absolute
  bottom: 0
  right: 0
  transition: transform 300ms
  background-color: #f44336
  z-index: 6

.mainopShadow
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)

i
  margin-top: 16px
  font-size: 32px
  color: #fff
  display: flex
  justify-content: center

.minifab
  position: relative
  width: 58px
  height: 58px
  border-radius: 100px
  z-index: 5
  float: left
  margin: 0px 3px 8px
  transition: box-shadow 0.3s cubic-bezier(0.20, 0.8, 0.20, 1)
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
  display: flex
  & i
    margin: auto
    align-items: center
  &:hover
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)

.minifabIcon
  height: 24px
  width: 24px
  margin-top: 12px

</style>
