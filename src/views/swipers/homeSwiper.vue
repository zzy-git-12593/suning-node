<template>
  <div class="swiper-container top-swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  mounted() {
    new Swiper(".top-swiper", {
      loop: true,
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style>
.top-swiper .swiper-pagination-bullet {
  border-radius: 0;
  width: 6px;
  height: 3px;
  background: white;
}
</style>
