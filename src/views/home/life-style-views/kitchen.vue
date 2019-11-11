<template>
  <div class="furniture">
    <div class="kitchen-list">
      <div class="furniture-title">厨房用具</div>
      <div class="kitchen-info">家装放心购</div>
      <div class="furniture-img">
        <img
          src="https://image2.suning.cn/uimg/cms/img/154692961180819483.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="furniture-list">
      <div class="furniture-title">厨卫电器</div>
      <div class="furniture-info">灶具299元抢</div>
      <div class="furniture-img">
        <img
          src="https://image1.suning.cn/uimg/cms/img/154772621803968969.jpg?format=_is_200w_200h.webp"
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
.furniture {
  width: 50%;
  display: flex;
  flex-direction: row;
  /* flex: 1; */
  border-right: 1px solid #f2f2f2;
}
.furniture-list,
.kitchen-list {
  padding: 10px 8px 0 8px;
  text-align: center;
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.furniture-title {
  font-size: 16px;
  color: #333333;
  line-height: 22px;
}

.furniture-info {
  /* flex-grow: 1; */
  font-size: 12px;
  line-height: 16px;
  color: #999999;
}

.furniture-img img {
  width: 100%;
  height: 100%;
}
.kitchen-list {
  width: 50%;
  flex-grow: 1;
  padding: 10px 8px 0 8px;
  border-right: 1px solid #f2f2f2;
}
.kitchen-info {
  font-size: 12px;
  line-height: 14px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>