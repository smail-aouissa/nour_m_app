
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Noor-M Boutique',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {hid: 'description', name: 'description', content: 'Fondatrice d’ une ligne de vêtements pour femmes « NOOR M PRO » influenceuse avec plus d’un million d’abonnés sur son compte instagram ,La marque Noor M aspirent à revitaliser le style de la Femme moderne Algérienne' }
    ],
    script: [
      { src: '/pixel.js', type: 'text/javascript' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/axios', ssr: false },
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
    { src: '~/plugins/vue-toastification', ssr: false },
    { src: '~/plugins/vueperslides', ssr: false },
    { src: '~/plugins/vue-infinitescroll', ssr: false },
    // { src: '~/plugins/firebase' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-facebook-pixel-module',
    ['cookie-universal-nuxt', { alias: 'cookies' }],
  ],

  facebook: {
    track: 'PageView',
    pixelId: '310161840313106',
    disabled: false
  },
  /*
  /*
  ** Global CSS
  */
  css: [
    './assets/scss/styles/animate.min.css',
    './assets/scss/styles/fontawesome.min.css',
    './assets/scss/styles/style.scss',
    './assets/scss/styles/responsive.scss',
  ],
  /** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    //proxy: true,
    https: true,
    browserBaseURL: 'https://api.noor-m.com/api/'
    //browserBaseURL: 'https://nour.test/api/'
  },
  generate: {
    routes: [
      '/collection/1',
      '/collection/2',
      '/collection/3',
      '/collection/4',
    ],
  },
  /*
  ** Globally configure <nuxt-link> default active class.
  */
  router: {
    linkActiveClass: 'active',
    mode: 'hash'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      //
    }
  }
}
