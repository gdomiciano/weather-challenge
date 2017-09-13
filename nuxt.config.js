module.exports = {

    build: {},

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
    ],
    env: {
        API_KEY: 'cecf2cdf0f3ee489ba06aff6db8cb201',
    },
};
