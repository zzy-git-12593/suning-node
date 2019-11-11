<template>
  <div class="special-wrapper">
    <div class="special-title">
      <img
        src="https://image1.suning.cn/uimg/cms/img/154416693721758813.png?format=_is_1242w_100h.webp"
      />
    </div>
    <div class="special-content-wrapper">
      <div class="top-half">
        <used></used>
        <old></old>
      </div>
      <div class="bottom-half">
        <car></car>
        <help></help>
      </div>
    </div>
  </div>
</template>
<script>
import used from "./special-views/used";
import old from "./special-views/old";
import car from "./special-views/car";
import help from "./special-views/help";

export default {
  components: { used, old, car, help }
};
</script>
<style>
.special-title {
  width: 100%;
}
.special-title img {
  display: block;
  margin: 5px auto;
  width: 95%;
}
/* 内容 */
.special-content-wrapper {
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