import Vue from 'vue'
import Vuex from 'vuex'
// 引入文件需要加路径 不然会认为是组件
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);



export default new Vuex.Store({
  // 当key和value一样时：
  // state:state可简写为state
  state:{
    // 登录用户名
    username:'',
    // 购物车商品数量
    cartCount:0
  },
  mutations:{
    saveUserName1(state,username){
      state.username = username;
    },
    saveCartCount1(state,cartCount){
      state.cartCount = cartCount;
    }
  },
  actions:{
    saveUserName(context,username){
      context.commit('saveUserName1',username);
    },
    saveCartCount(context,cartCount){
      context.commit('saveCartCount1',cartCount);
    },
  }
})
