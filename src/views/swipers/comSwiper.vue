<template>
    <div class="comSwipers">
        <div class="swiper-container top-swiper">
            <div class="swiper-wrapper">
            <slot></slot>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  mounted() {
    new Swiper(".top-swiper", {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                 ' / ' +
                 '<span class="' + totalClass + '"></span>';
        },
      }
    });
  }
};
</script>
<style scoped>
.comSwipers .swiper-container{
    position: relative;
}
.comSwipers .swiper-pagination{
    width: 28px;
    height: 16px;
    line-height: 16px;
    font-size: 8px;
    border-radius: 3px;
    color: #fff;
    background-color: rgba(30,30,30,.6);
    position: absolute;
    left: 91%;
    bottom: 12px;
}
</style>
