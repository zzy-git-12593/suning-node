<!--商品详情 底部商品简介tab页切换-->
<template>
    <div class="comintroducations">
        <ul>
            <li :class="{active1: msg===1}" @click="tabClick(1)">图文详情</li>
            <li :class="{active1: msg===2}" @click="tabClick(2)">规格参数</li>
            <li :class="{active1: msg===3}" @click="tabClick(3)">包装售后</li>
        </ul>
        <imageText v-if="msg===1"></imageText>
        <parameter v-if="msg===2"></parameter>
        <afterSale v-if="msg===3"></afterSale>
    </div>
</template>
<script>
import imageText from './comintroducations/imageText'
import parameter from './comintroducations/parameter'
import afterSale from './comintroducations/afterSale'
export default {
    data(){
        return {
            msg: 1
        }
    },
    methods: {
        tabClick(msg) {
            this.msg = msg
        }
    },
    components: {
        imageText,
        parameter,
        afterSale
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.comintroducations {
    width: 100%;
    margin-top: 9px;
}
.comintroducations ul{
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
    background-color: #fff;
}
.comintroducations ul li{
    line-height: 25px;
    font-size: 15px;
    color: #333;
    margin: 0 10px;
    border-bottom: 2px solid #fff;
    padding: 8px 0;
}
.comintroducations .active1{
    border-bottom-color: #fc4;
    font-weight: bold;
}
</style>