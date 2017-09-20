module.exports = {

    build: {
        vendor: [
            'axios',
        ],
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true,
                    },
                });
            }

            const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader');
            urlLoader.test = /\.(png|jpe?g|gif)$/;
            // Add SVG rule
            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            });
        },

        publicPath: '/',

    },

    head: {
        title: 'Weather Challenge - Klöeckner',
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
        theme_color: '#0077AA',
    },

    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],

    proxy: [
        ['/api', { target: 'http://api.openweathermap.org', pathRewrite: { '^/api': '/data/2.5' } }],
    ],

    plugins: [
        { src: '~/plugins/google-maps.js', ssr: false },
    ],
};
