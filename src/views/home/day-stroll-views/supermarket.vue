<template>
  <div class="supermarket">
    <div class="supermarket-title-wrapper">
      <div class="supermarket-title">苏宁超市</div>
      <!-- <div class="supermarket-spoint">大牌新品抢先</div> -->
    </div>
    <div class="supermarket-tag">超市囤好货&nbsp;优惠享不停</div>

    <div class="supermarket-info-wrapper">
      <div class="supermarket-info" v-for="item in supermarketList" :key="item.id">
        <img :src="item.img" alt />
        <div class="supermarket-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      supermarketList: [
        {
          id: 0,
          img:
            "https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000000618288267_200x200.jpg?ver=2000&from=mobile",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000010553988729_200x200.jpg?ver=2000&from=mobile",
          name: ""
        }
      ]
    };
  },
};
</script>
<style>
.supermarket-info-wrapper {
  position: relative;
  overflow: hidden;
}

.supermarket {
  width: 50%;
  height: 125px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.supermarket-title-wrapper,
.supermarket-info-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.supermarket-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.supermarket-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.supermarket-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.supermarket-info {
  width: 50%;
  position: relative;
}
.supermarket-info img {
  width: 80%;
  height: 80%;
}
.supermarket-price {
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