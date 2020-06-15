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
                <div  v-for="(item,index) in adsList" :key="index">
                    <a :href="'/product/'+item.id">
                        <img v-lazy="item.img">
                    </a> 
                </div>
            </div>
            <!-- 广告区域结束 -->

            <!-- banner图开始 -->
            <div class="banner">
                <a href="/product/30">
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>  
            </div>
            <!-- banner图结束 -->
        </div>
            <!-- 产品区域开始 -->
            <div class="product-box">
                <div class="container">
                   <h3>手机</h3>
                    <div class="wrapper">
                        <!-- 左边banner图 -->
                        <div class="phone-ads">
                            <a href="/product/12">
                                <img v-lazy="'/imgs/mix-alpha.jpg'">      
                            </a>   
                        </div>
                        <!-- 右边产品列表 -->
                        <div class="phone-list">
                            <div class="list" v-for="(arr,i) in phoneList" :key="i">
                                <div class="item" v-for="(item,j) in arr" :key="j">
                                    <span :class="{'new-pro':j%2==0}">新品</span>
                                    <div class="item-img">
                                        <img v-lazy="item.mainImage">
                                    </div>
                                    <div class="item-info">
                                        <h4>{{item.name}}</h4>
                                        <p>{{item.subtitle}}</p>
                                        <p class="price" @click="addCart(item.id)">{{item.price | currency}}</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div>
            <!-- 产品区域结束 -->   
        <service-bar></service-bar>
        <modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" :showModal="showModal" @submit="goToCart" @cancel="showModal=false">
            <template v-slot:body>
                <p>商品添加成功!</p>
            </template>
        </modal>
    </div>   
</template>

<script>
import ServiceBar from "./../components/ServiceBar"
import Modal from "./../components/Modal"
// 引入轮播组件（swiper组件），swiper组件很大，需要解构出来然后再引入
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
    name:'index',
    // 引入组件后使用它
    components:{
        ServiceBar,
        Swiper,
        SwiperSlide,
        Modal
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
            // 轮播图数据
            slideList:[
                {
                    id:'42',
                    // 为什么图片路径可以这样写
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
            // 轮播菜单数据
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
            // 广告位数据
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },
                {
                    id:34,
                    img:'/imgs/ads/ads-2.jpg'
                },
                {
                    id:35,
                    img:'/imgs/ads/ads-3.png'
                },
                {
                    id:36,
                    img:'/imgs/ads/ads-4.jpg'
                }
            ],
            phoneList:[],
            showModal:false
        }
    },
    // 生命周期钩子函数
    mounted() {
      this.init();
    },
    methods:{
        init(){
            // 为什么这里的路径可以直接写 /product?
            this.axios.get('/products',{
                params:{
                    categoryId:100012,
                    pageSize:14
                }
            }).then((res)=>{
                res.list = res.list.slice(6,14);
                this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
            })
        },
        // 为购物车图标点击事件
        addCart(id){
            this.showModal = true;
            // this.axios.post('/carts',{
            //     productId:id,
            //     selected:true
            // }).then(()=>{

            // }).catch(()=>{
            //     this.showModal = true;
            // })
        },
        // 为购物车图标的弹窗添加点击事件
        goToCart(){
            this.$router.push('/cart')
        }

    },
    filters:{
      currency(val){
          if(!val) return '0.00';
          return '￥' + val.toFixed(2) + '元';
      }
    }  
}
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";

    .index{
        // 轮播区域样式
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
        // 广告位样式
        .ads-box{
            display: flex;
            justify-content: space-between;
            div{
                width: 25%;
                box-sizing: border-box;
                margin:20px 15px 0px 0px;
                &:last-child{
                    margin-right: 0;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        // 广告位样式
        .banner{
            img{
                width: 100%;
                margin: 20px 0 20px 0;
            }
        }
        // 产品区样式
        .product-box{
            background-color: $colorJ;
            padding: 30px 0 50px;
            // 产品区标题样式
            h3{
                font-size: $fontF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
                margin-bottom: 10px;
            }
            // 产品区列表样式
            .wrapper{
                display: flex;
                // 左边广告图
                .phone-ads{
                    margin-right: 16px;
                    img{
                        width: 224px;
                        height: 619px;
                    }
                }
                // 右边手机列表
                .phone-list{
                    .list{
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .item{
                            width:236px;
                            height:302px;
                            background-color:$colorG;
                            text-align:center;
                            span{
                                display:inline-block;
                                width:67px;
                                height:24px;
                                font-size: 14px;
                                line-height: 24px;
                                color: $colorG;
                                &.new-pro{
                                    background-color: #7ecf68;
                                }
                                &.kill-pro{
                                    background-color: #e82626;
                                }             
                            }
                            .item-img{
                                img{
                                    height:195px;
                                    width: 100%;
                                }
                            }
                            .item-info{
                                h4{
                                    font-size:$fontJ;
                                    color:$colorB;
                                    line-height:$fontJ;
                                    font-weight:bold;
                                }
                                p{
                                    color:$colorD;
                                    line-height:13px;
                                    margin:6px auto 13px;
                                }
                                .price{
                                    color:#F20A0A;
                                    font-size:$fontJ;
                                    font-weight:bold;
                                    cursor:pointer;
                                    &:after{
                                        @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                        content:' ';
                                        margin-left:5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>