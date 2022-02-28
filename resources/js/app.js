require('./bootstrap');
import router from './routes';
import VueRouter from "vue-router";
import Vue from 'vue';
import Index from './index.vue';

window.Vue = require('vue').default;

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        Index: Index
    }
});
