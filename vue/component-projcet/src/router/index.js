import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import ListBinding from '../views/ListBinding.vue'
import IfBinding from '../views/IfBinding.vue'
import OnEvent from '../views/OnEvent.vue'
import Options from '../views/Options.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path :'/dataBinding',
    name:'dataBinding',
    component: DataBinding    //import 한 새끼 선언
  },
  {
    path : '/listBinding',
    name : 'listBinding',
    component : ListBinding
  },
  {
    path : '/ifBinding',
    name : 'ifBinding',
    component : IfBinding
  },
  {
    path : '/onEvent',
    name : 'onEvent',
    component : OnEvent
  },
  {
    path : '/options',
    name : 'options',
    component : Options
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
