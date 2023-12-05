//왠만하면 손대지 않기 얘를 시작점으로 vue를 만든다

import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'  //모든 component들이 공용으로 쓸 경우
import store from './store.js'

createApp(App).use(store).mixin(mixin).directive('focus',{
    mounted(el, binding, vnode, prevVNode){
        console.log('mounted', el, binding, vnode, prevVNode);
        if(binding.value){
            el.style.color = 'red';
        }
    },
    updated(el, binding, vnode, prevVNode){
        console.log('updated', el, binding, vnode, prevVNode);
        if(binding.value){
            el.style.color ='blue';
        }else{
            el.style.color = 'yellow'
        }
    }
}).mount('#app')
