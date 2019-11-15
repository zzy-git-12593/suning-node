<template>
  <div style="background:#f2f2f2; margin-bottom:57px">
    <TopNav></TopNav>
    <MyOrder></MyOrder>
    <Tools></Tools>
    <yourLike></yourLike>
  </div>
</template>

<script>
import TopNav from "../../views/my-yg/sign-in/TopNav";
import MyOrder from "../../views/my-yg/sign-in/MyOrder";
import Tools from "../../views/my-yg/sign-in/Tools";
import yourLike from "../../views/home/yourLike";
export default {
  components: {TopNav,MyOrder,Tools,yourLike}
};
</script>
<style scoped>
</style>