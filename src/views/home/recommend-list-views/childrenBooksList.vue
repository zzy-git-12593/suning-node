<template>
  <div class="children-books">
    <div class="children-books-title-wrapper">
      <div class="children-books-title">少儿图书榜</div>
      <div class="children-books-spoint">趋势榜</div>
    </div>
    <div class="children-books-tag">本周趋势上升166%</div>

    <div class="children-books-info-wrapper">
      <div class="children-books-info" v-for="item in childrenBooksList" :key="item.id">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      childrenBooksList: [
        {
          id: 0,
          img:
            "//imgservice.suning.cn/uimg1/sniss/improve/NFv4e_ttopfz5GtsJ6aQnQ.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        },
        {
          id: 1,
          img:
            "https://image.suning.cn/uimg/b2c/qrqm/0070204406000000010520335601.jpg?format=_is_200w_200h_4e.webp",
          name: ""
        }
      ]
    };
  }
};
</script>
<style scoped>

.children-books-info-wrapper {
  position: relative;
  overflow: hidden;
}

.children-books {
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
}
.children-books-title-wrapper,
.children-books-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.children-books-title {
  flex-shrink: 0;
  font-size: 13px;
  color: #333333;
  line-height: 16px;
}
.children-books-spoint {
  flex-shrink: 0;
  font-size: 12px;
  color: #ab813a;
  background-color: #f9f5ee;
  border-radius: 6px;
  line-height: 16px;
  padding: 0 5px;
  margin-left: 5px;
}
.children-books-tag {
  font-size: 12px;
  line-height: 16px;
  color: #999999;
}
.children-books-info {
  position: relative;
}
.children-books-info img {
  width: 80%;
  height: 80%;
  margin-top: 3px
}
.children-books-price {
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