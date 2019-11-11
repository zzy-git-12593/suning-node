<!--商品详情 选择弹窗-->
<template>
    <div class="chosedprops">
        <div class="up-down-chosedprops">
            <span>已选</span>
            <span class="el-icon-close" @click="yxDownClick"></span> 
        </div> 
    </div>
</template>
<script>
export default {
    methods: {
        yxDownClick() {
            this.$emit('yx-down-click')
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
.chosedprops{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.up-down-chosedprops{
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    padding: 8px 10px;
}
.up-down-chosedprops span:first-child{
    text-align: center;
    flex: 1;
    font-size: 15px;
    color: #333;
}
.up-down-chosedprops .el-icon-close{
    flex-shrink: 0;
}
</style>