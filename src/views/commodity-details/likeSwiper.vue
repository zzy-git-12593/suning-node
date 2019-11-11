<!--商品详情 店铺猜你喜欢轮播图-->
<template>
  <div class="likeswiper" >
    <div class="likeswiper-tab" >
        <span :class="{active1: msg=='1'}" @click="tabClick(1)" >{{commodityInfoList.subGoods.title}}</span>
        <span :class="{active1: msg=='2'}" @click="tabClick(2)">{{commodityInfoList.subGood.title}}</span>
    </div>
    <likeswiperleft v-if="msg===1" v-show="filterSubGoodsSwiperList">
      <ul class="swiper-slide" v-for="(item,index) in filterSubGoodsSwiperList" :key="index" >
        <li v-for="items in item" :key="items.sugGoodsName">
          <img :src="items.pictureUrl" />
          <p class="item-name">{{items.sugGoodsName}}</p>
          <p class="item-price">{{items.price}}</p>
        </li>
      </ul>
    </likeswiperleft>
    <likeswiperright v-if="msg===2" v-show="filterSubGoodSwiperList">
      <ul class="swiper-slide" v-for="(item,index) in filterSubGoodSwiperList" :key="index" >
        <li v-for="items in item" :key="items.sugGoodsName">
          <img :src="items.pictureUrl" />
          <p class="item-name">{{items.sugGoodsName}}</p>
          <p class="item-price">{{items.price}}</p>
        </li>
      </ul>
    </likeswiperright>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import likeswiperleft from "../swipers/likeSwiperLeft";
import likeswiperright from "../swipers/likeSwiperRight";
export default {
  computed:{
      ...mapState(['commodityInfoList']),
      ...mapGetters(['filterSubGoodsSwiperList']),
      ...mapGetters(['filterSubGoodSwiperList'])
  },
  data() {
    return {
        msg: 1,
    };
  },
  methods: {
      tabClick(msg) {
          this.msg = msg
      }
  },
  components: {
    likeswiperleft: likeswiperleft,
    likeswiperright: likeswiperright
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.likeswiper {
  width: 100%;
  background-color: #fff;
  margin-top: 9px;
  padding: 12px 6px 0;
}
.likeswiper .active1{
    font-size: 16px;
    border-bottom-color: #fc0;
    color: #333;
}
.likeswiper-tab{
    width: 100%;
    display: flex;
    justify-content: center;
}
.likeswiper-tab span{
    height: 30px;
    line-height: 25px;
    font-size: 15px;
    color: #333;
    margin: 0 10px;
    border-bottom: 3px solid #fff;
}
.likeswiper ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 4px 0;
}
.likeswiper ul li {
  width: 32%;
}
.likeswiper ul li img {
  width: 100%;
  height: 100%;
}
.likeswiper ul li .item-name{
    width: 100%;
    font-size: 14px;
    padding: 8px 0;
    color: #333;
    word-break: break-all;
    text-align: left;
    -webkit-line-clamp: 2;
    max-height: 50px;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    display: -webkit-flex;
    overflow: hidden;
}
.likeswiper ul li .item-price{
    width: 100%;
    text-align: left;
    color: #f42;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 15px;
}
</style>