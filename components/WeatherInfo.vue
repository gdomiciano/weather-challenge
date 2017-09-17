<template>
    <div class="Weather">
        <div class="Weather-location">
            <p class="Weather-location--city">{{info.name}}</p>
            <p class="Weather-location--country">{{info.sys.country}}</p>
        </div>
        <div class="Weather-info">
            <p class="Weather-info--current">{{info.main.temp}}°C</p>
            <p class="Weather-info--extremes">
                <span class="Weather-info--min">{{info.main.temp_min}}°C</span>
                <span class="Weather-info--max">{{info.main.temp_max}}°C</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'weather-info',
        props: ['info'],
    };
</script>

<style scoped lang="scss">
    .Weather{
        border-bottom: none;

    }

</style>