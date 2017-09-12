module.exports = {

    build: {},

    head: {
        title: 'Weather Challenge - Kloeckner',
    },

    loading: { color: '#3B8070' },

    manifest: {
        name: 'Weather Challenge',
        short_name: 'Weather',
        start_url: '.',
        display: 'fullscreen',
        background_color: '#fff',
        description: '',
        lang: 'en',
        orientation: 'portrait',
        related_applications: [
            {
                platform: 'web',
            },
        ],
        theme_color: 'yellow',
    },

    modules: [
        '@nuxtjs/pwa',
    ],
};
