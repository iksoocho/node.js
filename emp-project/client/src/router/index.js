import { createRouter, createWebHistory } from 'vue-router'
import EmpList from '../views/EmpList.vue'
import EmpInfo from '../views/EmpInfo.vue'
import EmpInsert from '../views/EmpInsert.vue'
import EmpUpdate from '../views/EmpUpdate.vue'
import Home from '../views/MainComponent.vue'
import EmpForm from '../views/EmpFormView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/empList',
    name: 'empList',
    component: EmpList
  },
  {
    path: '/empInfo',
    name: 'empInfo',
    component: EmpInfo
  },
  {
    path: '/empInsert',
    name: 'empInsert',
    component: EmpInsert
  },
  {
    path: '/empUpdate',
    name: 'empUpdate',
    component: EmpUpdate
  },
  {
    path: '/empForm',
    name: 'empForm',
    component: EmpForm
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
