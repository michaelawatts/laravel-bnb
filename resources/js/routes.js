import ExampleComponent from "./components/ExampleComponent"
import Bookables from "./bookables/Bookables"
import VueRouter from "vue-router";

const routes = [
    {
        path: '/',
        component: Bookables,
        name: 'home'
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;