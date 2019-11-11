<template>
  <div class="tips-moeny-wrapper">
    <div class="tips-moeny-title">
      <img
        src="https://image1.suning.cn/uimg/cms/img/154708409641127677.png?format=_is_1242w_100h.webp"
      />
    </div>
    <div class="tips-moeny-content-wrapper">
      <div class="top-half">
        <imageViews></imageViews>
        <financial></financial>
      </div>
      <div class="bottom-half">
        <pay></pay>
        <card></card>
      </div>
    </div>
  </div>
</template>
<script>
import imageViews from "./tips-money-views/imageViews";
import financial from "./tips-money-views/financial";
import pay from "./tips-money-views/pay";
import card from "./tips-money-views/card";

export default {
  components: { imageViews, financial, pay, card }
};
</script>
<style>
.tips-moeny-title {
  width: 100%;
}
.tips-moeny-title img {
  display: block;
  margin: 5px auto;
  width: 95%;
}
/* 内容 */
.tips-moeny-content-wrapper {
  margin: 0 12px;
  background-color: white;
  border-radius: 10px;
}

.top-half,
.bottom-half {
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>