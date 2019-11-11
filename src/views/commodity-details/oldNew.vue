<!--商品详情 以旧换新-->
<template>
    <div class="oldnew">
        <div class="oldnew-content">
            <a href="https://hx.m.suning.com/wap/applianceRecovery.do?type=air">
                <div>以旧换新 闲置回收，购机更优惠</div>
                <div><span class="el-icon-arrow-right"></span></div>
            </a>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.oldnew{
    width: 100%;
    background-color: #fff;
    margin-bottom: 9px;
}
.oldnew-content{
    background-color: #fbf2ff;
    overflow: hidden;
}
.oldnew-content a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    text-decoration: none;

}
.oldnew-content a div:first-child{
    color: #9d5cb9;
    font-size: 14px;
    flex: 1;
}
.oldnew .el-icon-arrow-right{
    color: #999;
    font-size: 20px;
    flex-shrink: 0;
}
</style>