<template>
    <div>
        <form class="City-form" v-on:submit.prevent>
            <gmap-autocomplete class="City-form--input" @place_changed="getWeather" :selectFirstOnEnter="selectFirst"></gmap-autocomplete>
        </form>
        <error-message v-if="isError" :message="message"/>
    </div>
</template>

<script>
    import ErrorMessage from '~/components/ErrorMessage.vue';

    export default {
        name: 'city-form',
        layout: 'default',
        components: {
            ErrorMessage,
        },
        data() {
            return {
                selectFirst: true,
                isError: false,
            };
        },
        methods: {
            getWeather(place) {
                if (place.address_components && place.address_components.length > 1) {
                    let city = place.address_components.filter(item => item.types[0].match('administrative_area_level_2'));
                    if (city.length === 0) city = place.address_components.filter(item => item.types[0].match('administrative_area_level_1'));

                    const country = place.address_components.filter(item => item.types[0].match('country'));

                    this.$emit('selectedPlace', city[0].long_name, country[0].short_name);
                } else {
                    document.querySelector('.City-form--input').value = '';
    
                    const city = place.name || place.adr_address;
                    this.message = `Sorry, there is no weather information of ${city}. Try another city.`;
                    this.isError = !this.isError;

                    setTimeout(() => {
                        this.isError = !this.isError;
                    }, 5000);
                }
            },
        },
    };
</script>

<style scoped>

</style>