<template>
  <div class="shoplist">
    <ul>
      <li v-for="item in searchcmmdtyList" :key="item.id"  @click="goCommodityInfoPage(item)">
        <div class="img-box">
          <img :src="item.imgUrl" />
        </div>
        <div class="test-box">
          <div class="top-flex">
            <p class="information">
              <span>自营</span>
              <span>{{item.cmmdtyTitle}}</span>
            </p>
            <p class="introduce">
              <span class="introduce-2" v-for="info in item.info" :key="info">{{info}}</span>
            </p>
          </div>
          <div class="middle-flex">
            <div class="storage" v-if="item.deploy.storage">
              <span>{{item.deploy.storage}}</span>
              <span>机身内存</span>
            </div>
            <div class="ram" v-if="item.deploy.RAM">
              <span>{{item.deploy.RAM}}</span>
              <span>运行内存</span>
            </div>
            <div class="cpu" v-if="item.deploy.size">
              <span>{{item.deploy.size}}英寸</span>
              <span v-if="item.deploy.size > 6">超大屏幕</span>
              <span v-else>屏幕尺寸</span>
            </div>
          </div>
          <div class="bottom-flex">
            <p class="price">
              ￥
              <span>{{item.price}}</span>.00
            </p>
            <p class="coupon">
              <span
                v-for="promotionItem in item.promotionList"
                :key="promotionItem"
              >{{promotionItem}}</span>
            </p>
            <p class="evaluate-praise">
              <span class="evaluate">{{item.reviewCount}}条评价</span>
              <span class="praise">好评率{{item.goodReview}}</span>
            </p>
            <p class="enter-shop">
              {{item.shopName}}
              <span>进店></span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import bus from "@/bus";
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchcmmdtyTitle: "",
      searchcmmdtyList: [],
    };
  },
  mounted() {
    bus.$emit("isShow", false);

    // 本地存储 预防刷新丢失数据
    localStorage.setItem("searchtext",this.$route.query.searchtext);
    if (localStorage.searchtext) {
      this.searchcmmdtyTitle = localStorage.searchtext;
    } else {
      this.searchcmmdtyTitle = this.$route.query.searchtext;
    }
    
    axios.get("http://localhost:3000/typeList").then(res => {
      res.data.filter(item => {
        if (item.cmmdtyTitle.includes(this.searchcmmdtyTitle)) {
          this.searchcmmdtyList.push(item);
          return this.searchcmmdtyList;
        }
      });
      console.log(this.searchcmmdtyList);
    });

     bus.$emit('searchSwiperList',this.searchcmmdtyList)
  },

  // 销毁前传回数据
  destroyed() {
    bus.$emit("isShow", true);
  },
  methods: {
    goCommodityInfoPage(item) {
      this.$router.push({path:"/commpiltyintroduction",query:{commodityID:item.id}});
    }
  }
};
</script>
<style>
.shoplist {
  width: 100%;
  background-color: #fff;
  padding: 10px;
}
.shoplist ul {
  width: 100%;
  list-style: none;
  overflow: hidden;
}
.shoplist ul li {
  width: 100%;
  display: flex;
  margin: 8px 0;
}
.shoplist .img-box {
  width: 33%;
  height: 33%;
  margin-right: 10px;
  position: relative;
}
.shoplist .img-box img {
  width: 100%;
}
.shoplist .test-box {
  width: 67%;
  flex-grow: 1;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottom-flex p {
  margin-bottom: 2px;
}
.shoplist .test-box .middle-flex {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
  color: #333333;
  margin-bottom: 4px;
}
.shoplist .test-box .middle-flex div {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  padding: 3px 5px;
  margin: 10px 0;
  margin-right: 10px;
}
.shoplist .test-box .middle-flex div :nth-child(2) {
  font-size: 12px;
  color: #999999;
}
.shoplist .test-box .bottom-flex {
  margin-bottom: 5px;
}
.shoplist .test-box .information {
  font-size: 13px;
  color: #333333;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 2px;
}
.shoplist .test-box .information span:first-child {
  display: inline-block;
  margin: 0 5px 0 0;
  font-size: 10px;
  line-height: 13px;
  padding: 1px 2px;
  color: white;
  background: #f60;
  border-radius: 10px;
  font-style: normal;
}
.shoplist .test-box .introduce {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shoplist .test-box .introduce .introduce-2:first-child::before {
  content: "";
}
.shoplist .test-box .introduce .introduce-2::before {
  content: "|";
  display: inline-block;
  margin: 0 4px;
  font-size: 15px;
}
.shoplist .test-box .price {
  color: #f60;
  font-size: 12px;
}
.shoplist .test-box .price span {
  font-size: 14px;
  font-weight: 50;
}
.shoplist .test-box .coupon span {
  font-size: 12px;
  color: #f60;
  border: 1px solid #f60;
  /* background-color: #f60; */
  border-radius: 10px;
  padding: 0 8px;
  /* overflow: hidden; */
  /* font-style: normal; */
  margin-right: 4px;
}
.shoplist .test-box .evaluate-praise {
  /* margin-top: 5px; */
  overflow: hidden;
}
.shoplist .test-box .evaluate-praise span {
  color: #999;
  margin-right: 15px;
  font-weight: normal;
  font-size: 12px;
}
.shoplist .test-box .enter-shop {
  color: #999;
  font-size: 12px;
  /* margin-top: 5px; */
  overflow: hidden;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
}
.enter-shop span {
  padding-left: 15px;
}
</style>