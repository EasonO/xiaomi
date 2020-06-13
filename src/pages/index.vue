<template>
    <div class="index">
        <div class="container">
            <!-- 轮播区域开始 -->
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <!-- <a v-bind:href="sub?'/detail/'+sub.id:''"> -->
                                        <a v-bind:href="sub?'/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <!-- <div class="children"></div> -->
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOptions">
                    <!-- 轮播大图 -->
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <!-- 前进后退按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <!-- 分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!-- 轮播区域结束 -->
        
            <!-- 广告区域开始 -->
            <div class="ads-box">
            </div>
            <!-- 广告区域结束 -->

            <!-- banner图开始 -->
            <div class="banner">
            </div>
            <!-- banner图结束 -->

            <!-- 产品区域开始 -->
            <div class="product-box">
            </div>
            <!-- 产品区域结束 -->

            </div>
        
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar"
// 引入轮播组件（swiper组件），swiper组件很大，需要解构出来然后再引入
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name:'index',
    // 引入组件后使用它
    components:{
        ServiceBar,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            // Swiper5/Swiper4的配置选项
            swiperOptions: {
                // 自动播放
                autoplay: true,
                // 循环播放
                loop:true,
                //切换效果
                effect : 'coverflow',
                    slidesPerView: 1,
                    centeredSlides: true,
                    coverflowEffect: {
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : true
                },
                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                // 前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            // Some Swiper option/callback...
            },
            // 由于后台没有轮播图数据，手动设置轮播图数据，并放到slideList数组中
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'43',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'44',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-5.jpg'
                }
            ],
            menuList:[
                [
                    {
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米CC9',
                    },{
                        id:31,
                        img:'/imgs/item-box-2.png',
                        name:'小米8青春版',
                    },{
                        id:32,
                        img:'/imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro',
                    },{
                        id:33,
                        img:'/imgs/item-box-4.jpg',
                        name:'移动4G专区',
                    }
                ],
                [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
        }
    },
    // 生命周期钩子函数
    mounted() {
      console.log(this.$route)
    }
}
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
    .test{
        z-index: 9999;
    }
    .index{
        .swiper-box{

            // 轮播菜单样式
            .nav-menu{
                position: absolute;
                box-sizing: border-box;
                width: 264px;
                height: 451px;
                z-index:2;
                padding: 26px 0;
                background-color: #33333352;
                .test-content{
                    background-color: #fff;
                }

                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            display: block;
                            position: relative;
                            color: #fff;
                            font-size: 16px;
                            padding-left: 30px;
                            &:after{
                                position: absolute;
                                right: 40px;
                                top: 17.5px;
                                content:' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                display:block;
                            }
                        }
                        .children{
                            display: none;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;
                            ul{
                                display:flex;
                                justify-content:space-between;
                                height:75px;
                                li{
                                    height:75px;
                                    line-height:75px;
                                    flex:1;
                                    padding-left:23px;
                                }
                                a{
                                    color:$colorB;
                                    font-size:14px;
                                }
                                img{
                                    width:42px;
                                    height:35px;
                                    vertical-align:middle;
                                    margin-right:15px;
                                }
                            }
                        }
                    }
                }
            }
            // 轮播图样式
            .swiper-container{
                height: 451px;
                .swiper-button-prev{
                    left: 271px;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>