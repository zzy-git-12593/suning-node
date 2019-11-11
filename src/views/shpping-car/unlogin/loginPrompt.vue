<template>
    <div class="shopping_car_login_prompt" v-if="!isShoppingLogin">
        <span class="shopping_car_login_promt-title">登陆后同步电脑与手机购物车的商品&nbsp;&nbsp;</span>
        <span class="shopping_car_login_button"  @click="shoppingCarLogin">登录</span>
    </div>
</template>
<script>

export default {
    data () {
        return {
            isShoppingLogin:''
        }
    },
    mounted(){
        this.isShoppingLogin=localStorage.token
        
    },
    methods:{
        shoppingCarLogin(){
            this.$router.push('/myygunlogin')
        }
    }
}
</script>
<style>
.shopping_car_login_prompt{
    width: 100%;
    padding: 13px 0;
    text-align: center;
    background: #fff0c9;
}
.shopping_car_login_promt-title{
    font-size: 13px;
    color: #333333;
}
.shopping_car_login_button{
    padding: 2px 8px;
    color: white;
    font-size: 15px;
    background: #f60;
    border-radius: 3px;
}
</style>