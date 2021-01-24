import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import {
  Button,
  Form,
  FormItem,
  Header,
  Input,
  InputNumber,
  Main,
  Upload,
  Message,
} from "element-ui";
import "element-theme-ink";

import "./utils/test.js";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Header);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Main);
Vue.use(Upload);
Vue.use(Message);

Vue.config.productionTip = false;

Vue.prototype.$message = Message;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
