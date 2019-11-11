<template>
  <div class="searchs-app">
    <div class="searchs-nav">
      <div class="searchinput-icon">
        <i @click="backClick" class="el-icon-arrow-left"></i>
      </div>
      <div @click="goSearch" class="searchs-inupt" >
        <span>
          <i class="el-icon-search"></i>
        </span>
        <input type="text" :placeholder="defaultSearchInfo" v-model="searchText" @input="inputSearch"/>
      </div>
      <div v-if="isShow" @click="goSearchOver" class="search-right">搜索</div>
      <div v-if="!isShow" class="search-right"><span class="el-icon-s-unfold"></span></div>
    </div>

    <div v-if="isShow">

      <div class="searchs-bottom" v-if="isNone">
        <div class="searchs-bottom-nav">热门搜索</div>
        <div class="searchs-bottom-box">
          <div class="searchs-bottom-item" v-for="(item,index) in searchHistoryList" :key="index">
            <span @click="historySearch(item)">{{item}}</span>
          </div>
        </div>
      </div>
        <div class="searchs-bottom-box-xiangguan" v-if="!isNone">
              <div>搜索到的商品如下</div>
              <div v-for="item in searchResult" :key="item.id" class="search-list">
                <span >{{item.cmmdtyName}}</span>
                <div>
                    <span class="type">价格</span>
                    <span class="type">电池</span>
                </div>
              </div>
        </div>
    </div>
    <router-view></router-view>
    <div v-if="noFind" class="no_search">
          <span class="el-icon-refresh-left"></span>
          <span>十分抱歉未搜索到符合的商品</span>
    </div>
  </div>
</template>
<script>
import bus from "@/bus";
import axios from "axios";
export default {
  data() {
    return {
      defaultSearchInfo: "Apple",
      searchText: null,
      searchResult: [],
      noFind: false,
      isShow: true,
      timer: 0,
      isNone: true,
      searchHistoryList:[]
    };
  },
  beforeMount() {
    bus.$on("isShow", data => { 
      this.isShow = data;
    });
  },
  created () {
      if(localStorage.searchHistoryList){
        this.searchHistoryList =JSON.parse(localStorage.searchHistoryList)
      }
  },
  methods: {
    // 搜索字段，展示分类名称
    inputSearch() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        axios.get("http://localhost:3000/typeList").then(res => {
          // 请求搜索前置空
          this.searchResult = [];
          res.data.filter(item => {
            // 去首位空格后输入不为空的时候查找
            if (this.searchText.trim().length) {
              if (item.cmmdtyTitle.includes(this.searchText)) {
                  this.searchResult.push(item);
                  // return this.searchResult;
              }
              // 当找到商品的时候，完成列表和未搜索到提示显示 
              if (this.searchResult.length > 0) {
                this.isNone = false;
                this.noFind = false;
              } else {
                this.isNone = true;
                this.noFind = true;
              } 
            } else {
                this.isNone = true;
                this.noFind = false;
              }
          });
        });
      }, 500);
    },
    backClick() {
        if(this.$route.path == '/search'){
            this.$router.push('/homepage/type')
        }else{
          this.$router.go(-1)
          // 返回置空
          this.searchText =''
          this.isNone =true
          this.noFind = false
        }
        
        this.$store.commit('searchChangeTransition')
    },
    goSearch() {
      if (this.$route.path == "/search/searchover") {
          this.$router.push("/search");
          this.searchText =''
          this.isNone =true
          this.noFind = false
      }
    },
    // 跳转路由，携带搜索参数
    goSearchOver() {
      if(!this.searchText){
          this.searchText =this.defaultSearchInfo
       }

      if((!this.searchHistoryList.includes(this.searchText))&&this.searchText.trim().length){
            this.searchHistoryList.push(this.searchText)
      } 
      localStorage.setItem('searchHistoryList',JSON.stringify(this.searchHistoryList)) 
      if (this.$route.path != "/search/searchover") {
       this.$router.push({
          path: "/search/searchover",
          // 判断搜索框是否存在，否则传入默认placeholder值
          query: {
            searchtext: this.searchText
          }
        });
      }
       
    },
    // 点击历史记录搜索
    historySearch(item){
      this.searchText = item
      this.goSearchOver()
    }
  }
};
</script>
<style>
.searchs-app {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.searchs-app .searchs-nav {
  width: 100%;
  background-image: linear-gradient(0deg, #2676fa 0, #23d7ff 90%);
  /* background-color: #fff; */
  box-shadow: 0 1px 1px #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 12px;
  
}
.searchinput-icon {
  font-size: 22px;
  color: white;
  width: 5%;
}
.searchs-app .searchs-inupt {
  width: 85%;
  /* flex-grow: 1; */
  background-color: white;
  border-radius: 15px;
  color: #353d44;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* justify-items: center; */
  align-items: center;
  margin-left: 10px;
}
.searchs-app .searchs-inupt i {
  display: block;
  font-size: 14px;
  margin: 5px;
}
.searchs-app .searchs-inupt input {
  width: 90%;
  border: none;
  color: #353d44;
  font-size: 14px;
  background-color: white;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  /* flex-grow: 1; */
  outline: none;
}
.searchs-app .search-right {
  width: 10%;
  font-size: 16px;
  color: white;
  margin-left: 8px;
  line-height: 27px;

}
.searchs-app .searchs-bottom {
  width: 100%;
  padding: 20px 10px;
}
.searchs-app .searchs-bottom-nav {
  width: 100%;
  font-size: 14px;
  color: #333333;
  font-weight: bold;
}
.searchs-app .searchs-bottom-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #333;
  width: 100%;
  font-size: 15px;
}
.searchs-app .searchs-bottom-item {
  width: 30.5%;
  margin: 10px 10px 0 0;
  padding: 5px 0;
  font-size: 13px;
  color: #333333;
  background-color: #f2f2f2;
  text-align: center;
  border-radius: 15px;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.searchs-app .searchs-bottom-item .active1 {
  color: #f60;
}
.searchs-app .el-icon-s-unfold{
  font-size: 25px;
  line-height: 25px
}
.searchs-bottom-box-xiangguan{
  width: 100%;
}
.searchs-bottom-box-xiangguan div{
  margin: 0 10px;
  border-bottom: 1px solid #f2f2f2;
  padding: 8px 0px;
  font-size: 13px;
  color: #333333
}
.search-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}
.search-list div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.type{
      padding: 2px 15px;
      background: #f2f2f2;
      color: #999999;
      border-radius: 10px;
      margin-left: 10px
}


.no_search{
  margin: 50px auto;
  text-align: center;
}
</style>