<!--密码登录-->
<template>
    <div class="codelogin">
        <div class="codelogin-nav">
            <a @click="registerClick">个人注册</a>
            <a href="https://reg.suning.com/srs-web/wap/companystep1.do">企业注册</a>
        </div>
        <div class="codelogin-content">
            <h2>欢迎登陆苏宁易购</h2>
            <!-- 账号 -->
            <div class="codelogin-inputBox">
                <input type="text" placeholder="请输入手机号/用户名/邮箱" v-model="userName" @input="changeInput">
                <span class="el-icon-error" @click="clearInfoClick"></span>
            </div>
            <!-- 信息提示 -->
            <span class="prompt_title">{{prompt}}</span>

            <!-- 账号 -->
            <div class="codelogin-inputBox">
                <input type="password" placeholder="请输入密码" v-model="userPassword"  @input="changeInput">
                <div>
                    <span class="el-icon-error" @click="clearInfoClick"></span>
                    <span @click="iconyanjingTtianchongClick" v-if="show==='iconyanjing'" class="iconfont iconyanjing"></span>
                    <span @click="iconyanjingClick" v-if="show==='iconyanjing-tianchong'" class="iconfont iconyanjing-tianchong"></span>
                    <span class="codelogin-inputBox-paddword">忘记密码</span>
                </div>
            </div>
            <div class="codelogin-dl">
                <div class="register-btn" @click="logInClick" :class="{active:isWrite}">{{msg}}{{count}}</div>
                <div class="verification-btn" @click="yzmloginClick">验证码登录</div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import axios from "axios";
export default {
    data(){
        return {
            show: 'iconyanjing',
            userName:'',
            userPassword:'',
            isWrite:false,
            msg :'登录',
            loginState:false,
            prompt:'',
            count:'',
            timer1:null,
            timer2:null
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    methods: {

        // 监听输入框输入状态
        
        changeInput() {
            this.prompt = '';
            if(this.userName && this.userPassword ){
                this.isWrite =true
            }else{
                 this.isWrite =false
            }
        },

        yzmloginClick() {
            this.$emit('yzmlogin-click')
        },
        iconyanjingTtianchongClick() {
            this.show = 'iconyanjing-tianchong'
        },
        iconyanjingClick() {
            this.show = 'iconyanjing'
        },

        clearInfoClick(){
            // 当为登录成功不可以清除
            if(!this.loginState) {
                this.userName = '' ;
                this.userPassword ='';
                this.prompt = '';
            }
        },
        registerClick(){
            this.$router.push('/register')
        },

        // 登录事件
        logInClick(){
            
            // 后台请求登录验证
            // 验证合法
            let exg = /^[a-z1-9]{4,30}$/;
        
            if (exg.test(this.userName) && exg.test(this.userPassword) && !this.loginState) {// 登录状态为true时，就不能取消点击请求事件
               
                this.loginAjax();

            } else {// 登录后验证 或者用户名不符合规范时

                if(!this.loginState) {// 当用户登录成功后，正在跳转状态，点击不显示
                    this.prompt = '请输入正确的用户名或密码'
                }
            }
        },       
        // ajax
        loginAjax() {
            // ajax后端验证
            axios.post('http://localhost:2000/user/login', { 
                userInfo:{
                    name:this.userName,
                    pwd :this.userPassword
            }}).then((res)=> {
                // 验证合法
                console.log(res)
                if (res.data.state) {

                    // 设置3s延迟跳转字段
                    this.msg= '登录成功，即将跳转后台界面';
                    this.count = 3;
                    this.loginState= true;//登录状态为true
                    // 本地存储token
                    localStorage.setItem('token',res.data.token)
                    // 计时时器
                    this.timer1 = setInterval(() => {
                        this.count--
                    }, 1000);

                    // 定时器
                    this.timer2  = setTimeout(()=>{

                        // 清除计时器
                        clearInterval(this.timer1);
                        this.timer1=null;
                        clearTimeout(this.timer2)
                        this.timer2=null;
                        this.$router.push('/homepage/home');
                    }, 3000)

                } else {
                    this.prompt ='用户名或者密码错误'
                }
            })
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

.codelogin-nav{
    width: 100%;
    text-align: right;
    padding: 25px 30px 0;
}

.codelogin-nav a{
    text-decoration: none;
    font-size: 12px; 
    color: #222; 
    margin-left: 10px
}
.codelogin-content{
    width: 100%; 
    margin-top: 50px;
    padding:0 35px;
}
.codelogin-content h2{
    width: 100%;
    font-weight: 500; 
    font-size: 18px;
    margin-bottom: 25px
}
.codelogin-inputBox{
    width: 100%;
    margin-top: 15px;
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    border-bottom: 1px solid #ddd; 
    padding: 10px 0;
}
.codelogin-inputBox input{
    width: 60%;
    flex: 1; 
    border: none;
    outline: none;
    caret-color: #fb0;
    font-size: 16px;
    overflow: hidden;
}
.codelogin-inputBox .el-icon-error{
    color: #999;
    font-size: 16px;
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

.prompt_title{
    display: block;
    height: 14px;
    padding: 5px 0;
    font-size: 12px;
    line-height: 14px;
    color: red;
}
</style>