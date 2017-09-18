<template>
    <div class="Weather">
        <div class="Weather-location">
            <h3 class="Weather-location--title">Location: </h3>
            <p class="Weather-location--city">{{info.name}},
                <span class="Weather-location--country">{{info.sys.country}}</span>
            </p>
        </div>
        <div class="Weather-info">
            <h3 class="Weather-info--title">Temperature:</h3>
            <p class="Weather-info--current">{{info.main.temp}}{{degreeSign}}{{unit}}</p>
        </div>
        <div class="Weather-info--aditional">
            <p class="Weather-info--extremes">
                <span class="Weather-info--min">
                    <icon class="Weather-icon--min" :glyph="tempMin" width="24" height="24"/>
                    {{info.main.temp_min}}{{degreeSign}}{{unit}}
                </span>
                 |
                <span class="Weather-info--max">
                    <icon class="Weather-icon--max" :glyph="tempMax" width="24" height="24"/>
                    {{info.main.temp_max}}{{degreeSign}}{{unit}}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import Icon from '~/components/icon.vue';
    import tempMax from '~/assets/icon/temp-max.svg';
    import tempMin from '~/assets/icon/temp-min.svg';

    export default {
        name: 'weather-info',
        props: ['info'],
        components: {
            Icon,
        },
        data() {
            return {
                tempMax,
                tempMin,
                unit: 'C',
                degreeSign: '°',
            };
        },
    };
</script>

<style scoped lang="scss">
    @import '~assets/scss/colors';

    .Weather {
        border: color($theme-yellow, 50) 2px inset;
        box-shadow: 0 0 5px 0px color($black);
        margin: 0 10px 40px;
    }

    .Weather-location,
    .Weather-info {
        display: inline-grid;
        padding: 15px;
        width: 50%;
    }

    .Weather-location {
        font-size: 22px;
        text-align: left;
    }

    .Weather-info {
        text-align: right;
    }

    .Weather-info--current {
        font-size: 40px;
    }

    .Weather-info--extremes {
        font-size: 22px;
        margin-bottom: 20px;
    }

    [class$="--title"] {
        color: color($theme-blue, 900);
        font-size: 20px;
        margin-bottom: 10px;
        text-align: left;
    }

    .Weather-icon--min {
        fill: color($theme-blue, 50);
    }

    .Weather-icon--max {
        fill: color($theme-yellow, 900);
    }

</style>