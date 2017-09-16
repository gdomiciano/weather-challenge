<template>
    <div>
        <gmap-autocomplete  @place_changed="getWeather"></gmap-autocomplete>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: 'city-form',
        layout: 'default',
        data() {
            return {
                // places: this.$store.state.places,
                // countries: this.places.filter(country => country.country),
                // cities: null,

            };
        },
        computed:{
            position() {
                return {
                    lat: 9.42344,
                    lgn: 39.85390
                };
            },
        },
        created() {
            console.log(this);
        },
        // async asyncData({ store, req }) {
        //     // Fetch data
        //     console.log('async', store);
        //     if (!store.state.places) await store.dispatch('getPlaces');
        //     // Update data based on state
        //     return {
        //         from: req ? 'SERVER' : 'CLIENT',
        //     };
        // },

        methods: {
            getCountryCities(country) {
                const cities = this.places.Filter(place => place.country.match(country));
                this.cities = cities;
            },
            getWeather(place) {
                console.log(place);

                this.position = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                };
                this.emmit('userCity', position)
            }
        },
    };
</script>

<style scoped>

</style>