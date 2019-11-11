<!--密码登录-->
<template>
    <div class="codelogin">
        <div class="codelogin-nav">
            <a @click="registerClick">个人注册</a>
            <a href="https://reg.suning.com/srs-web/wap/companystep1.do">企业注册</a>
        </div>
        <div class="codelogin-content">
            <h2>欢迎登陆苏宁易购</h2>
            <div class="codelogin-inputBox">
                <input type="tel" placeholder="请输入手机号/用户名/邮箱" v-model="userName">
                <span class="el-icon-error" @click="clearInfoClick"></span>
            </div>
            <div class="codelogin-inputBox">
                <input type="password" placeholder="请输入密码" v-model="userPassword">
                <div>
                    <span class="el-icon-error" @click="clearInfoClick"></span>
                    <span @click="iconyanjingTtianchongClick" v-if="show==='iconyanjing'" class="iconfont iconyanjing"></span>
                    <span @click="iconyanjingClick" v-if="show==='iconyanjing-tianchong'" class="iconfont iconyanjing-tianchong"></span>
                    <span class="codelogin-inputBox-paddword">忘记密码</span>
                </div>
            </div>
            <div class="codelogin-dl">
                <div class="register-btn" @click="logInClick" :class="{active:isWrite}">登录</div>
                <div class="verification-btn" @click="yzmloginClick">验证码登录</div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            show: 'iconyanjing',
            userName:'',
            userPassword:'',
            isWrite:false
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    methods: {
        yzmloginClick() {
            this.$emit('yzmlogin-click')
        },
        iconyanjingTtianchongClick() {
            this.show = 'iconyanjing-tianchong'
        },
        iconyanjingClick() {
            this.show = 'iconyanjing'
        },
        logInClick(){
            // 本地存储不存在不能时 不能直接使用json转之后判断判断
            if(localStorage.userInfo){
                let userInfo = JSON.parse(localStorage.userInfo)
                if(this.isWrite){
                    if(userInfo.userName==this.userName && userInfo.userPassword==this.userPassword ){
                        localStorage.token='登陆成功'
                        this.$router.push('/homepage/myyglogin') 
                    }             
                }else{
                        alert('账号或者密码不能为空')
                }  
            }else {
                if(this.isWrite){
                    alert('账号密码不存在，请注册后使用')
                }else{
                   alert('账号或者密码不能为空')
                }
            }
        },
        clearInfoClick(){
            this.userName = ''
            this.userPassword =''
        },
        registerClick(){
            this.$router.push('/register')
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
}
.codelogin-nav a{
    text-decoration: none;
    font-size: 12px; 
    color: #222; 
    display: inline-block;
    padding: 6px 0;
}
.codelogin-nav{
    width: 100%;
    text-align: right;
    padding: 8px 30px 0;
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
.register-btn{
    width: 100%;
    color: white; 
    font-size: 14px; 
    font-weight: 700;
    background-color: #999999;
    border-radius: 8px;
    padding: 12px 0
}
.verification-btn{
    margin-top: 25px;
    font-size: 15px; 
    color: #333;
}
.active{
    background: #fb0;
    color: black;
}
</style>