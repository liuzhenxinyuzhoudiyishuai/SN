import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入路由
import Home from '@/views/Home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/ranging',
    name: 'Ranging',
    component: () => import('../views/Ranging.vue')
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: () => import('../views/ShopCar.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
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
