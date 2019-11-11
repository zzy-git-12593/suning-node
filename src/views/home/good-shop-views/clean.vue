<template>
  <div class="clean">
    <div class="clean-title-wrapper">
      <div class="clean-title">爱干净</div>
      <!-- <div class="clean-spoint">大牌新品抢先</div> -->
    </div>
    <div class="clean-tag">过我要的生活</div>

    <div class="clean-info-wrapper">
      <div class="clean-info" v-for="item in cleanList" :key="item.id">
        <img :src="item.img" alt />
        <div class="clean-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cleanList: [
        {
          id: 0,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/hFjVCmWBQQzvRLLqAE49gw.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/QTpmQsIwjK9sjmFwCnMxQQ.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style>
.clean-info-wrapper {
  position: relative;
  overflow: hidden;
}

.clean {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.clean-title-wrapper,
.clean-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.clean-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}

.clean-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.clean-info {
  position: relative;
}
.clean-info img {
  width: 80%;
  height: 80%;
}
.clean-price {
  position: absolute;
  bottom: 2px;
  left: 20px;
  z-index: 10;
  font-size: 12px;
  color: #333333;
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 12px;
}
</style>