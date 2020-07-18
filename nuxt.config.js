const webpack = require("webpack")

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Lee Palacios',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.7' },
      { hid: 'description', name: 'description', content: 'Soy un joven peruano de 17 años, me encanta escribir código y me apasiona la tecnología. Soy amante de la vida y fiel seguidor del mundo autodidacta.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Source+Code+Pro:wght@200;400;700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/color-mode.scss',
    '~/assets/styles/base.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/scroll.js', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc https://github.com/nuxt/components
    '@nuxt/components',
    // MomentJs
    '@nuxtjs/moment',
    // Dark Mode
    '@nuxtjs/color-mode',
    // Google Analytics
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Style Resources
    '@nuxtjs/style-resources',
    // FontAwesome
    '@nuxtjs/fontawesome',
    // Content
    '@nuxt/content',
    // Lazy Load
    ['nuxt-lazy-load', {
      //defaultImage: '/images/default-lazy.png',
      loadingClass: 'circle-loader-1'
    }]
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
  ** Google Analytics
  */
  googleAnalytics: {
    id: process.env.ANALYTICS_ID
  },
  /* publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  */

  /*
  ** Components Global
  */
  components: true,
  /*
  ** Moment
  */
  moment: {
    locales: ['es']
  },
  /*
  ** ServerMiddleware
  */
  serverMiddleware: [
    { path: '/videos', handler: '~/api/videos.js' },
    { path: '/repositories', handler: '~/api/repositories.js' }
  ],
  /*
  ** Content
  */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Font Awesome
  */
  fontawesome: {
    icons: {
      solid: ['faEnvelope', 'faShare', 'faMoon', 'faSun'],
      brands: ['faFacebook', 'faInstagram', 'faYoutube', 'faWhatsapp', 'faGithub', 'faTwitter']
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
        $: "jquery",
        _: "lodash"
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }
  }
}
