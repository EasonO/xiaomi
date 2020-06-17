import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入vue-axios模块为了方便发送axios请求
import VueAxios from 'vue-axios'
// 引入图片懒加载组件
import VueLazyLoad from 'vue-lazyload'
// 引入vuecookie组件
import VueCookie from 'vue-cookie'

import App from './App.vue'
// import env from './env'

const mock = false;
if(mock){
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8080; 
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    if(location.pathname!="/index"){
      window.location.href = '/login';
    // return Promise.reject(res);
    }
  } else{
    console.log(res.msg);
    alert(res.msg);
    // return Promise.reject(res);
  }
});
//  
// },(error)=>{
//   let res = error.response;
//   Message.error(res.data.Message);
//   return Promise.reject(error);
// });

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')