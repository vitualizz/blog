<template lang='pug'>
  section.section.margin-menu
    .container
      Articles(
        filterTabs
      )
</template>

<script>
export default {
  head () {
    return {
      meta: [
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Lee Palacios' },
        { property: 'og:description', content: 'Soy un joven peruano de 17 años, me encanta escribir código y me apasiona la tecnología. Soy amante de la vida y fiel seguidor del mundo autodidacta.' },
        { property: 'og:image', content: process.env.BASE_URL + '/images/logo_img.png' },
        { property: 'og:url', content: process.env.BASE_URL },
        // Twitter Card
        { property: 'twitter:title', content: 'Lee Palacios' },
        { property: 'twitter:description', content: 'Soy un joven peruano de 17 años, me encanta escribir código y me apasiona la tecnología. Soy amante de la vida y fiel seguidor del mundo autodidacta.' },
        { property: 'twitter:image', content: process.env.BASE_URL + '/images/logo_img.png' },
        { property: 'twitter:site', content: '@vitualizz' },
        { property: 'twitter:creator', content: '@vitualizz' }
      ]
    }
  }
}
</script>
