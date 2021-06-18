import { createApp } from "vue";
import router from "./router/router";
import "./index.css";
import App from "./App.vue";
import i18n from "./i18n/index.js";

createApp(App).use(i18n).use(router).mount("#app");
