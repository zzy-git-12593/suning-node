<template>
  <div>
    <FilterSeleted></FilterSeleted>
    <NavBar></NavBar>
    <Shopwiper></Shopwiper>
    <ShopList></ShopList>
  </div>
</template>

<script>
import FilterSeleted from "./search-over/FilterSeleted";
import NavBar from "./search-over/NavBar";
import ShopList from "./search-over/ShopList";
import Shopwiper from "./search-over/ShopSwiper";

export default {
  components: {
    FilterSeleted,
    NavBar,
    ShopList,
    Shopwiper
  },
};
</script>
<style>
</style>