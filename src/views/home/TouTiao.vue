<template>
  <div class="home-headline">
    <div class="headline-logo">
      <img src="/images/homeheadline/suning-headline.png" alt />
    </div>
    <HeadLineSwiper></HeadLineSwiper>
  </div>
</template>
<script>
import HeadLineSwiper from "../../views/swipers/homeHeadLineSwiper";
export default {
  components: { HeadLineSwiper }
};
</script>
<style scoped>
.home-headline {
  /* height: 51px; */
  margin: 0 12px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  overflow: hidden;
}
.headline-logo {
  flex-shrink: 0;
  width: 33px;
  height: 33px;
}
.headline-logo img {
  width: 100%;
}
</style>