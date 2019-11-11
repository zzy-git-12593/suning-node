<template>
  <div class="baby">
    <div class="baby-title-wrapper">
      <div class="baby-title">加油萌宝</div>
    </div>
    <div class="baby-time-wrapper">
      <div class="time-tag">母婴好货 爆款直降</div>
    </div>
    <div class="baby-info-wrapper">
      <div class="baby-info" v-for="item in babyList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      babyList: [
        {
          id: 0,
          img:
            "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000102410015_200x200.jpg?ver=2000&from=mobile",
          price: "368"
        },
        {
          id: 1,
          img:
            "https://image1.suning.cn/uimg/b2c/qrqm/0070149550000000010053966426_200x200.jpg?ver=2000&from=mobile",
          price: "8699"
        }
      ]
    };
  }
};
</script>
<style>
.baby {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.baby-title-wrapper,
.baby-time-wrapper,
.baby-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.baby-title {
  flex-grow: 1;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.time-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}

.baby-info img {
  width: 80%;
  height: 80%;
}
</style>