import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";

// import "element-plus/lib/theme-chalk/index.css";
import "element-theme-ink";

import "./utils/test";
import "./styles/index.scss";

// https://github.com/YunYouJun/wc-github-corners
import "wc-github-corners";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
