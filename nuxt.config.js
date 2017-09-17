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

            // Overwrite default SVG rule
            const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader');
            urlLoader.test = /\.(png|jpe?g|gif)$/;
            // Add SVG rule
            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            });
        },

    },

    head: {
        title: 'Weather Challenge - Kloeckner',
    },

    loading: { color: '#F3C80F' },

    manifest: {
        name: 'Weather Challenge',
        short_name: 'Weather',
        start_url: '.',
        display: 'fullscreen',
        background_color: '#000000',
        description: '',
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
    render: {
        static: {
            maxAge: '1y',
            setHeaders(res, path) {
                if (path.includes('sw.js')) {
                    res.setHeader('Cache-Control', 'public, max-age=0');
                }
            },
        },
    },
    env: {
        API_KEY: 'cecf2cdf0f3ee489ba06aff6db8cb201',
    },
};
