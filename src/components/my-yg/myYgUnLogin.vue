<template>
    <div class="myygunlogin">
        <CodeLogin v-if="myyg==='login'" @zhmmlogin-click="zhmmloginClick"></CodeLogin>
        <PasswordLogin v-if="myyg==='unlogin'" @yzmlogin-click="yzmloginClick"></PasswordLogin>
        <OtherLogin></OtherLogin>
    </div>
</template>
<script>
import CodeLogin from "../../views/my-yg/not-logged-in/CodeLogin";
import PasswordLogin from "../../views/my-yg/not-logged-in/PasswordLogin";
import OtherLogin from "../../views/my-yg/not-logged-in/OtherLogin";

export default {
  data(){
    return {
      myyg: 'login'
    }
  },
  methods: {
    zhmmloginClick() {
      this.myyg = 'unlogin'
    },
    yzmloginClick(){
      this.myyg = 'login'
    }
  }, 
  components: {
    CodeLogin,PasswordLogin,OtherLogin
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.myygunlogin{
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>