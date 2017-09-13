<template>
    <div>
oi  {{ posts }}

        <form action="">
            <select name="countries" id="countries"></select>
            <select name="cities" id="cities"></select>
            <input type="submit" value="Check weather">
        </form>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: 'city-form',
        layout: 'default',
        created(){
            axios.get('~/static/city.list.json')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        data() {
            return {
                posts: null,
                cities: null,
            };
        },
        methods: {
            getCountryCities(country) {
                const cities = this.Places.Filter(place => place.country.match(country));
                this.cities = cities;
            },
        },
    };
</script>

<style scoped>

</style>