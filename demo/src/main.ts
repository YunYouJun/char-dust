import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// import "element-theme-ink";

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// your custom styles here
import 'element-plus/dist/index.css'
import './utils/test'
import './styles/index.scss'

// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

// https://github.com/YunYouJun/wc-github-corners
// use cdn in index.html
// import "wc-github-corners";

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
