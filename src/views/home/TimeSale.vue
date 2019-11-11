<template>
  <div class="time-sale-wrapper">
    <div class="top-half">
      <timeSale></timeSale>
      <aggregtate></aggregtate>
    </div>
    <div class="bottom-half">
      <outlets></outlets>
      <groupBuy></groupBuy>
    </div>
  </div>
</template>
<script>
import aggregtate from "./time-sale-views/aggregate";
import timeSale from "./time-sale-views/timeSale";
import outlets from "./time-sale-views/outlets";
import groupBuy from "./time-sale-views/groupBuy";

export default {
  components: { timeSale, aggregtate, outlets,groupBuy }
};
</script>
<style>
.time-sale-wrapper {
  margin: 0 12px;
  background-color: white;
  border-radius: 10px;
  margin-top: 15px;
}

/* 限时抢购 大聚会 */
.top-half,
.bottom-half {
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>