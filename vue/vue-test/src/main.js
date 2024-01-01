import { createApp } from 'vue'
import App from './App.vue'
//router를 사용해서 component를 처리하겠다
import router from './router'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

createApp(App).use(router).use(VCalendar,{}).mount('#app')
