import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入vue-axios模块为了方便发送axios请求
import VueAxios from 'vue-axios'
// 引入图片懒加载组件
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
// import env from './env'

const mock = true;
if(mock){
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/login';
  }else{
    alert(res.msg);
  }
})
// 请求拦截?

Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')