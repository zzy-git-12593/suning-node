<template>
  <div class="recommend-list-wrapper">
    <div class="recommend-list-title">
      <img src="https://image1.suning.cn/uimg/cms/img/156929221080156017.png?from=mobile" />
    </div>
    <div class="recommend-list-content-wrapper">
      <div class="top-half">
        <fridge></fridge>
        <TV></TV>
      </div>
      <div class="bottom-half">
        <ariConditionerList></ariConditionerList>
        <childrenBooksList></childrenBooksList>
      </div>
    </div>
  </div>
</template>
<script>
import fridge from "./recommend-list-views/fridge";
import TV from "./recommend-list-views/TV";
import ariConditionerList from "./recommend-list-views/ariConditionerList";
import childrenBooksList from "./recommend-list-views/childrenBooksList";

export default {
  components: { fridge, TV, ariConditionerList, childrenBooksList }
};
</script>
<style>
.recommend-list-title {
  width: 100%;
}
.recommend-list-title img {
  display: block;
  margin: 5px auto;
  width: 95%;
}
/* 内容 */
.recommend-list-content-wrapper {
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