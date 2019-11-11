<template>
  <div class="daystroll-wrapper">
    <div class="daystroll-title">
      <img
        src="https://image2.suning.cn/uimg/cms/img/154875835012575413.png?format=_is_1242w_100h.webp"
      />
    </div>
    <div class="daystroll-content-wrapper">
      <div class="top-half">
        <newcom></newcom>
        <supermarket></supermarket>
      </div>
      <div class="bottom-half">
        <international></international>
        <fresh></fresh>
      </div>
    </div>
  </div>
</template>
<script>
import newcom from "./day-stroll-views/newcom";
import supermarket from "./day-stroll-views/supermarket";
import international from "./day-stroll-views/international";
import fresh from "./day-stroll-views/fresh";

export default {
  components: { newcom, supermarket, international, fresh }
};
</script>
<style>
.daystroll-title {
  width: 100%;
}
.daystroll-title img {
  display: block;
  margin: 0 auto;
  width: 95%;
}
/* 内容 */
.daystroll-content-wrapper {
  margin: 5px 12px;
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