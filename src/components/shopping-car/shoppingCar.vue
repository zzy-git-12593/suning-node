<template>
  <div class="shopping_car_page_wrapper">
      <div class="shopping_car_commdlity_list_wrapper" :class="{'list_margin':shoppingCarList.length}">
          <carNav></carNav>
          <loginPrompt></loginPrompt>

          <div v-show="!shoppingCarList.length" class="un_login_prompt">
                <span class="el-icon-shopping-cart-2"></span>
                <span style="font-size:14px; color:#999999">购物车还是空的，快来挑选好货吧</span>
                <div class="un_login_btn">
                    <span class="un_login_btn_home" @click="shoppingCarToHome">去首页逛逛</span>
                    <span class="un_login_btn_my" @click="shoppingCarToMy">查看优惠</span>
                </div>
          </div>
          
          <carComList  v-if="shoppingCarList.length > 0" ></carComList>

          <yourLike></yourLike>
      </div>
      <div class="shopping_car_commdlity_statistics_wrapper" v-if="shoppingCarList.length>0">
          <price></price>
      </div>
  </div>
</template>
<script>
import carNav from "../../views/shpping-car/unlogin/carNav";
import loginPrompt from "../../views/shpping-car/unlogin/loginPrompt";
import carComList from "../../views/shpping-car/unlogin/carComList";
import yourLike from "../../views/home/yourLike";
import price from "../../views/shpping-car/unlogin/price";

import {mapState} from "vuex";
import axios from "axios";

export default {

  components: {
    carNav,
    loginPrompt,
    carComList,
    yourLike,
    price
  },
  computed:{
    ...mapState(['shoppingCarList']),
    ...mapState(['uId']),
  },
  created(){
    console.log(this.uId)
    // 获取购物车数据存在store 
    this.$store.dispatch('getShoppingCarActions',this.uId)    
  },

  methods: {
    shoppingCarToHome(){
      this.$router.push('/homepage/home')
    },
    shoppingCarToMy(){
      this.$router.push('/homepage/myyglogin')
    }
  }
};
</script>
<style>
.shopping_car_page_wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
}
.shopping_car_commdlity_list_wrapper{
  width: 100%;
  overflow: auto;
  overflow-x:hidden; 
  margin-bottom: 57px
}
.shopping_car_commdlity_statistics_wrapper{
  position: fixed;
  bottom: 57px;
  left: 0;
  right: 0;
}

.un_login_prompt{
  display: flex;
  flex-direction: column;
  /* align-content: space-around; */
  align-items: center;
  margin: 50px 0;
}
.el-icon-shopping-cart-2{
    font-size: 80px;
    color: #999999;
}
.un_login_btn{
  font-size: 12px;
  color: #333333;
  margin-top: 10px;
}
.un_login_btn span{
  background: white;
  padding: 2px 10px;
  border-radius: 15px;
  border: 1px solid #bbbaba;
  margin-left: 10px;
  text-align: center;
}
.list_margin{
  margin-bottom: 110px
}
</style>