<template>
  <div class="ari-conditioner">
    <div class="ari-conditioner-title-wrapper">
      <div class="ari-conditioner-title">畅销家用空调榜</div>
      <div class="ari-conditioner-spoint">人气榜</div>
    </div>
    <div class="ari-conditioner-tag">卖爆1122件</div>

    <div class="ari-conditioner-info-wrapper">
      <div class="ari-conditioner-info" v-for="item in ariConditionerList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ariConditionerList: [
        {
          id: 0,
          img:
            "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000615436238.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000104737707.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style scoped>

.ari-conditioner-info-wrapper {
  position: relative;
  overflow: hidden;
}

.ari-conditioner {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.ari-conditioner-title-wrapper,
.ari-conditioner-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ari-conditioner-title {
  flex-shrink: 0;
  font-size: 13px;
  color: #333333;
  line-height: 16px;
}
.ari-conditioner-spoint {
  flex-shrink: 0;
  color: #ab813a;
  background-color: #f9f5ee;
  font-size: 12px;
  border-radius: 12px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.ari-conditioner-tag {
  font-size: 12px;
  line-height: 16px;
  color: #999999;
}
.ari-conditioner-info {
  position: relative;
}
.ari-conditioner-info img {
  width: 80%;
  height: 80%;
}
.ari-conditioner-price {
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