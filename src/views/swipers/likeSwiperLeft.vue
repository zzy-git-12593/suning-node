<template>
    <div class="comSwipers">
        <div class="swiper-container left-swiper">
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
    this.$nextTick(()=>{
        new Swiper(".left-swiper", {
    });
    })
    
  }
};
</script>
<style scoped>
</style>