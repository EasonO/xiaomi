<template>
    <div class="login">
        <!-- 登录logo -->
        <div class="container">
            <a href="/index"><img v-lazy="'/imgs/login-logo.png'"></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3><span class="checked">账号登陆</span><span class="sep-line">|</span><span>扫码登陆</span></h3>
                    <div class="input">
                        <input type="text" placeholder="请输入账号" v-model="username">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">立即注册<span>|</span>忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>    
</template>  

<script>
// 什么是vuex？为什么要使用vuex？
import NavFooter from './../components/NavFooter'
import { mapActions } from 'vuex';
export default {
    name:'login',
    components:{
        NavFooter
    },
    data(){
        return{
            username:'',
            password:'' ,
            userId:''
        }   
    },
    methods:{
        login(){  
            // 什么是解构？为什么可以直接从this结构出username 和 password
            // let { username,password } = this;
            let username=this.username;
            let password=this.password;
            console.log(username,password)
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
                // 什么是cookie？为什么使用cookie
                this.$cookie.set('userId',res.id,{expires:'1M'});
                console.log(res.username);           
                this.$store.dispatch('saveUserName',res.username);
                this.$router.push('/index');
            })
        },
        register(){
            this.axios.post('/user/register',{
                username:'admin',
                password:'admin',
                email:'admin@163.com'
            }).then(()=>{
                alert('注册成功');
            })
        },
        
    }
}
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.login{
    &>.container{
        height:113px;
        img{
            width:auto;
            height:100%;
        }
    }
    .wrapper{
        background: url('/imgs/login-bg.jpg') no-repeat center;
        .container{
            height: 576px;
        }
        .login-form{
            box-sizing: border-box;
            position: absolute;
            right: 0;
            bottom: 29px;
            width: 410px;
            height: 510px;
            background-color: #fff;
            padding-left: 31px;
            padding-right: 31px;
            h3{
                line-height: 23px;
                font-size: 23px;
                text-align: center;
                margin: 40px auto 50px;
                .checked{
                    color:#FF6600;
                }
                .sep-line{
                    margin:0 32px;
                }
            }
            .input{
                width: 348px;
                height: 50px;
                border: 1px solid #E5E5E5;
                margin-bottom: 20px;
                input{
                    width: 100%;
                    height: 100%;
                    border: none;
                    padding: 18px;
                }
            }
            .btn{
                margin-top: 10px;
                margin-bottom: 14px;
                width: 100%;
                line-height: 50px;
                font-size: 16px;
            }
            .tips{
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                cursor: pointer;
                .sms{
                    color: $colorA;
                }
                .reg{
                    color: #999999;
                    span{
                        margin: 0 7px;
                    }
                }
            }
        }
    }
}
</style>