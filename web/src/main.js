import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import Conversations from "./components/Conversations.vue";
import axios from "axios";
window.axios = axios;
loadFonts();

const routes = [
    { path: "/home", component: Home, name: "home" },
    { path: "/about", component: About, name: "about" },
    { path: "/helloworld", component: HelloWorld, name: "helloworld" },
    { path: "/", component: Login, name: "login" },
    { path: "/conversations", component: Conversations, name: "conversations"}
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).use(vuetify).mount("#app");
