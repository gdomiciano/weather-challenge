<template>
    <section class="container">
        <div>
            <weather-info :info="weatherInfo" />
                        <city-form @selectedPlace="getCity"/>
            <current-location @userLocation="getUserLocation"/>
            <div :class="['network',online ? 'online' : 'offline']">
                <div class="circle"></div>
                {{ online ? 'online' : 'offline' }}
            </div>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green" rel="noopener">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey" rel="noopener">GitHub</a>
            </div>
        </div>
    </section>
</template>

<script>
    import WeatherInfo from '~/components/WeatherInfo.vue';
    import CityForm from '~/components/CityForm.vue';
    import CurrentLocation from '~/components/CurrentLocation.vue';

    export default {
        components: {
            CityForm,
            WeatherInfo,
            CurrentLocation,
        },
        data() {
            return {
                online: true,
                isError: false,
            };
        },
        computed: {
            weatherInfo(){
                return this.$store.state.place;
            },
        },
        mounted() {
            if (!window.navigator) {
                this.online = false;
                return;
            }
            this.online = Boolean(window.navigator.onLine);
            window.addEventListener('offline', this._toggleNetworkStatus);
            window.addEventListener('online', this._toggleNetworkStatus);
        },
        methods: {
            _toggleNetworkStatus({ type }) {
                this.online = type === 'online';
            },
            getCity: async function(city, country) {
                await this.$store.dispatch('getSelectedPlace', city, country);
            },
            getUserLocation: async function(lat, lon) {
                const position = {
                    lat:lat,
                    lon:lon
                }
                await this.$store.dispatch('getCurrentLocation', position, lon);
            },

        },
        destroyed() {
            window.removeEventListener('offline', this._toggleNetworkStatus);
            window.removeEventListener('online', this._toggleNetworkStatus);
        },
    };
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

    .network {
        font-weight: 400;
        font-size: 1rem;
    }

    .network .circle {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: green;
        padding: .1rem .5rem;
        border-radius: 1rem;
    }

    .network.offline .circle {
        background: red;
    }
</style>
