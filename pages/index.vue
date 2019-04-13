<template>
  <section class="Content">
    <div>
      <weather-info :info="weatherInfo" />
      <city-form @selectedPlace="getCity" />
      <div class="Separator">
        <p class="Separator-text">
          or
        </p>
      </div>
      <current-location @userLocation="getUserLocation" />
    </div>
  </section>
</template>

<script>
import CityForm from '~/components/CityForm.vue'
import CurrentLocation from '~/components/CurrentLocation.vue'
import WeatherInfo from '~/components/WeatherInfo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CityForm,
    CurrentLocation,
    WeatherInfo
  },

  computed: {
    ...mapGetters ({
      'weatherInfo'
    })
  },

  methods: {
    async getCity (params) {
      await this.$store.dispatch('getSelectedPlace', params)
    },
    async getUserLocation (lat, lon) {
      const position = { lat, lon }
      await this.$store.dispatch('getCurrentLocation', position)
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/mixins';
@import '~assets/scss/colors';

.Content {
  @include center-vertical;
}

.Separator {
  margin-bottom: 30px;
  position: relative;

  &::before,
  &::after {
    border-top: color($theme-yellow, 900) 1px solid;
    content: "";
    display: block;
    width: 20%;
    position: absolute;
    top: 10px;
  }

  &::before{
    left: 25%;
  }

  &::after{
    right: 25%;
  }
}

.Separator-text {
  color: color($theme-blue, 900);
  font-size: 18px;
}

</style>
