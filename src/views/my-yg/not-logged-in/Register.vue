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
                <input type="tel" placeholder="请输入手机号/用户名/邮箱" v-model="userName" @input="changeInput">
                <span class="el-icon-error" @click="clearInfoClick"></span>
            </div>
            <!-- 注册状态提示 -->
            <span class="prompt_title">{{prompt}}</span>

            <div class="codelogin-inputBox">
                <input type="password" placeholder="请输入密码" v-model="userPassword" @input="changeInput">
            </div>
            <div class="codelogin-dl" @click="registerClick" :class="{active:isWrite}">
                {{msg}}<span>{{count}}</span>
            </div>
       </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            userName:'',
            userPassword:'',
            isWrite:false,

            signState:false,
            msg :'点击注册',
            prompt:'',
            count:'',
            timer:null
        }
    },
    methods: {

        changeInput() {
            this.prompt = '';
            if(this.userName && this.userPassword ){
                this.isWrite =true
            }else{
                 this.isWrite =false
            }
        },
        // 返回事件
        backClick(){
            this.$router.go(-1)
        },
        // 清除事件
        clearInfoClick(){
            // 当为注册成功不可以清除
            if(!this.signState) {
                this.userName = '' ;
                this.userPassword ='';
                this.prompt = '';
            }
        },
        
        // 注册事件
        registerClick(){
           
            // 正则
            let exg = /^[a-z1-9]{4,30}$/;
            if(exg.test(this.userName) && exg.test(this.userPassword) && !this.signState) {
                    this.signAjax()
            }else {
                // 当用户注册成功后，正在跳转状态，点击不显示
                if(!this.loginState) {
                    this.prompt = '请输入正确的用户名或密码'
                }               
            }
        },

        // ajax
        signAjax() {
             axios.post('http://localhost:2000/user/sign',{
                userInfo:{
                    name:this.userName,
                    pwd:this.userPassword
                }
            }).then((res)=>{

                // 注册成功
                if(res.data.state){
                    this.msg =res.data.msg;
                    this.count=3;
                    this.signState= true;//注册状态为true
                    // 3s后跳转路由，宏任务最后执行
                    setTimeout(() => {
                        clearInterval(this.timer)
                        this.$router.push('/myygunlogin')
                    }, 3000);   

                    // 倒计时计时器
                    this.timer = setInterval(() => {
                        console.log('---')
                        this.count--
                    }, 1000);
                
                // 注册失败 ：1-账号名重复 2：账号密码输入错误
                } else {
                    this.prompt =res.data.msg
                }
            }).catch((err)=>{console.log(err)})  
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


.prompt_title{
    display: block;
    height: 14px;
    padding: 5px 0;
    font-size: 12px;
    line-height: 14px;
    color: red;
}
</style>