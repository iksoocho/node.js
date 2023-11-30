import { createApp } from 'vue'
import App from './App.vue'
//router를 사용해서 component를 처리하겠다
import router from './router'

createApp(App).use(router).mount('#app')
