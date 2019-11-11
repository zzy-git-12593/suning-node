<template>
  <div class="fridge">
    <div class="fridge-title-wrapper">
      <div class="fridge-title">时尚保鲜冰箱榜</div>
      <div class="fridge-spoint">人气榜</div>
    </div>
    <div class="fridge-tag">卖爆2765件</div>

    <div class="fridge-info-wrapper">
      <div class="fridge-info" v-for="item in fridgeList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fridgeList: [
        {
          id: 0,
          img:
            "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000193531853.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000146582293.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style scoped>

.fridge-info-wrapper {
  position: relative;
  overflow: hidden;
}

.fridge {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.fridge-title-wrapper,
.fridge-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.fridge-title {
  flex-shrink: 0;
  font-size: 13px;
  color: #333333;
  line-height: 16px;
}
.fridge-spoint {
  flex-shrink: 0;
  font-size: 12px;
  color: #ab813a;
  background-color: #f9f5ee;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.fridge-tag {
  font-size: 12px;
  line-height: 16px;
  color: #999999;
}
.fridge-info {
  position: relative;
}
.fridge-info img {
  width: 80%;
  height: 80%;
}
.fridge-price {
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