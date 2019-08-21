
export default {
  mode: 'universal',
  server: {
    port: 3002,
    timing: false
  },
  env: {
    baseUrlLocal: process.env.BASE_URL || 'http://localhost:3001',
    baseUrlGlobal: process.env.BASE_URL || 'http://localhost:3002'
  },
  router: {
    middleware: 'ip_route'
  },
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "cookie-universal-nuxt"
  ],
  /*
  ** Build configuration
  */
  build: {
      publicPath: '/_nuxt2/', //add cdn url
      extend (config, ctx) {
          config.node = {
              fs: 'empty'
          }
      }
  }
}
