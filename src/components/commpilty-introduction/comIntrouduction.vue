<template>
  <div class="comintrouduction box" v-if="commodityInfoList" @scroll="getScrollTop" ref="box">
    <div class="comintrouduction-top">
      <comSwiper :isShow="isShow" :msg="msg" class="comswipertop"></comSwiper>
      <comInfo></comInfo>
      <discounts></discounts>
      <oldNew></oldNew>
      <chosed></chosed>
      <addr></addr>
      <appraise ref="a"></appraise>
      <ask></ask>
      <shopTitle></shopTitle>
      <likeSwiper></likeSwiper>
      <comIntroducations></comIntroducations>


    <!--回到顶部-->
    <div class="comintrouduction-el-icon-top scrollTop" v-if="showTop" @click="toTop">
      <span class="el-icon-top"></span>
    </div>

    </div>
    <div class="comintrouduction-bottom">
      <footerTool></footerTool>
    </div>

    
  </div>
</template>
<script>
import comSwiper from "../../views/commodity-details/comSwiper";
import comInfo from "../../views/commodity-details/comInfo";
import discounts from "../../views/commodity-details/discounts";
import oldNew from "../../views/commodity-details/oldNew";
import chosed from "../../views/commodity-details/chosed";
import addr from "../../views/commodity-details/addr";
import appraise from "../../views/commodity-details/appraise";
import ask from "../../views/commodity-details/ask";
import shopTitle from "../../views/commodity-details/shopTitle";
import likeSwiper from "../../views/commodity-details/likeSwiper";
import comIntroducations from "../../views/commodity-details/comIntroducations";
import footerTool from "../../views/commodity-details/footerTool";
import { mapState } from "vuex";


export default {
  computed: {
    ...mapState(["commodityInfoList"])
  },
  components: {
    comSwiper,
    comInfo,
    discounts,
    oldNew,
    chosed,
    appraise,
    ask,
    shopTitle,
    likeSwiper,
    comIntroducations,
    footerTool,
    addr
  },
  data() {
    return {
      commodityID: "",
      isShow: false,
      msg: false,
      scrollTop: 0,
      showTop: false,
      scrollTrigger: false
    };
  },
  mounted() {
    this.commodityID = this.$route.query.commodityID
    console.log(this.commodityID)
    this.$store.dispatch("getCommodityInfoActions", this.commodityID)
  },
  methods: {
    toTop() {
      let that = this
      if (that.scrollTrigger) {
        return   // 防止用户频繁点击返回顶部按钮，待返回顶部成功后设置scrollTrigger为初始值 
      }
      // 获取当前距离顶部的数值，设置每次上滑的高度直到滚动到顶部为止 
      let scrollTop = this.scrollTop
      let steep = scrollTop / 2000
      let timer = setInterval(() => {
        that.scrollTrigger = true
        // 上滑滚动的速度慢慢加快，第一次走2000/1,然后减去已走的距离，下一次用剩下的距离再减去步进值，步进值也是不断变化，这样速度会越来越快 
        scrollTop -= steep
        // 步进值不改变的话会匀速缓慢上滑，不断增加步进值上滑的距离增加，视觉效果速度变快
        steep += 5;
        if (scrollTop <= 0) {
          clearInterval(timer)
          that.scrollTrigger = false
        }
        // 由于是加在box上的滚动，直接用window.scrollTop无效，查看了getScrollTop方法滚动的元素，所以加在box上 
        that.$refs.box.scrollTop = scrollTop
      }, 30)
    },
       
    getScrollTop(e) { // 监听滚动条
      let that = this  // 设备高度
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      let scrollTop = e.srcElement.scrollTop
      this.scrollTop = scrollTop
      if (scrollTop > (2*clientHeight - 92)) {  // 2倍像素除以2，-92是header和footer的高度
        that.showTop = true
      } else { 
        that.showTop = false
      }
      if (scrollTop > (clientHeight/2) - 92) {
        that.isShow = true
      } else {
        that.isShow = false
      }
      if (scrollTop = -10) {
        that.msg = true
      } else {
        that.msg = false
      }
    }
  },
  destroyed() {
    window.onmousewheel = null;
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.comintrouduction{
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}
.comintrouduction-bottom{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 200;
}

.comintrouduction-el-icon-top{
  position: fixed;
  z-index: 99;
  right: 5%;
  bottom: 20%;
}

/*回到顶部*/
.comintrouduction-el-icon-top .el-icon-top{
  font-size: 25px;
  color: black;
  padding: 5px;
  border-radius: 50%;
  background-color: #fc0;
  font-weight: bold;
}
.comintrouduction .top{
  padding: 10px;
  background: rgba(0, 153, 229, .7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>