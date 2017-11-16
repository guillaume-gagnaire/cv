import Vue from 'vue'
import VueScrollTo from 'vue-scrollto';
import App from './components/App.vue'
import Store from './store.js'

Vue.use(VueScrollTo);

window.store = Store;

new Vue({
    el: '#app',
    data: {

    },
    render: h => h(App)
})
