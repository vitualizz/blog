<template lang='pug'>
div
  figure.has-text-centered.image.is-5by4
    img(:src='src')
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
