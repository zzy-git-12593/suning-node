<template>
  <div class="financial">
    <div class="financial-title-wrapper">
      <div class="financial-title">苏宁金融</div>
      <!-- <div class="financial-spoint">大牌新品抢先</div> -->
    </div>
    <div class="financial-tag">福利大放送</div>

    <div class="financial-info-wrapper">
      <div class="financial-info" v-for="item in financialList" :key="item.id">
        <img :src="item.img" alt />
        <div class="financial-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      financialList: [
        {
          id: 0,
          img:
            "https://image1.suning.cn/uimg/cms/img/157101903221918277.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image3.suning.cn/uimg/cms/img/157101903003325483.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style scoped>

.financial-info-wrapper {
  position: relative;
  overflow: hidden;
}

.financial {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.financial-title-wrapper,
.financial-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.financial-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.financial-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.financial-info {
  position: relative;
}
.financial-info img {
  width: 80%;
  height: 80%;
}

</style>