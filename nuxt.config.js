export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ali Baba Rest Country Test By Ali Esmaeili',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SEO Things xD - Ali baba rest country is a sample challenge test for accepting to ali baba co' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;600;800&display=swap", rel: "stylesheet" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    '@/assets/scss/default.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    
  ],

    
  
  
  fontawesome: {
    icons: {
      solid: ['faMoon', 'faSun', 'faArrowLeft', 'faSearch'],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: "[local]_[hash:base64:4]",
        }
      }
    },
  },
  loading: {
    color: 'blue',
  }
}
