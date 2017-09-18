<template>
    <section class="Content">
        <div>
            <weather-info :info="weatherInfo" />
            <city-form @selectedPlace="getCity" />
            <current-location @userLocation="getUserLocation" />
        </div>
    </section>
</template>

<script>
    import CityForm from '~/components/CityForm.vue';
    import CurrentLocation from '~/components/CurrentLocation.vue';
    import WeatherInfo from '~/components/WeatherInfo.vue';

    export default {
        components: {
            CityForm,
            CurrentLocation,
            WeatherInfo,
        },
    
        computed: {
            weatherInfo() {
                return this.$store.state.place;
            },
        },

        methods: {
            async getCity(city, country) {
                await this.$store.dispatch('getSelectedPlace', city, country);
            },
            async getUserLocation(lat, lon) {
                const position = { lat, lon };
                await this.$store.dispatch('getCurrentLocation', position);
            },
        },
    };
</script>

<style lang="scss">
    @import '~assets/scss/mixins';

    .Content {
        @include center-vertical;
    }

</style>
