<template>
  <div class="lifestyle-wrapper">
    <div class="lifestyle-title">
      <img
        src="https://image1.suning.cn/uimg/cms/img/154416579467482515.png?format=_is_1242w_100h.webp"
      />
    </div>
    <div class="lifestyle-content-wrapper">
      <div class="top-half">
        <homeAppliances></homeAppliances>
        <lifeAappliancesList></lifeAappliancesList>
      </div>
      <div class="middle-half">
        <textile></textile>
        <baby></baby>
      </div>
      <div class="bottom-half">
        <kitchen></kitchen>
        <book></book>
      </div>
    </div>
  </div>
</template>
<script>
import homeAppliances from "./life-style-views/homeAppliances";
import lifeAappliancesList from "./life-style-views/lifeAappliancesList";
import textile from "./life-style-views/textile";
import baby from "./life-style-views/baby";
import kitchen from "./life-style-views/kitchen";
import book from "./life-style-views/book";

export default {
  components: {
    homeAppliances,
    lifeAappliancesList,
    textile,
    baby,
    kitchen,
    book
  }
};
</script>
<style>
.lifestyle-title {
  width: 100%;
}
.lifestyle-title img {
  display: block;
  margin: 5px auto;
  width: 95%;
}
/* 内容 */
.lifestyle-content-wrapper {
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