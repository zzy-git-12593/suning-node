<!--验证码登录-->
<template>
    <div class="codelogin">
        <div class="codelogin-nav">
            <a @click="registerClick">个人注册</a>
            <a href="https://reg.suning.com/srs-web/wap/companystep1.do">企业注册</a>
        </div>
        <div class="codelogin-content">
            <h2>欢迎登陆苏宁易购</h2>
            <div class="codelogin-inputBox">
                <input type="tel" placeholder="请输入手机号">
                <span class="el-icon-error"></span>
            </div>
            <div class="codelogin-yzm">
                <div class="codelogin-yzm-lable">
                    <input class="lable" for="yzminput">
                    <input class="lable" for="yzminput">
                    <input class="lable" for="yzminput">
                    <input class="lable" for="yzminput">
                </div>
                <div class="getyzm">获取验证码</div>
            </div>
            <div class="codelogin-dl">
                <div>登录</div>
                <div @click="zhmmloginClick">账号密码登录</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        zhmmloginClick() {
            this.$emit('zhmmlogin-click')
        },
        registerClick(){
            this.$router.push('/register')
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
}
.codelogin-nav a{
    text-decoration: none;
    font-size: 12px; 
    color: #222; 
    display: inline-block;
    padding: 6px 0;
}
.codelogin-nav a:last-child::before{
    content: '|';
    display: inline-block; 
    margin: 0 10px;
    color: #ddd;
}
.codelogin-nav{
    width: 100%; 
    display: flex;
    flex-direction: row; 
    justify-content: flex-end;
    padding: 8px 12px 0;
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
    flex: 1; color: black;
    border: none;
    outline: none;
    caret-color: #fb0;
    font-size: 18px;
}
.codelogin-inputBox .el-icon-error{
    color: #999;
    font-size: 18px;
    flex-shrink: 0;
}
.codelogin-yzm{
    width: 100%;
     margin-top: 15px;
    display: flex; 
    align-items: center;
}
.codelogin-yzm-lable{
    flex: 1;
}
.codelogin-yzm-lable .lable{
    width: 20%;
    outline: none; 
    border: none; 
    font-size: 18px;
    margin-right: 10px; 
    border-bottom: 1px solid #ccc;
    color: black; 
    display: inline-block; 
    padding: 10px
}
.codelogin-yzm .getyzm{
    flex-shrink: 0;
    font-size: 16px; border: 1px solid #ccc;
    border-radius: 4px; padding: 8px 6px;
    font-family: PingFangSC-Regular; 
    color: #ccc;
}
.codelogin-dl{
    width: 100%; 
    margin-top: 30px;
    text-align: center;
}
.codelogin-dl div:first-child{
    width: 100%;
    color: #222; 
    font-size: 16px; 
    font-weight: 700;
    background-color: #fc0;
    border-radius: 8px;
    padding: 12px 0
}
.codelogin-dl div:last-child{
    margin-top: 25px;
    font-size: 15px; 
    color: #333;
}
</style>