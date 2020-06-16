<template lang='pug'>
  img(:src='logo' data-not-lazy)
</template>

<script>
export default {
  data () {
    return {
      logo: require('~/assets/images/resources/logo_img.png')
    }
  }
}
</script>

<style scoped lang='sass'>
img
  border-radius: 30%
</style>
