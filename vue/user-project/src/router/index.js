import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserInfo from '../views/UserInfo.vue'
import UserInsert from '../views/UserInsert.vue'
import UserUpdate from '../views/UserUpdate.vue'

const routes = [
  
  {
    path: '/',
    name: 'userList',
    component : UserList
  },
  {
    path : '/userInfo',      //UserList.vue 에서  this.$router.push({path : '/userInfo', query : {userId : id} }); 여기서 정했던 경로
    name : 'userIfo',
    component : UserInfo

  },
  {
    path: '/userInsert',
    name: 'userInsert',
    component : UserInsert
  },
  {
    path: '/userUpdate',
    name: 'userUpdate',
    component : UserUpdate
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
