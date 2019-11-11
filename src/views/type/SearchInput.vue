<template>
  <div class="searchinput">
    <div class="searchinput-icon"><i class="el-icon-arrow-left" @click="backClick"></i></div>
    <div class="search-inupt" @click="goSearch">
      <span><i class="el-icon-search"></i></span>
      <input type="text" placeholder="搜索商品或店铺" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    backClick() {
        this.$router.push('/homepage/home')
    },
    goSearch() {
      if (this.$route.path != "/search") {
        this.$router.push("/search");
      }
    }
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.searchinput{
  width: 100%;
  background-image: linear-gradient(0deg, #2676fa 0, #23d7ff 90%);
  box-shadow: 0 1px 1px #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 12px;
}
.searchinput-icon{
  font-size: 22px;
  color: #353d44;
}
.searchinput-icon i{
  color: white;
}
.search-inupt{
  flex-grow: 1;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  margin-left: 10px;
}
.search-inupt i{
  display: block;
  margin: 5px;
  font-size: 14px;
}
.search-inupt input{
  width: 80%;
  border: none;
  font-size: 14px;
  color: #CACACA;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  /* flex-grow: 1; */
  outline: none;
}
</style>