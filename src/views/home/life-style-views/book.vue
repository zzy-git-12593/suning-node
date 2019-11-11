<template>
  <div class="men">
    <div class="book-list">
      <div class="men-title">型格男装</div>
      <div class="book-info">T恤聚惠</div>
      <div class="men-img">
        <img
          src="https://image1.suning.cn/uimg/cms/img/155650593345212382.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="men-list">
      <div class="men-title">苏宁图书</div>
      <div class="men-info">每满49减15</div>
      <div class="men-img">
        <img
          src="https://image1.suning.cn/uimg/cms/img/156015887642688739.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.men {
  width: 50%;
  display: flex;
  flex-direction: row;
  /* flex: 1; */
}
.men-list,
.book-list {
  text-align: center;
  width: 50%;
  padding: 10px 8px 5px 8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.men-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}

.men-info {
  font-size: 12px;
  color: #999999;
}

.men-img img {
  width: 100%;
  height: 100%;
}
.book-list {
  width: 50%;
  flex-grow: 1;
  border-right: 1px solid #f2f2f2;
}
.book-info {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>