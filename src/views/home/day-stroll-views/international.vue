<template>
  <div class="international">
    <div class="international-title-wrapper">
      <div class="international-title">苏宁国际</div>
      <!-- <div class="international-spoint">大牌新品抢先</div> -->
    </div>
    <div class="international-tag">进口爆款第二件半价</div>

    <div class="international-info-wrapper">
      <div class="international-info" v-for="item in internationalList" :key="item.id">
        <img :src="item.img" alt />
        <div class="international-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      internationalList: [
        {
          id: 0,
          img:
            "https://image3.suning.cn/uimg/b2c/qrqm/0070206966000000011362248359_200x200.jpg?ver=2000&from=mobile",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image3.suning.cn/uimg/b2c/qrqm/0070208536000000011204563688_200x200.jpg?ver=2000&from=mobile",
          name: ""
        }
      ]
    };
  },
};
</script>
<style>
.international-info-wrapper {
  position: relative;
  overflow: hidden;
}

.international {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.international-title-wrapper,
.international-info-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.international-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.international-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.international-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.international-info {
  width:50%;
  position: relative;
}
.international-info img {
  width: 80%;
  height: 80%;
}
.international-price {
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