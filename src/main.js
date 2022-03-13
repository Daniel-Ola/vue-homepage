import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AosVue from "aos-vue";

import "./assets/css/tailwind-output.css";
// import './assets/css/font-awesome.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

createApp(App).use(store).use(router).use(AosVue).mount("#app");
