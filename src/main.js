import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Main from "./components/Main.vue";
import Anime from "./components/Anime.vue";
import Search from "./components/Search.vue";
import TrendingAnimes from "./components/TrendingAnimes.vue";

const routes = [
    { path: "/", component: Main },
    { path: "/anime/:id", component: Anime },
    { path: "/search", component: Search },
    { path: "/random", component: Anime },
    { path: "/trending", component: TrendingAnimes },
];

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: "history",
    routes,
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
