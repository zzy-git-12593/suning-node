<template>
  <div class="home-appliances-view">
    <div class="home-appliances-view-title-wrapper">
      <div class="home-appliances-view-title">苏宁家电</div>
    </div>
    <div class="home-appliances-view-time-wrapper">
      <div class="time-tag">30天包退 365天包换</div>
    </div>
    <div class="home-appliances-view-info-wrapper">
      <div class="home-appliances-view-info" v-for="item in homeAppliancesViewList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      homeAppliancesViewList: [
        {
          id: 0,
          img:
            "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000634440708_200x200.jpg?ver=2000&from=mobile",
          price: ""
        },
        {
          id: 1,
          img:
            "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000000175069488_200x200.jpg?ver=2000&from=mobile",
          price: ""
        }
      ]
    };
  }
};
</script>
<style>
.home-appliances-view {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.home-appliances-view-title-wrapper,
.home-appliances-view-time-wrapper,
.home-appliances-view-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.home-appliances-view-title {
  flex-grow: 1;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.time-tag {
  font-size: 12px;
  line-height: 16px;
  color: #999999;
}
.home-appliances-view-info img {
  width: 80%;
  height: 80%;
}
.home-appliances-view-price {
  font-size: 12px;
  color: #ff4950;
  text-align: center;
  line-height: 12px;
}
</style>