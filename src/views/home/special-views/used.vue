<template>
  <div class="used">
    <div class="used-title-wrapper">
      <div class="used-title">二手优品</div>
    </div>
    <div class="used-tag">低价抢iphoneX</div>

    <div class="used-info-wrapper">
      <div class="used-info" v-for="item in usedList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usedList: [
        {
          id: 0,
          img:
            "https://image1.suning.cn/uimg/cms/img/156317651546760648.png?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image3.suning.cn/uimg/cms/img/156317651141708528.png?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style scoped>

.used-info-wrapper {
  position: relative;
  overflow: hidden;
}

.used {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.used-title-wrapper,
.used-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.used-title {
  /* flex-shrink: 0; */
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.used-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.used-info img {
  width: 80%;
  height: 80%;
}

</style>