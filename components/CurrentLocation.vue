<template>
    <div class="Location">
        <button class="Location-button" @click="getLocation"><icon class="Location-icon" :glyph="location" width="30" height="30"/> Get weather from current location</button>
        <error-message v-if="isError" :message="message"/>

    </div>
</template>

<script>
    import ErrorMessage from '~/components/ErrorMessage.vue';
    import Icon from '~/components/icon.vue';
    import location from '~/assets/icon/location.svg';

    export default {
        name: 'current-location',

        components: {
            ErrorMessage,
            Icon,
        },

        data() {
            return {
                isError: false,
                location,
            };
        },

        methods: {
            getLocation() {
                const success = (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    this.$emit('userLocation', lat, lon);
                };

                const error = () => {
                    this.message = 'Unable to retrieve your location. Please, make sure your GPS is enabled';
                    this.isError = !this.isError;
                    setTimeout(() => {
                        this.isError = !this.isError;
                    }, 5000);
                };

                navigator.geolocation.getCurrentPosition(success, error);
            },
        },
    };
</script>

<style scoped lang="scss">
    @import '~assets/scss/colors';

    .Location {
        margin: 0 auto ;
    }
    .Location-button{
        align-items: center;
        background: color($theme-yellow, 900);
        border: none;
        color: color($black);
        font-size: 20px;
        font-weight: 500;
        padding: 10px;
        margin-bottom: 15px;
    }
</style>