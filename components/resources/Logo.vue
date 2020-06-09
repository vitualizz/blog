<template lang='pug'>
  img(:src='logo')
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
  border-radius: 100%
</style>
