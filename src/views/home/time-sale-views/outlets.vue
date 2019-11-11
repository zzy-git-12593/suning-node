<template>
  <div class="outlets">
    <div class="outlets-title-wrapper">
      <div class="outlets-title">苏宁Outelets</div>
      <div class="outlets-spoint">大牌特卖</div>
    </div>
    <div class="outlets-tag">星期六满198减100</div>

    <div class="outlets-info-wrapper">
      <div class="outlets-info" v-for="item in outletsList" :key="item.id">
        <img :src="item.img" alt />
        <div class="outlets-price">{{item.name}}</div>
      </div>
      <!-- <div class="nike-logo" :class="isShow?'show':'shows'">
        <img
          src="//image1.suning.cn/uimg/nmps/MPPCLOGO/100358896B612_3.jpg?format=80h_200w_4e_80q"
          alt
        />
      </div> -->
      <!-- <div class="yalu-logo" :class="isShow?'yalushow':'yalushows'">
        <img
          src="//image2.suning.cn/uimg/nmps/MPPCLOGO/100358392294P_3.jpg?format=80h_200w_4e_80q.webp"
          alt
        />
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      ifIF: false,
      outletsList: [
        {
          id: 0,
          img:
            "https://image1.suning.cn/uimg/b2c/qrqm/0010133102000000010574608949_200x200.jpg?ver=2000&from=mobile",
          log:
            "//image1.suning.cn/uimg/nmps/MPPCLOGO/100358896B612_3.jpg?format=80h_200w_4e_80q",
          name: "NIKE"
        },
        {
          id: 1,
          img:
            "https://image3.suning.cn/uimg/b2c/qrqm/0010148725000000011337848432_200x200.jpg?ver=2000",
          log:
            "//image2.suning.cn/uimg/nmps/MPPCLOGO/100358392294P_3.jpg?format=80h_200w_4e_80q.webp",
          name: "YALU"
        }
      ]
    };
  },
  // mounted() {
  //   setInterval(() => {
  //     if (this.isShow === false) {
  //       this.isShow = true;
  //     } else {
  //       this.isShow = false;
  //     }
  //   }, 3000);
  // }
};
</script>
<style scoped>

/* .outlets-info-wrapper {
  position: relative;
  overflow: hidden;
}

.nike-logo {
  background: white;
  position: absolute;
  z-index: 200;
  bottom: -150px;
}
.yalu-logo {
  width: 50%;
  height: 50%;
  background: white;
  position: absolute;
  z-index: 200;
  bottom: -67px;
  right: 13px;
}

.yalushow {
  bottom: 0px;
  transform: scale3d(1, 1, 1);
  transition: all 3s;
}
.yalushows {
  bottom: -150px;
  transform: scale3d(0, 0, 0);
  transition: all 3s;
}

.show {
  bottom: 0px;
  transform: scale3d(1, 1, 1);
  transition: all 3s;
}
.shows {
  bottom: -150px;
  transform: scale3d(0, 0, 0);
  transition: all 3s;
}

.nike-logo img,
.yalu-logo img {
width: 100%;height: 100%;
} */
.outlets {
  flex-shrink: 0;
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.outlets-title-wrapper,
.outlets-info-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.outlets-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #ff4950;
  line-height: 16px;
}
.outlets-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.outlets-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.outlets-info {
  width: 50%;
  position: relative;
}
.outlets-info img {
  width: 100%;
  height: 100;
}
.outlets-price {
  position: absolute;
  bottom: 2px;
  left: 20px;
  z-index: 1;
  font-size: 12px;
  color: #333333;
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 12px;
}
</style>