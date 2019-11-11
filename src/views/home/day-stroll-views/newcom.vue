<template>
  <div class="newcom">
    <div class="newcom-title-wrapper">
      <div class="newcom-title">新品首发</div>
      <div class="newcom-spoint">大牌新品抢先</div>
    </div>
    <div class="newcom-tag">万物皆可盘</div>

    <div class="newcom-info-wrapper">
      <div class="newcom-info" v-for="item in newcomList" :key="item.id">
        <img :src="item.img" alt />
        <div class="newcom-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newcomList: [
        {
          id: 0,
          img:
            "https://image1.suning.cn/uimg/cms/img/155798790893182603.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image3.suning.cn/uimg/cms/img/155798799847922040.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  },
};
</script>
<style>
.newcom-info-wrapper {
  position: relative;
  overflow: hidden;
}

.newcom {
  width: 50%;
  flex-shrink: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.newcom-title-wrapper,
.newcom-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.newcom-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #ff4950;
  line-height: 16px;
}
.newcom-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.newcom-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.newcom-info {
  width: 50%;
  position: relative;
}
.newcom-info img {
  width: 80%;
  height: 80%;
}
.newcom-price {
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