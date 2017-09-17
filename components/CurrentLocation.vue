<template>
    <div>
        <button @click="getLocation">Weather from my location</button>
        <error-message v-if="isError" :message="message"/>

    </div>
</template>

<script>
    import ErrorMessage from '~/components/ErrorMessage.vue';

    export default {
        name: 'current-location',
        data() {
            return {
                isError: false,
            };
        },
        components: {
            ErrorMessage,
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

<style scoped>

</style>