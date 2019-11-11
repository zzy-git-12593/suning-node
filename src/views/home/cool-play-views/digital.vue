<template>
  <div class="digital">
    <div class="biu-list">
      <div class="digital-title">智能数码</div>
      <div class="biu-info">爆款12期免息</div>
      <div class="digital-img">
        <img
          src="https://image3.suning.cn/uimg/cms/img/156611193891844356.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="digital-list">
      <div class="digital-title">Biu+优品</div>
      <div class="digital-info">智能门锁1099</div>
      <div class="digital-img">
        <img
          src="https://image2.suning.cn/uimg/cms/img/157110351245468376.jpg?format=_is_200w_200h.webp"
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
.digital {
  flex-shrink: 0;
  width: 50%;
  display: flex;
  flex-direction: row;
}
.digital-list,
.biu-list {
  width: 50%;
  padding: 10px 8px 0 8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.digital-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}

.digital-img img {
  width: 80%;
  height: 80%;
}
.biu-list {
  width: 50%;
  flex-grow: 1;
  border-right: 1px solid #f2f2f2;
}
.biu-info,
.digital-info {
  font-size: 12px;
  line-height: 22px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>