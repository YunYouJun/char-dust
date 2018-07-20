import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-theme-ink'

import './utils/test.js'

Vue.use(ElementUI)
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
import VueAboutMe from 'vue-about-me'
Vue.use(VueAboutMe)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')