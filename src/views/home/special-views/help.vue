<template>
  <div class="help">
    <div class="help-list">
      <div class="help-title">帮客服务</div>
      <div class="help-info">到家生活服务</div>
      <div class="help-img">
        <img
          src="https://image3.suning.cn/uimg/cms/img/154693630298587535.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="help-list">
      <div class="help-title">助农扶贫</div>
      <div class="help-img">
        <img
          src="https://image1.suning.cn/uimg/cms/img/157086458922626132.jpg?format=_is_200w_200h.webp"
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

.help {
  width: 50%;
  /* width: 175.5px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.help-list {
  flex-shrink: 0;
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #f2f2f2;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.help-info {
  /* flex-grow: 1; */
  font-size: 12px;
  line-height: 16px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.help-img img {
  width: 80%;
  height: 80%;
}
</style>