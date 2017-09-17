<template>
    <div>
        <button @click="getLocation">Weather from my location</button>
    </div>
</template>

<script>
    export default {
        name: 'current-location',
        methods: {
            getLocation(){

                const _this = this
                function success(position) {
                    console.log(position.coords)
                     let lat = position.coords.latitude;
                     let lon = position.coords.longitude;
                     _this.$emit('userLocation', lat, lon);

                }

                function error() {
                    console.log("Unable to retrieve your location");
                }

                navigator.geolocation.getCurrentPosition(success, error);
            }
        },
    }
</script>

<style scoped>

</style>