<template>
  <div class="old">
    <div class="old-title-wrapper">
      <div class="old-title">以旧换新</div>
    </div>
    <div class="old-tag">省钱更省心</div>

    <div class="old-info-wrapper">
      <div class="old-info" v-for="item in oldList" :key="item.id">
        <img :src="item.img" alt />
        <div class="old-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldList: [
        {
          id: 0,
          img:
            "https://image2.suning.cn/uimg/cms/img/156317664873985788.png?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image1.suning.cn/uimg/cms/img/156317664395821269.png?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style scoped>

.old-info-wrapper {
  position: relative;
  overflow: hidden;
}

.old {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.old-title-wrapper,
.old-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.old-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.old-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.old-info img {
  width: 80%;
  height: 80%;
}
</style>