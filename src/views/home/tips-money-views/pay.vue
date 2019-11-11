<template>
  <div class="pay">
    <div class="biu-list">
      <div class="pay-title">任性付</div>
      <div class="biu-info">返50元礼包</div>
      <div class="pay-img">
        <img
          src="https://image1.suning.cn/uimg/cms/img/157101939833981546.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="pay-list">
      <div class="pay-title">众筹</div>
      <div class="pay-info">儿童滑步车</div>
      <div class="pay-img">
        <img
          src="https://image1.suning.cn/uimg/cms/img/155922032224417237.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

.pay {
  width: 50%;
  display: flex;
  flex-direction: row;
  /* flex: 1; */
}
.pay-list,
.biu-list {
  width: 50%;
  padding: 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pay-list {
  border-right: 1px solid #f2f2f2;
}
.pay-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}

.pay-info {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
}

.pay-img img {
  width: 100%;
  height: 100%;
}
.biu-list {
  /* flex-grow: 1; */
  border-right: 1px solid #f2f2f2;
}
.biu-info {
  font-size: 12px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>