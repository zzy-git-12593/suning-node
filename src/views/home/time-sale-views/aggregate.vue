<template>
  <div class="aggregate">
    <div class="aggregate-title">大聚会</div>
    <div class="aggregate-desc">汇聚品牌爆款</div>
    <div class="aggregate-info-wrapper">
      <div class="aggregate-info" v-for="item in aggregateList" :key="item.id">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aggregateList: [
        {
          id: 0,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/DB2tJFh-qYdStjCK25by_Q.jpg?from=mobile",
          name: "小米（mi）"
        },
        {
          id: 1,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/SSOYsmDP7LB6rp9G-FU_Pw.jpg?from=mobile",
          name: "黑人"
        }
      ]
    };
  }
};
</script>
<style scoped>

.aggregate {
  width: 50%;
  height: 125;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
}
.aggregate-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.aggregate-desc {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.aggregate-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.aggregate-info {
  flex-shrink: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.aggregate-info img {
  width: 100%;
  height: 100%;
}
.aggregate-info p {
  font-size: 12px;
  color: #333333;
  text-align: center;
}
</style>