<template>
  <div class="TV">
    <div class="TV-title-wrapper">
      <div class="TV-title">人气智能电视榜</div>
      <div class="TV-spoint">人气榜</div>
    </div>
    <div class="TV-tag">卖爆8393件</div>

    <div class="TV-info-wrapper">
      <div class="TV-info" v-for="item in TVList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TVList: [
        {
          id: 0,
          img:
            "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000775604287.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010372006589.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style scoped>

.TV-info-wrapper {
  position: relative;
  overflow: hidden;
}

.TV {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.TV-title-wrapper,
.TV-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.TV-title {
  flex-shrink: 0;
  font-size: 13px;
  color: #333333;
  line-height: 16px;
}
.TV-spoint {
  flex-shrink: 0;
  color: #ab813a;
  background-color: #f9f5ee;
  font-size: 12px;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.TV-tag {
  font-size: 12px;
  line-height: 16px;
  color: #999999;
}
.TV-info img {
  width:90%;
  height: 90%;
}
.TV-price {
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