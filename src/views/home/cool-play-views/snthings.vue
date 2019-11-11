<template>
  <div class="synthings">
    <div class="synthings-title-wrapper">
      <div class="synthings-title">苏宁极物</div>
    </div>
    <div class="synthings-time-wrapper">
      <div class="time-tag">苏宁自有品牌</div>
    </div>
    <div class="synthings-info-wrapper">
      <div class="synthings-info" v-for="item in synthingsList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      synthingsList: [
        {
          id: 0,
          img:
            "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000010783451606_200x200.jpg?ver=2000&from=mobile",
          price: ""
        },
        {
          id: 1,
          img:
            "https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000011272803555_200x200.jpg?ver=2000&from=mobile",
          price: ""
        }
      ]
    };
  }
};
</script>
<style>
.synthings {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.synthings-title-wrapper,
.synthings-time-wrapper,
.synthings-info-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.synthings-title {
  flex-grow: 1;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.synthings-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.time-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.time-desc span {
  font-size: 12px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 14px;
  border-radius: 5px;
  padding: 0 2px;
  margin-left: 2px;
}
.synthings-info {
  width: 50%;
}
.synthings-info img {
  width: 80%;
  height: 80%;
}
.synthings-price{
  font-size: 12px;
  color: #ff4950;
  text-align: center;
  line-height: 12px;
}
</style>