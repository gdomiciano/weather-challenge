<template>
  <div class="City">
    <form
      class="City-form"
      @submit.prevent
    >
      <label class="City-form--label">Get weather from specific city:</label>
      <gmap-autocomplete
        class="City-form--input"
        :select-first-on-enter="selectFirst"
        @place_changed="getWeather"
      />
    </form>
    <error-message
      v-if="isError"
      class="City-error"
      :message="message"
    />
  </div>
</template>

<script>
import ErrorMessage from '~/components/ErrorMessage.vue'

export default {
  name: 'CityForm',

  layout: 'default',

  components: {
    ErrorMessage
  },

  data () {
    return {
      selectFirst: true,
      isError: false
    }
  },

  methods: {
    getWeather (place) {
      if (place.address_components && place.address_components.length > 1) {
        let city = place.address_components.filter(item => item.types[0].match('locality'))
        if (city.length === 0) city = place.address_components.filter(item => item.types[0].match('administrative_area_level_'))

        const country = place.address_components.filter(item => item.types[0].match('country'))

        const params = {
          city: city[0].long_name,
          country: country[0].short_name
        }

        console.log(params)

        this.$emit('selectedPlace', params)
      } else {
        const city = place.name || place.adr_address
        this.message = `Sorry, there is no weather information of ${city}. Try another city.`
        this.isError = !this.isError

        setTimeout(() => {
          this.isError = !this.isError
        }, 5000)
      }

      document.querySelector('.City-form--input').value = ''
    }
  }
}
</script>

<style scoped lang="scss">
    @import '~assets/scss/colors';

    .City {
        margin: 0 10px 30px;
    }

    .City-form--label,
    .City-form--input {
        display: inline-block;
        font-size: 20px;
        margin-bottom: 15px;
    }

    .City-form--input {
        line-height: 35px;
        padding: 0 5px;
        width: 100%;

        &:focus {
            border: color($theme-blue, 50) 1px solid;
            outline-color: color($theme-blue, 900);
        }
    }
</style>
