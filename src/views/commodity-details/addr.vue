<!--商品详情 地址-->
<template>
    <div class="addr">
        <!--送至-->
        <div class="addr-content" @click="addUpClick">
            <p>
                <span class="addr-content-left">送至</span>
                <span class="addr-content-right">天津 河西区<br>
                <span class="xh">现货</span>
                <span class="time">，23:00前付款，预计明天（10月18日）前送达</span>
                </span>
            </p>
            <p><span class="el-icon-arrow-right"></span></p>
        </div>

        <!--重量-->
        <div class="zhongliang">
            <span class="addr-content-left">重量</span>
            <span class="addr-content-right">0.54kg</span>
        </div>

        <!--付款-->
        <div class="zhongliang">
            <span class="addr-content-left">付款</span>
            <span class="addr-content-right">支持 易付宝 支付宝</span>
        </div>

        <!--放心购-->
            <div class="addr-content" @click="fxgUpClick">
                <p>
                    <span class="fangxingou"><img src="//image2.suning.cn/uimg/cms/img/155956514386227035.png"></span>
                    <span class="tuihuan">365天代客修15天免举证退换货
                        <p class="fangxingou-content">
                            <span class="el-icon-circle-check"></span><span class="fangxingou-content-text">苏宁发货</span>
                            <span class="el-icon-circle-check"></span><span class="fangxingou-content-text">准时达</span>
                            <span class="el-icon-circle-check"></span><span class="fangxingou-content-text">次日达</span>
                            <span class="el-icon-circle-check"></span><span class="fangxingou-content-text">自提</span>
                        </p>
                        <p class="fangxingou-content">
                            <span class="el-icon-circle-check"></span><span class="fangxingou-content-text">免基础运费（50.00kg内）</span>
                            <span class="el-icon-circle-check"></span><span class="fangxingou-content-text">商品保管说明</span>
                        </p>
                        <p class="fangxingou-content">
                            <span class="el-icon-circle-check"></span><span class="fangxingou-content-text">7天无理由退货（激活后不支持）</span>
                        </p>
                    </span>
                </p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>

        <!--地址弹窗-->
        <div class="buy-tc" ref="ref5">
            <addressProp class="buy" @add-down-click="addDownClick">
            </addressProp>
        </div>
        
        <div class="buy-tc" ref="ref4">
            <buy class="buy" @fxg-down-click="fxgDownClick">
            </buy>
        </div>

        <!--遮罩层-->
        <div class="zzc-box" ref="zzc4" @click="zzcClick"></div>

    </div>
</template>
<script>
    import addressProp from './pro-windows/addressProp'
    import buy from './pro-windows/buy'

    export default {
        methods: {
            fxgUpClick() {
                this.$refs.ref4.style.transition = 'height .5s'
                this.$refs.ref4.style.height = "70%"
                this.$refs.zzc4.style.display = "block"
            },
            fxgDownClick() {
                this.$refs.ref4.style.transition = 'height 0s'
                this.$refs.ref4.style.height = "0%"
                this.$refs.zzc4.style.display = "none"
            },
            addUpClick() {
                this.$refs.ref5.style.transition = 'height .5s'
                this.$refs.ref5.style.height = "70%"
                this.$refs.zzc4.style.display = "block"
            },
            addDownClick() {
                this.$refs.ref5.style.transition = 'height 0s'
                this.$refs.ref5.style.height = "0%"
                this.$refs.zzc4.style.display = "none"
            },
            zzcClick() {
                this.$refs.ref4.style.transition = 'height 0s'
                this.$refs.ref4.style.height = "0%"
                this.$refs.ref5.style.transition = 'height 0s'
                this.$refs.ref5.style.height = "0%"
                this.$refs.zzc4.style.display = "none"
            }
        },
        components: {
            addressProp,buy
        }
    }
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.addr-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    background-color: #fff;
}
.addr-content-left{
    font-size: 13px;
    color: #999;
    margin-right: 8px;
    flex-shrink: 0;
}
.addr-content-right{
    font-size: 14px;
    color: #222;
    flex: 1;
}
.addr-content .el-icon-arrow-right{
    font-size: 20px;
    color: #999;
    flex-shrink: 0;
}
.addr-content .xh{
    font-size: 12px;
    color: #f60;
    margin-left: 33px;
}
.addr-content .time{
    font-size: 12px;
    color: #999;
}
.addr .zhongliang{
    width: 100%;
    background-color: #fff;
    padding: 10px;
}
.addr-content .fangxingou img{
    height: 15px;
}
.addr-content .tuihuan{
    flex: 1;
    color: #f21f3c;
    font-size: 12px;
    margin-left: 8px;
}
.addr .fangxingou-content{
    width: 100%;
    color: #999;
    margin: .3rem;
}
.addr .fangxingou-content .fangxingou-content-text{
    margin-right: .5rem;
}
.addr .fangxingou-content .el-icon-circle-check{
    color: #fc0;
     margin-right: .1rem;
}

/*设置弹窗*/
.buy-tc{
    width: 100%;
    height: 0%;
    position: fixed;
    z-index: 10000;
    padding: 5px;
    bottom: 0;
    left: 0;
}
.buy{
    background-color: #fff;
}
.addr .zzc-box{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index:  5000;
    display: none;
}
</style>