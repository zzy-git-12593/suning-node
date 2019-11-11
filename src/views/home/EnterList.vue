<template>
  <div class="enter-wrapper">
    <ul>
      <li v-for="(item,index) in enterList" :key="index">
        <img
          :src="`https://image2.suning.cn/uimg/cms/img/${item.imgID}.png?format=_is_120w_120h.webp`"
          alt
        />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      enterList: [
        { name: "爆款手机", imgID: "157165880722181116" },
        { name: "苏宁超市", imgID: "157165889469283916" },
        { name: "生活家电", imgID: "157165891799364137" },
        { name: "苏宁生鲜", imgID: "157165893790085815" },
        { name: "母婴玩具", imgID: "157165895671653077" },
        { name: "限时抢购", imgID: "157165897779526702" },
        { name: "赚钱", imgID: "154708810364057852" },
        { name: "苏宁拼团", imgID: "157165906281444963" },
        { name: "苏宁家电", imgID: "157165908511134313" },
        { name: "签到有礼", imgID: "157165912004147386" }
        // url https://image2.suning.cn/uimg/cms/img/157113726487666768.png?format=_is_120w_120h.webp
      ]
    };
  }
};
</script>

<style scoped>
ul {
  width: 100%;
  margin-top: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-image: url(https://image1.suning.cn/uimg/cms/img/157112633279191686.jpg); */
  background-size: 15rem 6.48rem;
  padding: 15px 0
}
li{
    width: 20%;
    padding-top: 10px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: #333333;
}
li img{
    width: 42px;
    height: 42px;
}
</style>