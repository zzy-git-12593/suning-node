<template>
  <div class="coolplay-wrapper">
    <div class="coolplay-title">
      <img
        src="https://image3.suning.cn/uimg/cms/img/154416478781252783.png?format=_is_1242w_100h.webp"
      />
    </div>
    <div class="coolplay-content-wrapper">
      <div class="top-half">
        <imageViews></imageViews>
        <mobile></mobile>
      </div>
      <div class="middle-half">
        <computed></computed>
        <snthings></snthings>
      </div>
      <div class="bottom-half">
        <sport></sport>
        <digital></digital>
      </div>
    </div>
  </div>
</template>
<script>
import imageViews from "./cool-play-views/imageViews";
import mobile from "./cool-play-views/mobile";
import computed from "./cool-play-views/computed";
import snthings from "./cool-play-views/snthings";
import sport from "./cool-play-views/sport";
import digital from "./cool-play-views/digital";

export default {
  components: { imageViews, mobile, computed, snthings, sport, digital }
};
</script>
<style>
.coolplay-title {
  width: 100%;
}
.coolplay-title img {
  display: block;
  margin: 5px auto;
  width: 95%;
}
/* 内容 */
.coolplay-content-wrapper {
  margin: 0 12px;
  background-color: white;
  border-radius: 10px;
}

.top-half,
.middle-half,
.bottom-half {
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>