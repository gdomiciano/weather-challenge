import Vuex from 'vuex'

const API_ID = 'cecf2cdf0f3ee489ba06aff6db8cb201'
const state = () => ({
  place: null
})

const getters = {
  weatherInfo: (state) => state.place
}

const mutations = {
  SET_PLACE_WEATHER (state, model) {
    /*eslint-disable */
    model.main.temp = Math.floor(model.main.temp);
    model.main.temp_min = Math.floor(model.main.temp_min);
    model.main.temp_max = Math.floor(model.main.temp_max);
    /* eslint-enable */
    state.place = model
  }
}

const actions = {
  async nuxtServerInit ({ dispatch, state }) {
    // Always get places
    if (!state.place) await dispatch('getRandomPlace')
  },

  async getRandomPlace ({ commit, dispatch }) {
    /*eslint-disable */
    const lat = Math.floor(Math.random() * (90 - (-90)) + (-90));
    const lon = Math.floor(Math.random() * (180 - (-180)) + (-180));
    /* eslint-enable */
    try {
      const ramdomPlace = await this.$axios.$get(`/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_ID}`)
      ramdomPlace.type = 'random'
      commit('SET_PLACE_WEATHER', ramdomPlace)
    } catch (error) {
      await dispatch('getRandomPlace')
    }
  },

  async getSelectedPlace ({ commit }, params) {
    try {
      const userCity = await this.$axios.$get(`/weather?q=${params.city},${params.country}&units=metric&appid=${API_ID}`)
      userCity.type = 'city'
      commit('SET_PLACE_WEATHER', userCity)
    } catch (error) {
      throw error
    }
  },

  async getCurrentLocation ({ commit }, position) {
    try {
      const location = await this.$axios.$get(`/weather?lat=${position.lat}&lon=${position.lon}&units=metric&appid=${API_ID}`)
      location.type = 'geolocation'
      commit('SET_PLACE_WEATHER', location)
    } catch (error) {
      throw error
    }
  }
}

export default Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
