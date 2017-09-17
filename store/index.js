import Vuex from 'vuex';

const store = () => new Vuex.Store({

    state: {
        place: null,
    },
    mutations: {
        GET_PLACE_WEATHER(state, model) {
            this.state.place = model;
        },
    },
    actions: {
        async nuxtServerInit({ dispatch, state }) {
            // Always get places
            if (!state.place) await dispatch('getRandomPlace');
        },
        async getRandomPlace({ commit, dispatch }) {
            const lat = Math.floor(Math.random() * (90 - (-90)) + (-90));
            const lon = Math.floor(Math.random() * (180 - (-180)) + (-180));
            const ramdomPlace = await this.$axios.$get(`/weather?lat=${lat}&lon=${lon}&units=metric&appid=cecf2cdf0f3ee489ba06aff6db8cb201`);
            if (ramdomPlace.name) {
                commit('GET_PLACE_WEATHER', ramdomPlace);
            } else {
                await dispatch('getRandomPlace');
            }
        },

        async getSelectedPlace({ commit }, city, country) {
            const userCity = await this.$axios.$get(`/weather?q=${city},${country}&units=metric&appid=cecf2cdf0f3ee489ba06aff6db8cb201`);
            commit('GET_PLACE_WEATHER', userCity);
        },

        async getCurrentLocation({ commit }, position) {
            const location = await this.$axios.$get(`/weather?lat=${position.lat}&lon=${position.lon}&units=metric&appid=cecf2cdf0f3ee489ba06aff6db8cb201`);
            commit('GET_PLACE_WEATHER', location);
        },
    },
});

export default store;
