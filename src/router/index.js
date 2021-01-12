import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入路由
import Home from '@/views/Home'
<<<<<<< HEAD
// import List from '@/views/List'
// import Ranging from '@/views/Ranging'
// import ShopCar from '@/views/ShopCar'
// import My from '@/views/My'
// import Login from '@/views/Login'
=======
>>>>>>> 0f005d8a475a37df8fb9a39e7e0b070f3d9823cf


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name:'Home',
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/list',
<<<<<<< HEAD
    name:'List',
    component: () => import("../views/List.vue"),

  },
  {
    path: '/ranging',
    name:'Ranging',
    component: () => import("../views/Ranging.vue"),
  },
  {
    path: '/shopcar',
    name:'ShopCar',
    component: () => import("../views/ShopCar.vue"),
  },
  {
    path: '/my',
    name:'My',
    component: () => import("../views/My.vue"),
  },
  {
    path: '/login',
    name:'Login',
    component: () => import("../views/Login.vue"),
=======
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
>>>>>>> 0f005d8a475a37df8fb9a39e7e0b070f3d9823cf
  },
  {
    path: '*',
    component: Home
  },
  {
    path: '',
    component: Home
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
