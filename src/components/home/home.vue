<template>
  <div class="home-content">
    <Nav :class="{'home-nav-active':isNavShow}" ref="nav"></Nav>
    <Swiper></Swiper>
    <EnterList></EnterList>
    <Banner></Banner>
    <TouTiao></TouTiao>
    <TimeSale></TimeSale>
    <ActivityBanner></ActivityBanner>
    <DayStroll></DayStroll>
    <CoolPlay></CoolPlay>
    <Lifestyle></Lifestyle>
    <RecommendList></RecommendList>
    <Special></Special>
    <TipsMoney></TipsMoney>
    <GoodShop ref="goodShop"></GoodShop>
    <YouLike ref="like"></YouLike>
    <div class="el-icon-upload2 back_home" @click="goLike" v-show="isWindowTopShow"></div>
    <div class="dowload_btn">
      <img src="https://image1.suning.cn/uimg/cms/img/152853499252671742.png" alt="">
    </div>
  </div>
</template>

<script>
import Swiper from "../../views/home/Swiper";
import Nav from "../../views/home/Nav";
import EnterList from "../../views/home/EnterList";
import Banner from "../../views/home/Banner";
import TouTiao from "../../views/home/TouTiao";
import TimeSale from "../../views/home/TimeSale";
import ActivityBanner from "../../views/home/ActivityBanner";
import DayStroll from "../../views/home/DayStroll";
import CoolPlay from "../../views/home/CoolPlay";
import Lifestyle from "../../views/home/Lifestyle";
import RecommendList from "../../views/home/RecommendList";
import Special from "../../views/home/Special";
import TipsMoney from "../../views/home/TipsMoney";
import GoodShop from "../../views/home/GoodShop";
import YouLike from "../../views/home/yourLike";

import axios from "axios";
import { watch } from 'fs';
import bus from '@/bus'
export default {
  props:['isWindowTopShow','isNavShow'],
  mounted() {
    bus.$emit('offsetHeight',{likeOffsetTOP:this.$refs.like.$el.offsetTop,goodShopOffsetHeight:this.$refs.goodShop.$el.offsetHeight,isWindowTopShow:this.isWindowTopShow})
  },
  methods:{
    goLike(){
     window.scrollTo(0,0)
    }
  },
  destroyed() {
    window.onscroll = null;
  },
  components: {
    Swiper,
    Nav,
    EnterList,
    Banner,
    TouTiao,
    ActivityBanner,
    TimeSale,
    DayStroll,
    CoolPlay,
    Lifestyle,
    RecommendList,
    Special,
    TipsMoney,
    GoodShop,
    YouLike
  }
};
</script>
<style>
.dowload_btn{
  position: fixed;
  top: 62%;
  right: 2%;
  width: 14%;
  z-index: 99;
}
.dowload_btn img{
  width: 100%
}
.home-content {
  margin-bottom: 57px;
}
.home-nav-active{
  background: linear-gradient(0deg, #2676fa 0, #23d7ff 90%)
}
.back_home{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  color: white;
  background: #666666;
  position: fixed;
  bottom: 100px;
  right: 30px;
  text-align: center;
  font-size: 30px;
  z-index: 99;
}
</style>