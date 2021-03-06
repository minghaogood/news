import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import axios from "axios";
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:3000"
Vue.use(Vant);
Vue.config.productionTip = false
router.beforeEach((to, from, next)=>{
  if(to.path === "/personal"){
    const userJson = JSON.parse(localStorage.getItem("userInfo")) || {};

    if(userJson.token){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
