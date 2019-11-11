<template>
  <div class="computed">
    <div class="computed-title">电脑办公</div>
    <div class="computed-desc">十代独显轻薄本3999起</div>
    <div class="computed-info-wrapper">
      <div class="computed-info" v-for="item in computedList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      computedList: [
        {
          id: 0,
          img:
            "https://image3.suning.cn/uimg/cms/img/156983130540417154.jpg?format=_is_200w_200h.webp",
          name: "小米（mi）"
        },
        {
          id: 1,
          img:
            "https://image2.suning.cn/uimg/cms/img/156983130770538345.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style>
.computed {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  border-right: 1px solid #f2f2f2
}
.computed-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.computed-desc {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.computed-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.computed-info {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.computed-info img {
  width: 90%;
  height: 90%;
}
.computed-info p {
  font-size: 12px;
  color: #333333;
  text-align: center;
}
</style>