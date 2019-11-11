<!--密码登录-->
<template>
    <div class="codelogin">
        <div class="codelogin-nav">
            <span class="el-icon-arrow-left" @click="backClick"></span>
            <a href="">联系客服</a>
        </div>
        <div class="codelogin-content">
            <h2>注册账号</h2>
            <div class="codelogin-inputBox">
                <input type="tel" placeholder="请输入手机号/用户名/邮箱" v-model="userName">
                <span class="el-icon-error" @click="clearInfoClick"></span>
            </div>
            <div class="codelogin-inputBox">
                <input type="password" placeholder="请输入密码" v-model="userPassword">
            </div>
            <div class="codelogin-dl" @click="registerClick" :class="{active:isWrite}">
                点击注册
            </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userName:'',
            userPassword:'',
            isWrite:false
        }
    },
    methods: {
        backClick(){
            this.$router.go(-1)
        },
        registerClick(){
           if(this.isWrite){
                localStorage.userInfo =JSON.stringify({userName:this.userName,userPassword:this.userPassword})
                setTimeout(() => {
                    this.$router.push('/myygunlogin')
                }, 1000);
           }
        },
        clearInfoClick(){
            this.userName = ''
            this.userPassword =''
        }
    },
    updated(){
        if(this.userName&&this.userPassword !==''){
            this.isWrite =true
        }else{
            this.isWrite =false
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;}
.codelogin{
    width: 100%;
    height: 100%;
    background: white;
}
.codelogin-nav{
    width: 100%;
    text-align: right;
    padding: 8px 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
}
.codelogin-nav .el-icon-arrow-left{
    font-size: 22px;
}
.codelogin-nav a{
    text-decoration: none;
    color: #333333; 
    display: inline-block;
    padding: 6px 0;
}

.codelogin-content{
    width: 100%; 
    margin-top: 30px;
    padding:0 35px;
}
.codelogin-content h2{
    width: 100%;
    font-weight: 500; 
    font-size: 18px;
}
.codelogin-inputBox{
    width: 100%;
    margin-top: 30px;
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    border-bottom: 1px solid #ddd; 
    padding: 10px 0;
}
.codelogin-inputBox input{
    width: 60%;
    flex: 1; color: black;
    border: none;
    outline: none;
    caret-color: #fb0;
    font-size: 18px;
    overflow: hidden;
}
.codelogin-inputBox .el-icon-error{
    color: #999;
    font-size: 18px;
    flex-shrink: 0;
}
.codelogin-inputBox div{
    width: 40%;
    display: flex;
    justify-content: space-around;
    flex-shrink: 0;
}
.codelogin-inputBox .iconfont{
    color: #999;
}
.codelogin-inputBox .iconyanjing{
    font-weight: bold;
}
.codelogin-inputBox-paddword {
    color: #333;
    font-size: 13px;
}
.codelogin-dl{
    width: 100%; 
    margin-top: 30px;
    text-align: center;
}
.codelogin-dl{
    width: 100%;
    color: white; 
    font-size: 14px; 
    font-weight: 700;
    background-color: #999999;
    border-radius: 8px;
    padding: 12px 0
}
.active{
    background: #fb0;
    color: black;
}
</style>