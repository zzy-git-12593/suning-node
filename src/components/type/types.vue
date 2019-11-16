<template>
  <div class="type-app">
    <SearchInput class="type-search-input"></SearchInput>
    <div class="type-content">
      <LeftTab class="type-left-tab" :type-title-list="typeTitleList"></LeftTab>
      <keep-alive>
          <TabContainer class="type-right-tab"></TabContainer>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import SearchInput from "../../views/type/SearchInput";
import LeftTab from "../../views/type/LeftTab";
import TabContainer from "../../views/type/TabContainer";
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      typeTitleList:[] //prop传值
    };
  },
  computed:{
    ...mapState(['uId'])
  },
  created() {
    console.log(this.uId)
    axios.get("http://localhost:2000/type/typeTitle")
    .then(res => {

        this.typeTitleList = res.data
        this.$store.dispatch('getTypeContentActions',this.typeTitleList[0].id) //初始化页面，请求第一个页面
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    SearchInput,
    LeftTab,
    TabContainer
  }
};
</script>
<style>
.type-app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.type-search-input {
  flex-shrink: 0;
}
.type-content {
  overflow: hidden;
  margin-bottom: 57px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  margin-top: 2px;
}
.type-left-tab,
.type-right-tab {
  overflow: auto;
}
</style>