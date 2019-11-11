 <!--商品详情介绍轮播图-->
<template>
    <div class="comswipers-tc">
        <div class="nav-comSwiper">
            <ComSwiper>
                <div class="swiper-slide top-swiper-slide" v-for="(item,index) in commodityInfoList.imgList" :key="index">
                    <img :src="item" alt />
                </div>
            </ComSwiper>
            <div class="mui-icon-comSwiper" :class="{active2: isShow, active3: msg}">
                <span class="el-icon-arrow-left" @click="backClick"></span>
                <span v-if="isShow">商品详情</span>
                <p @click="comSwiperUpClick">
                    <span class="el-icon-minus"></span>
                    <span class="el-icon-minus"></span>
                    <span class="el-icon-minus"></span>
                </p>
            </div>
        </div>

        <!--弹窗-->
        <div class="comswiper-tc" ref="ref10">
            <comSwiperTc @com-swiper-down-click="comSwiperDownClick">
            </comSwiperTc>
        </div>

        <!--遮罩层-->
        <div class="zzc-box" ref="zzc10" @click="zzcClick"></div>


    </div>
</template>
<script>
import comSwiperTc from './pro-windows/comSwiper'
import ComSwiper from "../swipers/comSwiper";
import {mapState} from 'vuex'
export default {
    props: ['isShow','msg'],
    data(){
        return {
            imgList: [
                {
                    id: 1,
                    url: '//imgservice.suning.cn/uimg1/b2c/image/Qn7b9Gmyw-MJigi8TinMjw.jpg_800w_800h_4e_100Q'
                },
                {
                    id: 2,
                    url: '//imgservice.suning.cn/uimg1/b2c/image/Qn7b9Gmyw-MJigi8TinMjw.jpg_800w_800h_4e_100Q'
                },
                {
                    id: 3,
                    url: '//imgservice.suning.cn/uimg1/b2c/image/mDftoylWRDbwwwQDWQINtQ.jpg_800w_800h_4e_100Q'
                },
                {
                    id: 4,
                    url: '//imgservice.suning.cn/uimg1/b2c/image/LbtxdV9KutPS5BrOGq8fXg.jpg_800w_800h_4e_100Q'
                },
                {
                    id: 5,
                    url: '//imgservice.suning.cn/uimg1/b2c/image/IwQ5kvaLMpLj_51_6Us30g.jpg_800w_800h_4e_100Q'
                }
            ]
        }
    },
    computed:{
        ...mapState(['commodityInfoList'])
    },
    mounted(){
        console.log(this.commodityInfoList)
    },
    methods: {
        backClick(){
            this.$router.go(-1)
        },
        comSwiperUpClick() {
            this.$refs.ref10.style.display = 'block'
            this.$refs.zzc10.style.display = "block"
        },
        comSwiperDownClick() {
            this.$refs.ref10.style.display = "none"
            this.$refs.zzc10.style.display = "none"
        },
        zzcClick() {
            this.$refs.ref10.style.display = "none"
            this.$refs.zzc10.style.display = "none"
        }
    },
    components: {
        ComSwiper,
        comSwiperTc
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.nav-comSwiper img{
    width: 100%;
    height: 100%;
}
.nav-comSwiper{
    position: relative;
    z-index: 90;
    background-color: #fff;
}
.mui-icon-comSwiper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 10px;
    position: fixed;
    top: 0;
    z-index: 1;
}
.mui-icon-comSwiper .el-icon-arrow-left{
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, .6);
    color: #333;
    border-radius: 50%;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
}
.nav-comSwiper p{
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, .6);
    color: #333;
    border-radius: 50%;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}
.nav-comSwiper .el-icon-minus{
    width: 30px;
    height: 6px;
    font-weight: bold;
}

/*动画效果*/
.active3{
    animation: myfirst 2s;
}
@keyframes myfirst{
    0% {
        transition: all 1s;
        transform: translateY(0)
    }
    50% {
        transition: all 1s;
        transform: translateY(-50px)
    }
    100% {
        transition: all 1s;
        transform: translateY(0)
    }
}

/**/ 
.nav-comSwiper .active2{
    background-color: #fff
}

/*弹窗*/
.comswiper-tc{
    width: 100%;
    height: 30%;
    position: fixed;
    z-index: 9000;
    padding: 5px;
    top: 0;
    left: 0;
    display: none;
}

/*遮罩层*/
.comswipers-tc .zzc-box{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index:  5000;
    display: none;
}
</style>