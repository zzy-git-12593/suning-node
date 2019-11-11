import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 引入字体样式
import '../public/css/iconicon/iconfont.css'

import '../public/css/iconfont.css'

//引入element-ui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入axios库
import axios from 'axios'
Vue.prototype.axios = axios



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log(to)
    if(to.meta.requireAuth){
      if(localStorage.token){
        next()
      }else{
        next({
          path:'/myygunlogin'
        })
      }
    }else{
      next()
    }
}
)