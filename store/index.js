export default {
  state () {
    return {
      tempInfo: {},
      error: undefined
    }
  },
  getters: {
    tempInfo: state => state.tempInfo,
    error: state => state.error
  },
  actions: {
    async getRandomTempInfo ({commit}) {
      const lat = Math.floor(Math.random() * (90 - (-90)) + (-90))
      const lon = Math.floor(Math.random() * (180 - (-180)) + (-180))

      const info = await this.$axios.$get(process.env.NUXT_APP_API_BASE_URL, {
        params: {
          lat,
          lon,
          appid: process.env.NUXT_APP_API_ID
        }
      })

      commit('setTempInfo', info)
      // info.name ? commit('setTempInfo', info) : commit('setError', info.data)
    }
  },
  mutations: {
    setTempInfo (state, info) {
      state.tempInfo = info
      console.log(state.tempInfo)
    },
    setError (state, info) {
      state.error = info
    }
  }
}
