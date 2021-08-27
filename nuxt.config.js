const strapiBaseUri = process.env.API_URL || "http://localhost:1337";
export default {
  target: "static",
  env: {
    strapiBaseUri,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontend",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["uikit/dist/css/uikit.min.css", "uikit/dist/css/uikit.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],

  modules: [
    "@nuxtjs/font-awesome",
    "@nuxtjs/strapi",
    "@nuxtjs/axios",
    "@nuxtjs/tailwindcss",  
    "@nuxtjs/bulma",
    '@nuxtjs/auth',
    '@nuxtjs/dotenv'
  ],
  axios: {
    baseURL: process.env.API_AUTH_URL || 'http://localhost:1337'
  },
  /*
 ** Auth module configuration
 ** See https://auth.nuxtjs.org/schemes/local.html#options
 */
auth: {
  strategies: {
  local: {
  endpoints: {
  login: {
  url: 'auth/local',
  method: 'post',
  propertyName: 'jwt'
  },
  user: {
  url: 'users/me',
  method: 'get',
  propertyName: false
  },
  logout: false
  }
  }
  }
 },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
         limit: 10000,
        
        }
      })
    }
  }
};
