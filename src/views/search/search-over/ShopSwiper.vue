<template>
  <div class="shopswiper">
    <ul>
      <li v-for="item in shoppingCarList" :key="item.cmmdtyTitle">
        <div class="shopswiper-img">
          <img :src="item.imgUrl" />
        </div>
        <p>{{item.cmmdtyTitle}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import bus from "@/bus"
export default {
  data() {
   return {
      shoppingCarList:[]
   }
  },
  beforeMount () {
    bus.$on('searchSwiperList',data=>{
     this.shoppingCarList = data
     console.log(this.shoppingCarList)
    })
  }
};
</script>
<style>
.shopswiper {
  width: 100%;
  background-color: #f2f2f2;
}
.shopswiper ul::-webkit-scrollbar {
  display: none;
}
.shopswiper ul {
  width: 100%;
  padding: 10px 10px 8px 10px;
  list-style: none;
  display: flex;
  overflow: auto;
}
.shopswiper li {
  width: 26%;
  margin: 0 10px 0 0;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  
}
.shopswiper .shopswiper-img {
  width: 80%;
  padding: 10px 3px 8px 3px;
}
.shopswiper .shopswiper-img img {
  width: 80%;
  display: block;
  margin: 0 auto;
  text-align: center
}
.shopswiper p {
  width: 100%;
  padding: 0 3px;
  font-size: 13px;
  text-align: center;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 5px 2px;
  overflow: hidden;
}
</style>