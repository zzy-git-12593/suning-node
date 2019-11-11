<!--商品详情 地址弹窗-->
<template>
    <div class="addressprops">
        <div class="up-down-addressprops">
            <span>地址</span>
            <span class="el-icon-close" @click="addDownClick"></span> 
        </div> 
    </div>
</template>
<script>
export default {
    methods: {
        addDownClick() {
            this.$emit('add-down-click')
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
.addressprops{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.up-down-addressprops{
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    padding: 8px 10px;
}
.up-down-addressprops span:first-child{
    text-align: center;
    flex: 1;
    font-size: 15px;
    color: #333;
}
.up-down-addressprops .el-icon-close{
    flex-shrink: 0;
}
</style>