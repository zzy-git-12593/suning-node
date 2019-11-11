<template>
  <div class="textile">
    <div class="textile-title">日用家纺</div>
    <div class="textile-desc">家纺盛惠 满300减30</div>
    <div class="textile-info-wrapper">
      <div class="textile-info" v-for="item in textileList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textileList: [
        {
          id: 0,
          img:
            "https://image1.suning.cn/uimg/cms/img/155468697934125679.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image1.suning.cn/uimg/cms/img/155262265268661851.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style>
.textile {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px 8px 0 8px;
  border-right: 1px solid #f2f2f2;
}
.textile-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.textile-desc {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.textile-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.textile-info {
  display: flex;
  flex-direction: column;
}
.textile-info img {
  width: 80%;
  height: 80%;
}
.textile-info p {
  font-size: 12px;
  color: #999999;
  text-align: center;
}
</style>