<template>
  <div id="app"> 
    <transition :name="fade" mode="out-in"> 
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import router from "./router"
import {mapState} from 'vuex'
export default {
computed:{
  ...mapState(['fade'])
},
beforeMount(){
    this.$store.commit('getLocaStorage')
},
};
</script>
<style>

.search-enter, .home-leave-active { opacity: 0; transform: translate3d(-100%, 0, 0);transition: all 0.5s }
.search-leave-active, .home-enter { opacity: 0; transform: translate3d(100%, 0 ,0); transition: all 0.5s }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
 
}
#app {
  width: 100%;
  height: 100%;
}

</style>
