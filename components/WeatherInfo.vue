<template>
    <div class="Weather">
        <div class="Weather-location">
            <p class="Weather-location--city">Diadema</p>
            <p class="Weather-location--country">BR</p>
        </div>
        <div class="Weather-info">
            <p class="Weather-info--current">20°C</p>
            <p class="Weather-info--extremes">
                <span class="Weather-info--min">12°C</span>
                <span class="Weather-info--max">25°C</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'weather-info',
    }
</script>

<style scoped>

</style>