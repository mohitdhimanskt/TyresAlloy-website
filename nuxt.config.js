export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["uikit/dist/css/uikit.min.css",
  "uikit/dist/css/uikit.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ { src: '~/plugins/uikit.js', ssr: false }, 
  ],

  modules: [
    // '@nuxtjs/font-awesome',"@nuxtjs/strapi",'@nuxtjs/axios','@nuxtjs/tailwindcss', '@nuxtjs/bulma'
    ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   '@nuxtjs/font-awesome',"@nuxtjs/strapi",'@nuxtjs/axios','@nuxtjs/tailwindcss', '@nuxtjs/bulma'
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //    '@nuxtjs/font-awesome',"@nuxtjs/strapi",'@nuxtjs/axios','@nuxtjs/tailwindcss',
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
