import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入路由
import Home from '@/views/Home'
import List from '@/views/List'
import Ranging from '@/views/Ranging'
import ShopCar from '@/views/ShopCar'
import My from '@/views/My'

Vue.use(VueRouter) 

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/ranging',
    component: Ranging
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '*',
    component: Home
  },
]
const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})
export default router
