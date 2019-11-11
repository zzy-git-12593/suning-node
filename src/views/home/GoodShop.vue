<template>
  <div class="good-shop-wrapper">
    <div class="good-shop-title">
      <img
        src="https://image3.suning.cn/uimg/cms/img/154518369657375633.png?format=_is_1242w_100h.webp"
      />
    </div>
    <div class="good-shop-content-wrapper">
      <div class="top-half">
        <goodHelpList></goodHelpList>
        <clean></clean>
      </div>
      <div class="bottom-half">
        <growUp></growUp>
        <houseHold></houseHold>
      </div>
    </div>
  </div>
</template>
<script>
import goodHelpList from "./good-shop-views/goodHelpList";
import clean from "./good-shop-views/clean";
import growUp from "./good-shop-views/growUp";
import houseHold from "./good-shop-views/houseHold";

export default {
  components: { goodHelpList, clean, growUp, houseHold }
};
</script>
<style>
.good-shop-title {
  width: 100%;
}
.good-shop-title img {
  display: block;
  margin: 5px auto;
  width: 95%;
}
/* 内容 */
.good-shop-content-wrapper {
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