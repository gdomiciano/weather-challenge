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
                const city = place.address_components[1].long_name;
                const country = place.address_components[3].long_name;
                this.$emmit('selectedPlace', city, country);
            }
        },
    };
</script>

<style scoped>

</style>