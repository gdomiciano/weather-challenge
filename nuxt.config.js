const path = require('path');

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
                    // options: {
                    //     fix: true,
                    // },
                });
            }


            // get and remove file loader
            const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/');
            config.module.rules.splice(config.module.rules.indexOf(rule), 1);

            // add it again, but now without 'assets\/svg'
            config.module.rules.push({
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                exclude: /(assets\/svg)/,
                query: {
                    limit: 1000, // 1KO
                    name: 'img/[name].[hash:7].[ext]',
                },
            });

            config.module.rules.push({
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, 'assets/svg'),
                ],
                use: 'svg-sprite-loader',
            });
            // const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader');
            // urlLoader.test = /\.(png|jpe?g|gif)$/;

            // config.module.rules.push({
            //     test: /\.svg$/,
            //     loader: 'svg-sprite-loader',
            // });
        },

        publicPath: 'https://gdomiciano.github.io/weather-challenge/',

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
