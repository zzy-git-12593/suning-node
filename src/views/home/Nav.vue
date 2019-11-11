<template>
  <div class="home-nav">
    <div class="home-nav-type" @click="navToType">
      <i class="iconfont icon-type"></i>
      <div>分类</div>
    </div>
    <div class="nav-search" @click="homeNavClick">
      <img src="images/搜索.png" alt />
      <span>请输入你想搜索的商品</span>
    </div>
    <div class="home-nav-login" @click="homeNavLogin" v-show="!isLogin">登录</div>
    <div class="home-nav-login el-icon-user-solid" @click="homeNavLogin" v-show="isLogin"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isLogin:false,
    }
  },
  mounted () {
    this.isLogin = localStorage.token
  },
  methods:{
    navToType(){
      this.$router.push('/homepage/type')
    },
    homeNavClick(){
      console.log('1111')
      this.$router.push("/search");
      this.$store.commit('changeTransition')
    },
    homeNavLogin(){
      if(localStorage.token){
        this.$router.push('/homepage/myyglogin')
      }else if(!localStorage.token && localStorage.userInfo){
        this.$router.push('/myygunlogin')
      }
      else if(!localStorage.userInfo){
        this.$router.push('/register')
      }
    }
  }
};
</script>
<style>
.home-nav {
  background: transparent;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.home-nav-type,
.home-nav-login {
  flex-shrink: 0;
}
.el-icon-user-solid{
  font-size: 36px;
}
.home-nav-type {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.home-nav-type div {
  font-size: 1px;
  line-height: 8px;
}
.home-nav-type .iconfont {
  font-size: 24px;
}
.nav-search {
  background: #f2f2f2;
  border-radius: 25px;
  flex-grow: 1;
  margin: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  color: rgb(117, 117, 117);
  line-height: 30px;
  padding: 0 10px;
}
.nav-search span {
  flex-grow: 1;
}
.nav-search img {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-right: 10px;
}
.home-nav-login {
  font-size: 12px;
  color: white;
}
</style>