<!--商品详情 店铺标题-->
<template>
<div class="shoptitle">
    <a href="https://shop.m.suning.com/30001556.html?utm_source=localhost:8080&utm_medium=referral">
        <div class="shoptitle-box">
            <p class="shoptitle-img">
                <img :src="commodityInfoList.shopLogo">
            </p>
            <p class="shoptitle-text">
                <span>{{commodityInfoList.shopName}}</span>
                <span>进店逛逛</span>
            </p>
        </div>
    </a>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['commodityInfoList'])
    },
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.shoptitle a{
    text-decoration: none;
}
.shoptitle-box{
    width: 100%;
    margin-top: 9px;
    padding: 10px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}
.shoptitle-img img{
    width: 60px;
    height: 60px;
    border-radius: 4px;
    flex-shrink: 0;
}
.shoptitle-text{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shoptitle-text  span:first-child{
    flex: 1;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 0 0 5px;
}
.shoptitle-text  span:last-child{
    flex-shrink: 0;
    display: block;
    font-size: 14px;
    color: #000;
    border-radius: 6px;
    background-color: #fc0;
    padding: 5px 12px;
}
</style>