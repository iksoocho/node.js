import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',      
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.  lazy-load : 해당경로를 호출했을떄 해당 component를 불러오도록 한다 > 한방에 다 불러다 놓고 띄울라면 처음 들어갔을때 오래걸림
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }  // /* webpackChunkName: "about" */ -> 처음 만들때 about이라는 이름으로 따로 분리 시킨다
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes        //routing 목록
})

export default router
