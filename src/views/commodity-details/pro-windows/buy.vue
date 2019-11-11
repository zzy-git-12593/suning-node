<!--商品详情 购买弹窗-->
<template>
    <div class="buys">
         <div class="up-down-buys">
            <span>放心购</span>
            <span class="el-icon-close" @click="fxgDownClick"></span> 
        </div> 
    </div>
</template>
<script>

export default {    
    methods: {
        fxgDownClick() {
            this.$emit('fxg-down-click')
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.buys{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.up-down-buys{
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    padding: 8px 10px;
}
.up-down-buys span:first-child{
    text-align: center;
    flex: 1;
    font-size: 15px;
    color: #333;
}
.up-down-buys .el-icon-close{
    flex-shrink: 0;
}
</style>