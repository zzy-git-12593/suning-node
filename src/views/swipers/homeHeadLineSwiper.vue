<template>
  <div class="swiper-container headline">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide-wrapper" v-for="item in swiperNewList" :key="item.id">
        <div class="news-list-wrapper">
          <div class="news-list">
            <div class="slide-title">热门</div>
            <div class="slide-content">{{item.news[0]}}</div>
          </div>
          <div class="news-list">
            <div class="slide-title">热门</div>
            <div class="slide-content">{{item.news[1]}}</div>
          </div>
        </div>
        <div class="news-list-img">
          <img :src="item.url" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  data() {
    return {
      swiperNewList: [
        {
          id: 0,
          news: [
            "小米手环4彩屏，支持NFC健身功能又有新玩法",
            "科技潮牌！华为荣耀5升级智能手环！"
          ],
          url:
            "//image1.suning.cn/uimg/MFS/show/156881507129547415.jpg_252-4-848-848a"
        },
        {
          id: 1,
          news: [
            "智能手环的睡眠监测，到底准确不准确呢",
            "了解自己的健康状态，华为手环能帮到你"
          ],
          url:
            "//image3.suning.cn/uimg/MFS/show/156869138774732632.jpg_0-0-750-750a"
        },
        {
          id: 2,
          news: [
            "荣耀手环4，一款有爱的身体智能管家！",
            "租房族居家好物大搜罗，小型高性价比冰箱高能占C位"
          ],
          url:
            "//image2.suning.cn/uimg/MFS/show/157093667654582483.jpg_0-0-750-750a"
        }
      ]
    };
  },
  mounted() {
    console.log("swiper");
    new Swiper(".headline", {
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 51px;
}
.headline {
  flex-grow: 1;
}
.swiper-wrapper {
  width: 100%;
}
.slide-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.news-list-wrapper {
  width: 80%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.news-list {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  line-height: 12px;
  padding: 2px 0;
}
.slide-title {
  flex-shrink: 0;
  background-color: orange;
  color: white;
  padding: 2px;
  text-align: center;
  border-radius: 8px;
  margin: 0 6px;
}
.slide-content {
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-list-img {
  width: 20%;
  flex-shrink: 0;
  width: 31px;
  height: 31px;
}
.news-list-img img {
  width: 100%;
  height: 100%;
}
</style>
