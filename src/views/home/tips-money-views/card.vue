<template>
  <div class="card">
    <div class="money-list">
      <div class="card-title">苏宁卡</div>
      <div class="money-info">赢华为手机</div>
      <div class="card-img">
        <img
          src="https://image2.suning.cn/uimg/cms/img/157101911053690612.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="card-list">
      <div class="card-title">苏宁理财</div>
      <div class="card-info">领2.88元红包</div>
      <div class="card-img">
        <img
          src="https://image2.suning.cn/uimg/cms/img/157101927420125251.png?format=_is_200w_200h.webp"
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
.card {
  width: 50%;
  display: flex;
  flex-direction: row;
  /* flex: 1; */
}
.card-list,
.money-list {
  width: 50%;
  padding: 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}

.card-img img {
  width: 100%;
  height: 100%;
}
.money-list {
  width: 50%;
  /* flex-grow: 1; */
  border-right: 1px solid #f2f2f2;
}
.money-info,
.card-info{
  font-size: 12px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>