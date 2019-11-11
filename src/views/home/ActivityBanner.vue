<template>
  <div class="activity-banner">
    <!-- 活动banner -->
    <div class="banner-header">
      <div class="bgimg">
        <img src="/images/homebanner/iphone活动.gif" alt />
      </div>
      <div class="active-img" v-for="(item,index) in activeList" :key="index">
        <img :src="item.imgUrl" alt />
      </div>
    </div>
    <!-- banner内容 -->
    <div class="banner-content">
      <div class="banner-hor-view">
        <div class="electric"></div>
        <div class="wine"></div>
      </div>
      <div class="banner-type-view">
        <div class="moblie">
          <img src="/images/homebanner/苹果手机.jpg" alt />
          <div class="banner-type-view-title">
            手机通讯
            <br />每满500减50
          </div>
        </div>
        <div class="golden">
          <img src="/images/homebanner/项链.jpg" alt />
          <div class="banner-type-view-title">
            黄金项链
            <br />每满500减50
          </div>
        </div>
        <div class="drink">
          <img src="/images/homebanner/德亚奶粉.jpg" alt />
          <div class="banner-type-view-title">
            冲调饮品
            <br />2件8折
          </div>
        </div>
        <div class="cosmetics">
          <img src="/images/homebanner/口红.jpg" alt />
          <div class="banner-type-view-title">
            全球购
            <br />低至5折
          </div>
        </div>
      </div>
      <div class="banner-footer-img"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeList: [
        {
          id: 0,
          imgUrl:
            "https://image1.suning.cn/uimg/b2c/qrqm/0070130362000000010288345470_200x200.jpg?ver=2001&format=_is_200w_200h&from=mobile"
        },
        {
          id: 0,
          imgUrl:
            "https://image2.suning.cn/uimg/b2c/qrqm/0070128552000000000162597223_200x200.jpg?ver=2000&format=_is_200w_200h&from=mobile"
        },
        {
          id: 0,
          imgUrl:
            "https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000011318763048_200x200.jpg?ver=2000&format=_is_200w_200h&from=mobile"
        }
      ]
    };
  }
};
</script>
<style>

.banner-header {
  width: 100%;
  position: relative;
}
.bgimg img {
  display: block;
  width: 100%;
  height: 100%;
}
.active-img {
  width: 17%;
/* height: 20%; */
  position: absolute;
  top: 16px;
  left:38px;
}
.active-img img {
  width: 100%;
  height: 100%;
}
.banner-type-view {
  text-align: center;
  font-size: 12px;
  color: white;
}
.banner-type-view-title {
  padding-top: 15px;
}
.banner-type-view img {
  width: 70px;
  height: 70px;
  margin: 10px 10px 0 12px;
}
.banner-footer-img {
  background: url("https://image3.suning.cn/uimg/cms/img/157112920411872639.png?from=mobile")
    no-repeat;
  height: 6px;
}

.active-show {
  transition: scale3d(0, 0, 0);
}
.banner-hor-view,
.banner-type-view {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.electric {
  width: 50%;
  background: url("/images/homebanner/创维美的.png") no-repeat;
  background-size: 100% 100%;
}
.wine {
  /* flex-grow: 1; */
  width: 50%;
  background: url("/images/homebanner/品质美酒.jpg") no-repeat;
  height: 75px;
  background-size: 100%;
}
.moblie {
  background: url("/images/homebanner/手机通讯.png") no-repeat;
  width: 26%;
  height: 100%;
  background-size:100%;
}
.golden {
  background: url("/images/homebanner/黄金.png") no-repeat;
  width: 24%;
  height: 100%;  
  background-size:100%;  
}
.drink {
  background: url("/images/homebanner/饮品背景.png") no-repeat;
  width: 24%;
  height: 100%;
  background-size:100%;  
}
.cosmetics {
  background: url("/images/homebanner/全球购背景.png") no-repeat;
  width: 26%;
  height: 100%;
  background-size:100%;  
}
</style>