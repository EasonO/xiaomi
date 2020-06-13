<template>
    <div class="index">
        <div class="container">
            <!-- 轮播区域开始 -->
            <div class="swiper-box">
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
            ]
        }
    },
    // 生命周期钩子函数
    mounted() {
      
    }
}
</script>

<style lang="scss">
    .index{
        .swiper-box{
            .swiper-container{
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>