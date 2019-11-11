<template>
  <div class="grow-up">
    <div class="grow-up-title-wrapper">
      <div class="grow-up-title">不想长大</div>
      <!-- <div class="grow-up-spoint">大牌新品抢先</div> -->
    </div>
    <div class="grow-up-tag">出行就要美美哒</div>

    <div class="grow-up-info-wrapper">
      <div class="grow-up-info" v-for="item in growUpList" :key="item.id">
        <img :src="item.img" alt />
        <div class="grow-up-price" vi-if="item.name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      growUpList: [
        {
          id: 0,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/BLn3mxzEcEEKnmdIXLEjrQ==.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/HdEHbhXih5SyfpCS--cBJA==.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style>
.grow-up-info-wrapper {
  position: relative;
  overflow: hidden;
}

.grow-up {
  width: 50%;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.grow-up-title-wrapper,
.grow-up-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.grow-up-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.grow-up-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.grow-up-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}

.grow-up-info img {
  width: 80%;
  height: 80%;
}
</style>