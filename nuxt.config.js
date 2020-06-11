const webpack = require("webpack")

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&display=swap' }
    ]
  },
  /*
  ** Environments
  */
  env: {
    youtubeKey: process.env.YOUTUBE_KEY
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/base.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/scroll.js', mode: 'client' },
    '~/plugins/carousel.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc https://github.com/nuxt/components
    '@nuxt/components'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Proxy complement to Axios
    '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Style Resources
    '@nuxtjs/style-resources',
    // FontAwesome
    '@nuxtjs/fontawesome',
    // Content
    '@nuxt/content'
  ],
  /*
  ** Style Resources
  */
  styleResources: {
    sass: [
      '~/assets/styles/global/*.sass'
    ]
  },
  /*
  ** Components Global
  */
  components: true,
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/youtube': {
      target: 'https://www.googleapis.com/youtube/v3',
      pathRewrite: {
        '^/youtube': '/',
      }
    }
  },
  /*
  ** Font Awesome
  */
  fontawesome: {
    icons: {
      solid: ['faEnvelope'],
      brands: ['faFacebook', 'faInstagram', 'faYoutube', 'faWhatsapp', 'faGithub']
    }
  },
  /*
  ** Nuxt Content
  */
  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content()
        .only(["path"])
        .fetch();

      return files.map(file => (file.path === "/index" ? "/" : file.path));
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
