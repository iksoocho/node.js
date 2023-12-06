import { createRouter, createWebHistory } from 'vue-router'
import EmpList from '../views/EmpList.vue'
import EmpInfo from '../views/EmpInfo.vue'


const routes = [
  {
    path: '/',
    name: 'empList',
    component: EmpList
  },
  {
    path: '/empInfo',
    name: 'empInfo',
    component: EmpInfo
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
