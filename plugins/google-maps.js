import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

const mapsKey = 'AIzaSyBLuYH7k-mAr7Q6zwxkQ7USYHViUkIUPl8';

Vue.use(VueGoogleMaps, {
    load: {
        key: mapsKey,
        libraries: 'places',
        language: 'en',
    },
});
