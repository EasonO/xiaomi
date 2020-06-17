<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // })
    // 通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // })
    // 本地集成mockjs实现数据mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // })
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
#app{
  position: relative;
}
</style>
