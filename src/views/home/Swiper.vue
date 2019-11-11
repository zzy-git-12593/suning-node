<template>
  <HomeSwiper v-if="homeSwiperList" class="home-swiper">
    <div class="swiper-slide top-swiper-slide" v-for="(item,index) in homeSwiperList" :key="index">
      <img :src="item.url" alt />
    </div>
  </HomeSwiper>
</template>
<script>
import HomeSwiper from "../swipers/homeSwiper";
export default {
  data() {
    return {
      homeSwiperList: [
        {url:'https://image1.suning.cn/uimg/cms/img/157113149900921127.jpg?format=_is_1242w_610h'},
        { url: "//oss.suning.com/aps/aps_learning/iwogh/2019/10/19/09/iwoghBannerPicture/d728132d68cf40479dc3bb16695ed39f.png?format=_is_1242w_610h" },
        { url: "//oss.suning.com/aps/aps_learning/iwogh/2019/10/21/20/iwoghBannerPicture/347a114e5f074a56914b2ec6af371a8f.png?format=_is_1242w_610h" },
        { url: "//oss.suning.com/aps/aps_learning/iwogh/2019/10/18/18/iwoghBannerPicture/1b0defea3153452bb8c142bda9da98a8.png?format=_is_1242w_610h" },
        { url: "//oss.suning.com/aps/aps_learning/iwogh/2019/10/18/18/iwoghBannerPicture/4a47d0f6109d4ba2a76922c961c0c055.png?format=_is_1242w_610h" },
        { url: "//image.suning.cn/uimg/aps/material/157138904479052717.jpg?format=_is_1242w_610h" },
        { url: "//oss.suning.com/aps/aps_learning/iwogh/2019/10/21/20/iwoghBannerPicture/347a114e5f074a56914b2ec6af371a8f.png?format=_is_1242w_610h" },
        { url: "//oss.suning.com/aps/aps_learning/iwogh/2019/10/18/18/iwoghBannerPicture/1b0defea3153452bb8c142bda9da98a8.png?format=_is_1242w_610h" }
        // { url: "/images/homeswiper/swiperimg8.jpg" }
      ]
    };
  },
  components: {
    HomeSwiper
  }
};
</script>
<style>
.home-swiper{
  background-size: 130px;
  background: rgb(255, 219, 71);
  /* height:230px ; */
  /* height: 184px; */
  /* width:100%; */
}
.top-swiper-slide img{
  width: 90%;
  display: block;
  margin:60px auto 8px;
  border-radius: 17px;
}

</style>