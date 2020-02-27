<template>
  <div>
    <h3>{{ cityName }}</h3>
    <p>temperature:<strong> {{ currentTemp }}</strong></p>
    <p>
      <span v-if="hasMinTemp">min:<strong> {{ minTemp }}</strong></span>
      <span>max:
        <strong v-if="maxTemp !== ''"> {{ maxTemp }}</strong>
        <strong v-else> -- </strong>
      </span>
    </p>
  </div>
</template>


<script>
import { type } from 'os'
  export default {
    name: 'WeatherInfo',
    props: {
      cityName: {
        type: String,
        required: true
      },
      currentTemp: {
        type: Number,
        required: true
      },
      minTemp: {
        type: [Number,String],
        default: ''
      },
      maxTemp: {
        type: [Number, String],
        default: ''
      }
    },
    computed: {
      hasMinTemp() {
        return this.minTemp !== ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>