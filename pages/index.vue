<template>
    <section class="container">
        <div>
            <weather-info />
            <!-- {{place}} -->
            <city-form/>
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

    export default {
        components: {
            CityForm,
            WeatherInfo,
        },
        data() {
            return {
                online: true,
            };
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

        },
        destroyed() {
            window.removeEventListener('offline', this._toggleNetworkStatus);
            window.removeEventListener('online', this._toggleNetworkStatus);
        },
//         async asyncData ({ params }) {
//     let { data } = await axios.get(`https://my-api/posts/${params.id}`)
//     return { title: data.title }
//   }
        // async asyncData ({ app, commit }) {
        //     const lat = Math.random(-90, 90);
        //     const lon = Math.random(-180, 180);
        //     console.log(app, lat, lon);
        //     // const { places } = await app.$axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=91.5&lon=43.3&units=metric&appid=cecf2cdf0f3ee489ba06aff6db8cb201`);
        //     const { places } = await app.$axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1`);
        //     console.log(places);
        //     return {
        //         place: places,
        //     };
        // },
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
