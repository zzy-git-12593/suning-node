<template>
  <div class="group-by">
    <div class="group-by-title-wrapper">
      <div class="group-by-title">苏宁拼购</div>
    </div>
    <div class="group-by-tag">2人拼更实惠 全场包邮</div>

    <div class="group-by-info-wrapper">
      <div class="group-by-info" v-for="item in groupByList" :key="item.id">
        <img :src="item.img" alt />
        <div class="group-by-price">{{item.name}}</div>
      </div>  
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      ifIF: false,
      groupByList: [
        {
          id: 0,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/2jSgcMlgH69Dhy4BHIbJVg.jpg?from=mobile",
          log:
            "//image1.suning.cn/uimg/nmps/MPPCLOGO/100358896B612_3.jpg?format=80h_200w_4e_80q",
          name: "2人拼49.9"
        },
        {
          id: 1,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/YgEh-44ZS0jFTh3qYVUTMg.jpg?from=mobile",
          log:
            "//image2.suning.cn/uimg/nmps/MPPCLOGO/100358392294P_3.jpg?format=80h_200w_4e_80q.webp",
          name: "2人拼1538"
        }
      ]
    };
  }
};
</script>
<style scoped>

.group-by-info-wrapper {
  position: relative;
  overflow: hidden;
}
.group-by {
  flex-shrink: 0;
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.group-by-title-wrapper,
.group-by-info-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.group-by-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #ff4950;
  line-height: 16px;
}
.group-by-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.group-by-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.group-by-info {
  width: 50%;
  position: relative;
}
.group-by-info img {
  width: 100%;
  height: 100;
}
.group-by-price {
  width: 100%;
  position: absolute;
  bottom: 2px;
  left: 8px;
  z-index: 1;
  font-size: 12px;
  color: #333333;
  background: rgba(255, 255, 255, 0.6);
  line-height: 12px;
}
</style>