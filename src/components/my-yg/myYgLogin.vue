<template>
  <div style="background:#f2f2f2; margin-bottom:57px">
    <TopNav></TopNav>
    <MyOrder></MyOrder>
    <Tools></Tools>
    <GoodRecommend></GoodRecommend>
  </div>
</template>

<script>
import TopNav from "../../views/my-yg/sign-in/TopNav";
import MyOrder from "../../views/my-yg/sign-in/MyOrder";
import Tools from "../../views/my-yg/sign-in/Tools";
import GoodRecommend from "../../views/my-yg/sign-in/GoodRecommend";
export default {
  components: {TopNav,MyOrder,Tools,GoodRecommend}
};
</script>
<style scoped>
</style>