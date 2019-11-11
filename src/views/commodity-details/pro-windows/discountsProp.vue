<!--商品详情 优惠券弹窗-->
<template>
    <div class="discountsprops">
        <div class="up-down-discountsprops">
            <span>优惠</span>
            <span class="el-icon-close" @click="yhDownClick"></span>
        </div>
        <div class="discountsprops-content">
            <p class="discountsprops-top"><span class="el-icon-odometer"></span>付定金减<span>300</span>，还可参加以下活动</p>
            <p class="cuxiao">促销</p>
            <div class="discountsprops1 discountsprops-flex">
                <p>云钻促销</p>
                <p>
                    普通会员立返239云钻<br>
                    通过购物、评价、打卡、云钻游戏等获得的云钻、可换商品、券、玩游戏、还能购物抵现。
                </p>
            </div>
            <div class="discountsprops2 discountsprops-flex">
                <p>
                    <span>实名领券</span>
                    <span>实名认证领10元支付券</span>
                </p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>
            <div class="discountsprops2 discountsprops-flex">
                <p>
                    <span>赠品</span>
                    <span>送挂壁式空调内清洗套服务 套餐服务 帮客服务 上门服务*1赠完即止</span>
                </p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        yhDownClick() {
            this.$emit('yh-down-click')
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
.discountsprops{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.discountsprops-content .discountsprops-top{
    width: 100%;
    font-size: 13px;
    color: #333;
    padding: 10px 0;
}
.discountsprops-top span{
    color: #f42;
}
.discountsprops-content .cuxiao{
    font-size: 14px;
    color: #999;
    padding: 10px 0;
}
.discountsprops .discountsprops-flex{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 14px;
    color: #222;
}
.discountsprops1 p:first-child{
    flex-shrink: 0;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    padding: 0 1px;
    border: 1px solid #fb0;
    border-radius: 3px;
    margin-right: 8px;
}
.discountsprops1 p:last-child{
    flex: 1;
}
.discountsprops2 p:first-child{
    display: flex;
}
.discountsprops2{
    border-top: 1px solid #eee;
}
.discountsprops2 p:first-child span:first-child{
    flex-shrink: 0;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    padding: 0 1px;
    border: 1px solid #fb0;
    border-radius: 3px;
    margin-right: 8px;
}

.discountsprops2 .el-icon-arrow-right{
    color: #999;
    font-size: 20px;
}
.up-down-discountsprops{
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    padding: 8px 10px;
}
.up-down-discountsprops span:first-child{
    text-align: center;
    flex: 1;
    font-size: 15px;
    color: #333;
}
.up-down-discountsprops .el-icon-close{
    flex-shrink: 0;
}
</style>