<template>
  <div class="sport">
    <div class="sport-title-wrapper">
      <div class="sport-title">运动户外</div>
      <!-- <div class="sport-spoint">大牌新品抢先</div> -->
    </div>
    <div class="sport-tag">大牌特惠 低至3折</div>

    <div class="sport-info-wrapper">
      <div class="sport-info" v-for="item in sportList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sportList: [
        {
          id: 0,
          img:
            "https://image2.suning.cn/uimg/cms/img/155783974326865245.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image2.suning.cn/uimg/cms/img/155783973957487251.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style>
.sport-info-wrapper {
  position: relative;
  overflow: hidden;
}

.sport {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.sport-title-wrapper,
.sport-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sport-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}

.sport-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.sport-info {
  width: 50%;
  position: relative;
}
.sport-info img {
  width: 80%;
  height: 80%;
}

</style>