<template>
  <div class="mobile">
    <div class="mobile-title-wrapper">
      <div class="mobile-title">手机馆</div>
      <div class="mobile-spoint">爆款五折起</div>
    </div>
    <div class="mobile-time-wrapper">
      <div class="time-tag">手机新品抢鲜看</div>
    </div>
    <div class="mobile-info-wrapper">
      <div class="mobile-info" v-for="item in mobileList" :key="item.id">
        <img :src="item.img" alt />
        <div class="mobile-price" v-if="item.price">￥{{item.price}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobileList: [
        {
          id: 0,
          img:
            "https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000010606656136_200x200.jpg?ver=2043&from=mobile",
          price: ""
        },
        {
          id: 1,
          img:
            "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000010629204011_200x200.jpg?ver=2030&from=mobile",
          price: ""
        }
      ]
    };
  }
};
</script>
<style>
.mobile {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.mobile-title-wrapper,
.mobile-time-wrapper,
.mobile-info-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.mobile-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.mobile-spoint {
  background-image: linear-gradient(-90deg,#fa3b26 3%,#ff4d8a 96%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  text-emphasis: center;
  margin-left: 5px;
  padding: 0 10px;
}
.time-tag {
  font-size: 12px;
  color: #999999;
}
.mobile-info{
  width: 50%;
}
.mobile-info img {
  width: 80%;
  height:  80%;
}
.mobile-price{
  font-size: 12px;
  color: #ff4950;
  text-align: center;
  line-height: 12px;
}
</style>