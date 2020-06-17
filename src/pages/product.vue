<template>
    <div class="product">
        <!-- 产品参数导航栏 -->
        <product-param v-bind:title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <!-- 产品页主体开始 -->
        <div class="content">
            <!-- 产品大图1 -->
            <div class="item-bg">
                <h2>{{product.name}}</h2>
                <h3>{{product.subtitle}}</h3>
                <p>
                    <a href="" id="">全球首款双频 GP</a>
                    <span>|</span>
                    <a href="" id="">骁龙845</a>
                    <span>|</span>
                    <a href="" id="">AI 变焦双摄</a>
                    <span>|</span>
                    <a href="" id="">红外人脸识别</a>
                </p>
                <div class="price">
                    <span>￥<em>{{product.price}}</em></span>
                </div>
            </div>
            <!-- 产品大图2 -->
            <div class="item-bg-2"></div>
            <!-- 产品大图3 -->
            <div class="item-bg-3"></div>
            <!-- 产品轮播图 -->
            <div class="item-swiper">
                <swiper :options="swiperOptions">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <!-- 产品视频 -->
            <div class="item-video">
                <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
                <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <div class="video-bg" @click="showSlide=true"></div>
                <div class="video-box">
                    <!-- 视频遮罩  -->
                    <div class="overlay" v-if="showSlide"></div>
                    <div class="video" v-bind:class="{'slide':showSlide}">
                        <span class="icon-close" @click="showSlide=false"></span>
                        <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                    </div>
                </div>
            </div>
        </div>
        <!-- 产品页主体结束 -->
    </div>
</template>  

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ProductParam from './../components/ProductParam'
export default {
    name:'product',
    components:{
        Swiper,
        SwiperSlide,
        ProductParam
    },
    data(){
        return {
            showSlide:false,
            // 商品信息
            product:{},
            // 轮播图参数
            swiperOptions: {
                autoplay:true,
                slidesPerView:3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            }
        }
    },
    mounted(){
        this.getProductInfo();
    },
    methods:{
        getProductInfo(){
            let id = this.$route.params.id;
            console.log(id);
            this.axios.get(`/products/${id}`).then((res)=>{
                this.product = res;
            })
        },
        buy(){
            let id = this.$route.params.id;
            this.$router.push(`/detail/${id}`);
        },
        closeVideo(){

        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
    .product{
        .content{
            // 产品大图1样式
            .item-bg{
                background:url('/imgs/product/product-bg-1.png') no-repeat center;
                height:718px;
                text-align:center;
                h2{
                    font-size:80px;
                    padding-top:55px;
                }
                h3{
                    font-size:24px;
                    letter-spacing: 10px;
                }
                p{
                    margin-top:21px;
                    margin-bottom:40px;
                    a{
                        font-size:16px;
                        color:#333333;
                    }
                    span{
                        margin:0 15px;
                    }
                }
                .price{
                    font-size:30px;
                    color:#333333;
                    em{
                        font-style:normal;
                        font-size:38px;
                    }
                }
            }
            // 产品大图2样式
            .item-bg-2{
                background:url(/imgs/product/product-bg-2.png) no-repeat center;
                height:480px;
                background-size:1226px 397px;
            }
            // 产品大图3样式
            .item-bg-3{
                background:url(/imgs/product/product-bg-3.png) no-repeat center;
                height:638px;
                background-size:cover;
            }
            // 产品页轮播图样式
            .item-swiper{
                margin:36px auto 52px;
                .desc{
                    font-size:18px;
                    color:#333333;
                    text-align:center;
                }
                img{
                    width:100%;
                }
            }
            // 产品视频区域样式
            .item-video{
                height: 1044px;
                background-color: #070708;
                margin-bottom: 76px;
                color: #fff;
                text-align: center;
                h2{
                    font-size: 60px;
                    padding-top: 82px;
                    margin-bottom: 47px;
                }
                p{
                    font-size: 24px;
                    margin-bottom: 58px;
                }
                .video-bg{
                    background: url('/imgs/product/gallery-1.png') no-repeat center; 
                    background-size:cover;
                    width:1226px;
                    height:540px;
                    margin:0 auto 120px;
                    cursor:pointer;
                }
                .video-box{
                    // 为什么整个页面都有遮罩层效果
                    .overlay{
                        @include position(fixed);
                        background-color: #333333;
                        opacity: .4;
                        z-index: 10;
                    }
                    .video{
                        position: fixed;
                        top:-50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        z-index: 10;
                        width: 1000px;
                        height: 536px;
                        opacity: 0;
                        transition: all .6s;
                        &.slide{
                            top: 50%;
                            opacity: 1;
                        }
                        .icon-close{
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            @include bgImg(20px,20px,'/imgs/icon-close.png');
                            cursor: pointer;
                            z-index: 10;
                        }
                        video{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;// 让视频覆盖整个窗口
                            outline: none;
                        }
                    }

                }
            }
        } 
        .btn{
            margin-left: 20px;
            }
        }
</style>