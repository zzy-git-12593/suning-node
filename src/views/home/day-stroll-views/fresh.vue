<template>
  <div class="digital">
    <div class="biu-list">
      <div class="digital-title">0元试用</div>
      <div class="biu-info">realmex2112122</div>
      <div class="digital-img">
        <img
          src="https://image2.suning.cn/uimg/cms/img/157113913717227221.jpg?format=_is_200w_200h.webp"
          alt
        />
      </div>
    </div>
    <div class="digital-list">
      <div class="digital-title">苏宁生鲜</div>
      <div class="digital-info">满158减50</div>
      <div class="digital-img">
        <img
          src="https://image3.suning.cn/uimg/cms/img/156828689541195462.png?format=_is_200w_200h.webp"
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
  width: 50%;
  display: flex;
  flex-direction: row;
}
.digital-list,
.biu-list {
  width: 50%;
  flex-shrink: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
}
.digital-title {
  font-size: 16px;
  color: #333333;
  line-height: 16px;
}
.digital-img{
    flex-grow: 1;
}
.digital-img img {
  width: 100%;
  height: 100%;
}
.biu-list {
  flex-shrink: 0;
  width: 50%;
  flex-grow: 1;
  border-right: 1px solid #f2f2f2;
}
.biu-info,
.digital-info{
  font-size: 12px;
  line-height: 22px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>