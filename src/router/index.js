import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogginPage from '../components/LogginPage.vue'
import MenuPage from '../components/MenuPage.vue'
import ChatRoom from'../components/ChatRoom.vue'
import FriendStatus from '../components/FriendStatus.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LogginPage
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPage
  },
  {
    path: '/chatroom/:id',
    name: 'chatroom/:id',
    component: ChatRoom
  },
  {
    path: '/friendstatus',
    name: 'friendstatus',
    component: FriendStatus
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
