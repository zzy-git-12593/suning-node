<template>
  <div class="life-appliances">
    <div class="life-appliances-title-wrapper">
      <div class="life-appliances-title">生活家电</div>
      <div class="life-appliances-spoint">9.9元抢好货</div>
    </div>
    <div class="life-appliances-time-wrapper">
      <div class="time-tag">满200减30 满400减60</div>
    </div>
    <div class="life-appliances-info-wrapper">
      <div class="life-appliances-info" v-for="item in lifeAappliancesList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lifeAappliancesList: [
        {
          id: 0,
          img:
            "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000623731062_200x200.jpg?ver=2000&from=mobile",
          price: ""
        },
        {
          id: 1,
          img:
            "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000103205142_200x200.jpg?ver=2000&from=mobile",
          price: ""
        }
      ]
    };
  }
};
</script>
<style>
.life-appliances {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.life-appliances-title-wrapper,
.life-appliances-time-wrapper,
.life-appliances-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.life-appliances-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.life-appliances-spoint {
  background-image: linear-gradient(-90deg, #2676fa 0, #23d7ff 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 10px;
  margin-left: 5px;
}
.time-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}

.life-appliances-info img {
  width: 80%;
  height: 80%;
}
.life-appliances-price {
  font-size: 12px;
  color: #ff4950;
  text-align: center;
  line-height: 12px;
}
</style>