import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";

// import "element-plus/lib/theme-chalk/index.css";
import "element-theme-ink";

import "./utils/test";

import "./assets/scss/index.scss";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
