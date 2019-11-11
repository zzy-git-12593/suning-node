import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Type from '../components/type/types'
import Other from '../components/other/other'
import ShoppingCar from '../components/shopping-car/shoppingCar'
import MyYgLogin from '../components/my-yg/myYgLogin'
import MyYgUnLogin from '../components/my-yg/myYgUnLogin'
import CommpiltyIntroduction from '../components/commpilty-introduction/comIntrouduction.vue'
import HomePage from '../components/homepage/homePage.vue'
import Register from '../views/my-yg/not-logged-in/Register.vue'

import Search from '../components/search/searchs.vue'
import SearchOver from '../views/search/SearchOver.vue'

// 解决路由跳转，拦截报错Uncaught (in promise)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
let router =new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/search',
      component: Search,
      children: [{
        path: 'searchover',
        component: SearchOver
      }]
    },
    {
      path: '/myygunlogin',
      component: MyYgUnLogin
    },
    {
      path:'/register',
      component:Register
    },
    {
      path: '/commpiltyintroduction',
      component: CommpiltyIntroduction
    },
    {
      path: '*',
      redirect: '/homepage/home'
    },
    {
      path: '/homepage',
      redirect: '/homepage/home',
    },
    
    {
      path: '/homepage',
      component: HomePage,
      children: [{
          path: 'home',
          component: Home
        },
        {        
          path: 'type',
          component: Type
        },
        {
          path: 'other',
          component: Other
        },
        {
          path: 'shoppingcar',
          component: ShoppingCar
        },
        {
          path: 'myyglogin',
          component: MyYgLogin,
          meta:{
            requireAuth:true
          }
        }
      ]
    },
  ]
})

export default router