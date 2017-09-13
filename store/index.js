import Vuex from 'vuex';

const store = () => new Vuex.Store({

    state: {
        places: null,
    },
    mutations: {
        GET_PLACES(state, model) {
            this.state.places = model;
        },
    },
    actions: {
        async nuxtServerInit({ dispatch, state }) {
            // Always get places
            if (!state.places) await dispatch('getPlaces');
        },
        async getPlaces({ commit }) {
            const places = await this.$axios.get('https://raw.githubusercontent.com/gdomiciano/weather-challenge/develop/static/city.list.json');
            commit('GET_PLACES', places.data);
        },
    },
});

export default store;
