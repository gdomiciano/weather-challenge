process.env.DEBUG = 'nuxt:*'
export default {
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        const StyleLintPlugin = require('stylelint-webpack-plugin')
        config.plugins.push(
          new StyleLintPlugin({
            files: '**/*.{vue,scss}',
            syntax: 'scss',
            fix: true
          })
        )
      }
    },
    extractCSS: true
  },

  head: {
    title: 'Weather Challenge - Klöeckner'
  },

  loading: { color: '#F3C80F' },

  manifest: {
    name: 'Weather Challenge',
    short_name: 'Weather',
    display: 'fullscreen',
    background_color: '#000000',
    description: 'PWA weather challenge for Klöeckner',
    lang: 'en',
    orientation: 'portrait',
    theme_color: '#0077AA'
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: [
    ['/api', { target: 'http://api.openweathermap.org', pathRewrite: { '^/api': '/data/2.5' } }]
  ],

  plugins: [
    { src: '~/plugins/google-maps.js', ssr: false }
  ]
}
