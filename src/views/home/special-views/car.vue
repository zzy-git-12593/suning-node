<template>
  <div class="car">
    <div class="car-list">
      <div class="car-title">汽车生活</div>
      <div class="car-info">低至39800元</div>
      <div class="car-img">
        <img
          src="https://image3.suning.cn/uimg/cms/img/156317749614588216.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="car-list">
      <div class="car-title">苏宁3C</div>
      <div class="car-info">定金最高低至999999</div>
      <div class="car-img">
        <img
          src="https://image2.suning.cn/uimg/cms/img/156317679963624452.jpg?format=_is_200w_200h.webp"
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

.car {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.car-list {
  text-align: center;
  flex-shrink: 0;
  width: 50%;
  padding: 10px 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-right: 1px solid #f2f2f2;
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.car-info {
  font-size: 12px;
  line-height: 16px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.car-img img {
  width: 80%;
  height: 80%;
}
</style>