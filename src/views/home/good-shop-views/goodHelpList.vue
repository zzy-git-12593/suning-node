<template>
  <div class="good-help">
    <div class="good-help-title-wrapper">
      <div class="good-help-title">好帮手</div>
    </div>
    <div class="good-help-tag">手残也能变厨神</div>
    <div class="good-help-info-wrapper">
      <div class="good-help-info" v-for="item in goodHelpList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodHelpList: [
        {
          id: 0,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/JZ2GQgliCvpDUliClm0tjQ.jpg?format=_is_200w_200h.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "//imgservice.suning.cn/uimg1/b2c/image/AiOti1gvAT4YkXfJnlqFzQ.jpg?format=_is_200w_200h.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style>
.good-help-info-wrapper {
  position: relative;
  overflow: hidden;
}

.good-help {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.good-help-title-wrapper,
.good-help-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.good-help-title {
  flex-shrink: 0;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.good-help-spoint {
  flex-shrink: 0;
  background-image: linear-gradient(-90deg, #ff4950 0, #ff8123 100%);
  font-size: 12px;
  color: white;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.good-help-tag {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}
.good-help-info img {
  width: 80%;
  height: 80%;
}
.good-help-price {
  position: absolute;
  bottom: 2px;
  left: 20px;
  z-index: 10;
  font-size: 12px;
  color: #333333;
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 12px;
}
</style>