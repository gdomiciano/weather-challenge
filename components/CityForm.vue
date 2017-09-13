<template>
    <div>
        <form action="">
            <select name="countries" id="countries" v-if="places">
                <option value="place.country" v-for="place in places" :key="place.$index">{{place.country}}</option>
            </select>
            <select name="cities" id="cities" v-if="cities"></select>
            <input type="submit" value="Check weather">
        </form>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: 'city-form',
        layout: 'default',
        data() {
            return {
                places: this.$store.state.places,
                cities: null,
            };
        },
        beforeMount() {
            console.log(this);
        },
        async asyncData({ store, req }) {
            // Fetch data
            console.log('async', store);
            if (!store.state.places) await store.dispatch('getPlaces');
            // Update data based on state
            return {
                from: req ? 'SERVER' : 'CLIENT',
            };
        },

        methods: {
            getCountryCities(country) {
                const cities = this.places.Filter(place => place.country.match(country));
                this.cities = cities;
            },
        },
    };
</script>

<style scoped>

</style>