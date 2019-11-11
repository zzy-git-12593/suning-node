<template>
  <div class="type-app">
    <SearchInput class="type-search-input"></SearchInput>
    <div class="type-content">
      <LeftTab class="type-left-tab"></LeftTab>
      <TabContainer class="type-right-tab"></TabContainer>
    </div>
  </div>
</template>
<script>
import SearchInput from "../../views/type/SearchInput";
import LeftTab from "../../views/type/LeftTab";
import TabContainer from "../../views/type/TabContainer";
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getpopularListActions");
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