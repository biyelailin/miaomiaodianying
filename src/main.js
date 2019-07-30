import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

// 注册axios
import axios from "axios"
Vue.prototype.axios = axios
// 注册公共组件
import Scroller from "@/components/Scorller/index.vue"
Vue.component('Scroller',Scroller)
// 创建过滤器
Vue.filter('fliterImg',function(msg,arg){
  //内部处理的逻辑
    return msg.replace(/w\.h/,arg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
