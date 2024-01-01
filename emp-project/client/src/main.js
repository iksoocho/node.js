import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixin from './mixin'
import Vuetify from 'vuetify'

createApp(App).use(router).use(Vuetify).mixin(mixin).mount('#app')
