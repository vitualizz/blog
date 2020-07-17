<template lang='pug'>
  div(:class="[ whiteText ? 'text-white' : 'text-black' ]")
</template>

<script>
import TypeIt from 'typeit'

export default {
  props: {
    strings: {
      type: [Array, String],
      required: true
    },
    speed: {
      type: Number,
      required: false,
      default: 150
    },
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    breakLines: {
      type: Boolean,
      required: false,
      default: false
    },
    whiteText: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    goText () {
      const typeit = new TypeIt(this.$el, {
        strings: this.strings,
        breakLines: this.breakLines,
        loop: this.loop,
        speed: this.speed
      })
      typeit.go()
    }
  }
}
</script>
