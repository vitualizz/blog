<template lang='pug'>
  .timeline.is-centered
    .line(v-for='(items, year, index) in listItems')
      header.timeline-header
        span.tag.is-medium.is-primary {{ year }}
      .timeline-item(v-for='(item, index) in items')
        .timeline-marker(:class='colorMarker(item.type)')
        .timeline-content
          p.heading {{ item.head || $moment(item.date).format('LL') }}
          p {{ item.content }}
    .line
      header.timeline-header
        span.tag.is-medium.is-primary Presente
      .timeline-item
        .timeline-marker.is-primary
        .timeline-content
          p.heading Como el maestro Oogway diría
          p
            | El ayer es historia, el mañana un misterio, pero el presente es un obsequio
</template>

<script>
import 'bulma-timeline/dist/css/bulma-timeline.min.css'
export default {
  props: {
    line: {
      type: Array,
      required: true
    }
  },
  computed: {
    listItems () {
      return _.groupBy(this.line, item => this.$moment(item.date).format('YYYY'))
    }
  },
  methods: {
    colorMarker (type) {
      return `is-${type || 'primary'}`
    }
  }
}
</script>

<style scoped lang='sass'>
.line
  display: contents
</style>
