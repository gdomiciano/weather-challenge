<template>
    <div>
        <gmap-autocomplete @place_changed="getWeather"></gmap-autocomplete>
    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: 'city-form',
        layout: 'default',
        methods: {
            getWeather(place) {
                console.log(place);
                let city = place.address_components.filter(item => item.types[0].match('administrative_area_level_2'));
                if (city.length  === 0) city = place.address_components.filter(item => item.types[0].match('administrative_area_level_1'));
                const country = place.address_components.filter(item => item.types[0].match('country'));
                console.log(city, country)
                this.$emit('selectedPlace', city[0].long_name, country[0].short_name);
            }
        },
    };
</script>

<style scoped>

</style>