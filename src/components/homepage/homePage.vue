<template>
  <div class="home-container">
    <transition>
      <router-view :is-window-top-show="isWindowTopShow" :is-nav-show="isNavShow"></router-view>
    </transition>
    <div class="footer">
      <div class="tab-nav">
        <div
          class="nav-box"
          @click="backHome"
          v-show="homeIconShow"
          :class="{'home-actice':index=='/homepage/home'}"
        >
          <i class="iconfont icon-xihuan"></i>
          <div class="nav-test">猜你喜欢</div>
        </div>
        <div
          class="nav-box"
          @click="backHome"
          v-show="!homeIconShow"
          :class="{'home-actice':index=='/homepage/home'}"
        >
          <i class="iconfont icon-home"></i>
          <div class="nav-test">首页</div>
        </div>

        <div
          class="nav-box"
          @click="backType"
          v-show="typeIconShow"
          :class="{'home-actice':index=='/search'}"
        >
          <i class="iconfont icon-type"></i>
          <div class="nav-test">分类</div>
        </div>
        <div
          class="nav-box"
          @click="backType"
          v-show="!typeIconShow"
          :class="{'home-actice':index=='/homepage/type'}"
        >
          <i class="iconfont icon-sousuo"></i>
          <div class="nav-test">搜索</div>
        </div>

        <a href="https://c.m.suning.com/channel/higoubq11.html?utm_source=baidu&utm_midium=brand&utm_content=&utm_campaign=title" class="nav-box other">
          <i class="iconfont icon-home"></i>
          <div class="nav-test">必抢清单</div>
        </a>
        <div
          class="nav-box"
          @click="backShopCar"
          :class="{'home-actice':index=='/homepage/shoppingcar'}"
        >
          <i class="iconfont icon-shopcar"></i>
          <div class="nav-test">购物车</div>
        </div>
        <div class="nav-box" @click="backMy" :class="{'home-actice':index=='/homepage/myyglogin'}">
          <i class="iconfont icon-wo"></i>
          <div class="nav-test">我的易购</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/bus";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isNavShow:false,
      // 导航栏home切换class
      homeIconShow: true,
      // 返回顶部切换class
      isWindowTopShow: false,
      // 导航栏type切换class
      typeIconShow: true,
      // 导航栏选中颜色切换class
      index: "",
      // 子组件传来的猜你喜欢组件高度
      likeOffsetTOP: 0,
      // 子组件传来的好货组件高度
      goodShopOffsetHeight: 0
    };
  },
  // 在元素父节点创建前获取子元素mount发的的数据
  // index则不可以，因为before时DOM节点没有渲染
  beforeMount(){
  // 主页传来的单组件高度，永远判断导航栏home页面切换
    bus.$on("offsetHeight", data => {
      this.likeOffsetTOP = data.likeOffsetTOP;
      this.goodShopOffsetHeight = data.goodShopOffsetHeight;
    });
    //
  },
  mounted() {
    // 鼠标滚动监听 
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 0) {
            this.isNavShow = true;
          } else {
            this.isNavShow = false;
      }
      if (document.documentElement.scrollTop >=(this.likeOffsetTOP - this.goodShopOffsetHeight)) {
        this.isWindowTopShow = true;
        this.homeIconShow = false;
      } else {
        this.isWindowTopShow = false;
        this.homeIconShow = true;
      }
    };

    this.index = this.$route.path;
  },
  updated() {
    // 动态
     this.index = this.$route.path;
    if (this.$route.path == "/homepage/type") {
      this.typeIconShow = false;
      this.index = this.$route.path;
    } else {
      this.typeIconShow = true;
      this.index = this.$route.path;
    }
  },
  methods: {
    backHome() {
      if (this.$route.path != "/homepage/home") {
        this.$router.push("/homepage/home");
      }
      // 监听homeIconShow 绑定导航栏图标和返回顶部按钮的显示
      if (this.homeIconShow) {
        window.scrollTo(0, this.likeOffsetTOP - this.goodShopOffsetHeight);
        this.homeIconShow = false;
      } else {
        window.scrollTo(0, 0);
        this.homeIconShow = true;
      }
      // 使用路由地址判断使控制导航点击calss的添加。
      this.index = this.$route.path;
    },
    backType() {
      if (this.$route.path != "/homepage/type") {
        this.$router.push("/homepage/type");
      } else {
        this.$router.push("/search");
      }
      if (this.homeIconShow) {
        this.homeIconShow = false;
      }
    },

    backShopCar() {
      if (this.$route.path != "/homepage/shoppingcar") {
        this.$router.push("/homepage/shoppingcar");
      }
      if (this.homeIconShow) {
        this.homeIconShow = false;
      }
    },
    backMy() {
      if (this.$route.path != "/homepage/myyglogin") {
        this.$router.push("/homepage/myyglogin");
      }
      if (this.homeIconShow) {
        this.homeIconShow = false;
      }
    }
  }
};
</script>

<style>

.other{
  outline: none;
  text-decoration: none;
  color: #333333

}
.home-container {
  width: 100%;
  height: 100%;
}
.footer {
  width: 100%;
  height: 57px;
  position: fixed;
  bottom: 0;
  z-index: 3;
}
.tab-nav {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  background: #ffffff;
  border-top: 1px solid #e6e6e6;
}
.nav-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}
.nav-box .iconfont {
  font-size: 28px;
}

.nav-test {
  line-height: 14px;
  font-size: 14px;
}
.el-icon-star-off {
  font-size: 28px;
  line-height: 30px;
}
.home-actice {
  color: #f60;
}
</style>