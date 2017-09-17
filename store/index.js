import Vuex from 'vuex';

const store = () => new Vuex.Store({

    state: {
        randomPlace: null,
        selectedPlace: null,
        currentLocation: null,
    },
    mutations: {
        GET_RANDOM_PLACE(state, model) {
            this.state.randomPlace = model;
        },
        GET_SELECTED_PLACE(state, model) {
            this.state.plaselectedPlaceces = model;
        },
        GET_CURRENT_LOCATION(state, model) {
            this.state.currentLocation = model;
        },
    },
    actions: {
        async nuxtServerInit({ dispatch, state }) {
            // Always get places
            if (!state.places) await dispatch('getRandomPlace');
        },
        async getRandomPlace({ commit }) {
            const lat = Math.floor(Math.random() * (90 - (-90)) + (-90));
            const lon = Math.floor(Math.random() * (180 - (-180)) + (-180));
            const ramdomPlace = await this.$axios.$get(`/weather?lat=${lat}&lon=${lon}&units=metric&appid=cecf2cdf0f3ee489ba06aff6db8cb201`);
            commit('GET_RANDOM_PLACE', ramdomPlace);
        },
        async getSelectedPlace({ commit }) {
            const places = await this.$axios.get('https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/static/city.list.json');
            commit('GET_RANDOM_PLACE', places.data);
        },
        async getCurrentLocation({ commit }) {
            const places = await this.$axios.get('https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/static/city.list.json');
            commit('GET_RANDOM_PLACE', places.data);
        },
    },
});

export default store;
