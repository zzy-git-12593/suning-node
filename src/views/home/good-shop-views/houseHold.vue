<template>
  <div class="household">
    <div class="household-title-wrapper">
      <div class="household-title">居家党</div>
      <!-- <div class="household-spoint">大牌新品抢先</div> -->
    </div>
    <div class="household-tag">繁杂家务轻松搞定</div>

    <div class="household-info-wrapper">
      <div class="household-info" v-for="item in houseHoldList" :key="item.id">
        <img :src="item.img" alt />
        <div class="household-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      houseHoldList: [
        {
          id: 0,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/ywDjJuuCFrG5uU_SB8lbOg.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/uHD_ROuANq6udMAWyNSSXA.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style>
.household-info-wrapper {
  position: relative;
  overflow: hidden;
}

.household {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.household-title-wrapper,
.household-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.household-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.household-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}

.household-info img {
  width: 80%;
  height: 80%;
}
</style>