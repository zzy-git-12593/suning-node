<template>
  <div class="time-sale">
    <div class="time-sale-title-wrapper">
      <div class="time-sale-title">限时抢购</div>
      <div class="time-sale-spoint">天天秒杀</div>
    </div>
    <div class="time-sale-time-wrapper">
      <div class="time-tag">10点场 距离下场</div>
      <div class="time-desc">
        <span class="hour">{{h}}</span>
        <span class="minute">{{m}}</span>
        <span class="second">{{s}}</span>
      </div>
    </div>
    <div class="time-sale-info-wrapper">
      <div class="time-sale-info" v-for="item in saleList" :key="item.id">
        <img :src="item.img" alt />
        <div class="time-sale-price">￥{{item.price}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      saleList: [
        {
          id: 0,
          img:
            "//image3.suning.cn/uimg/nmps/MBLSPZT/100346324824022529picH_1_370x370.jpg",
          price: "368"
        },
        {
          id: 1,
          img:
            "//image3.suning.cn/uimg/nmps/MBLSPZT/10034654111000982748picH_1_370x370.jpg",
          price: "8699"
        },
        {
          id: 2,
          img:
            "//image1.suning.cn/uimg/nmps/MBLSPZT/100354373107875181picH_1_370x370.jpg",
          price: "748"
        }
      ],
       d: 0,
        h: 0,
        m: 0,
        s: 0
    };
  },
  mounted () {
     setInterval(() => {
            this.timeClick()
        }, 1000);
  },
  methods: {
            timeClick() {
            let nowTime = new Date().getTime();
            let oldTime = new Date("2019-11-11 00:00:00").getTime();
            let time1 = oldTime - nowTime;
            let allS = time1 / 1000;
            let allM = allS / 60;
            let allH = parseInt(allM / 60);
            let d = parseInt(allH / 24);
            let h = allH - d * 24;
            let m = parseInt(allM % 60);
            let s = parseInt(allS % 60);

            d = d < 10 ? "0" + d : d;
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            this.d = d
            this.h = h
            this.m = m
            this.s = s
  }
  }
};
</script>
<style scoped>

.time-sale {
  width: 50%;
  height: 125px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.time-sale-title-wrapper,
.time-sale-time-wrapper,
.time-sale-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.time-sale-title {
  flex-grow: 1;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.time-sale-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.time-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.time-desc span {
  font-size: 12px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 14px;
  border-radius: 5px;
  padding: 0 2px;
  margin-left: 2px;
}
.time-sale-info{
  width: 33.33%;
  flex-shrink: 0;
}
.time-sale-info img{
  width: 100%;
  height: 100%;
}
.time-sale-price {
  font-size: 12px;
  color: #ff4950;
  text-align: center;
  line-height: 12px;
}
</style>