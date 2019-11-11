<!--商品详情 优惠-->
<template>
    <div class="discounts-tc">
        <div class="discounts">
            <div class="discounts-discountsprop" @click="yhUpClick">
                <p>
                    <span class="youhui">优惠</span>
                    <span>可参加以下优惠活动</span>
                </p>
                <p>
                    <span>查看</span>
                    <span class="el-icon-arrow-right"></span>
                </p>
            </div>
            <div class="yh-test" @click="yhUpClick">
                <p><span>云钻促销</span>普通会员立返644云钻</p>
                <p><span>实名领券</span>实名认证领10元支付券</p>
                <p><span>限量赠</span>1-100000名送赠品（赠完即止）</p>
            </div>
            <div class="discounts-scrapeprop" @click="gqUpClick">
                <p>
                    <span class="guaquan">刮券</span>
                    <span class="yunzuan">云钻</span>
                    <span class="yunzuan2">刮券</span>
                    <span class="guazhong">100%刮中券，最高50元无敌券</span>
                </p>
                <p><span class="el-icon-arrow-right"></span></p>
            </div>  
        </div>
        <div class="scrapeprop-tc" ref="ref2">
            <!--优惠弹窗-->
            <discountsProp class="scrapeprop" @yh-down-click="yhDownClick">
            </discountsProp>
        </div>

        <div class="scrapeprop-tc" ref="ref1">
            <!--刮券弹窗-->
            <scrapeProp class="scrapeprop" @gq-down-click="gqDownClick">  
            </scrapeProp> 
        </div>

        <!--遮罩层-->
        <div class="zzc-box" ref="zzc1" @click="zzcClick"></div>

    </div>
</template>
<script>
import discountsProp from './pro-windows/discountsProp'
import scrapeProp from './pro-windows/scrapeProp'
export default {    
    methods: {
        gqUpClick() {
            this.$refs.ref1.style.transition = 'height .5s'
            this.$refs.ref1.style.height = "70%"
            this.$refs.zzc1.style.display = "block"
        },
        gqDownClick() {
            this.$refs.ref1.style.transition = 'height 0s'
            this.$refs.ref1.style.height = "0%"
            this.$refs.zzc1.style.display = "none"
        },
        yhUpClick() {
            this.$refs.ref2.style.transition = 'height .5s'
            this.$refs.ref2.style.height = "70%"
            this.$refs.zzc1.style.display = "block"
        },
        yhDownClick() {
            this.$refs.ref2.style.transition = 'height 0s'
            this.$refs.ref2.style.height = "0%"
            this.$refs.zzc1.style.display = "none"
        },
        zzcClick() {
            this.$refs.ref1.style.transition = 'height 0s'
            this.$refs.ref1.style.height = "0%"
            this.$refs.ref2.style.transition = 'height 0s'
            this.$refs.ref2.style.height = "0%"
            this.$refs.zzc1.style.display = "none"
        }
    },
    components: {
        discountsProp,
        scrapeProp
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.discounts-discountsprop{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.discounts-discountsprop p:first-child{
    font-size: 13px;
    color: #333;
}
.discounts-discountsprop .youhui{
    margin-right: 8px;
    color: #999;
}
.discounts-discountsprop p:last-child{
    color: #999;
    font-size: 12px;
    display: flex;
    align-items: center;
}
.discounts-discountsprop .el-icon-arrow-right{
    font-size: 20px;
}
.discounts{
    width: 100%;
    background-color: #fff;
    margin-top: 9px;
    font-size: 13px;
    padding: 12px 10px;
}
.discounts .yh-test{
    width: 100%;
    padding-bottom: 12px;
    border-bottom: 1px solid #eee;
    margin-left: 35px;
}
.discounts .yh-test p{
    width: 100%;
    margin-top: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
}
.discounts .yh-test span{
    border: 1px solid #fb0;
    background-color: #fefbee;
    border-radius: 3px;
    color: #222;
    font-size: 10px;
    padding: 1px 3px;
    margin-right: 8px;
}
.discounts-scrapeprop{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
}
.discounts-scrapeprop .guaquan{
    color: #999;
    font-size: 13px;
}
.discounts-scrapeprop .yunzuan{
    background-color: #fc0;
    font-size: 10px;
    color: #222;  
    padding: 0 3px 0 4px;
    border-top: 1px solid #fc0;
    border-bottom: 1px solid #fc0;
    margin-left: 5px;
}
.discounts-scrapeprop .yunzuan2{
    background-color: #fffae3;
    font-size: 10px;
    color: #222;  
    padding: 0 4px 0 3px;
    border-top: 1px solid #fc0;
    border-bottom: 1px solid #fc0;
    margin-right: 5px;
}
.discounts-scrapeprop .guazhong{
    font-size: 13px;
    color: #222;
}
.discounts-scrapeprop .el-icon-arrow-right{
    font-size: 20px;
    color: #999;
}
/* 设置弹窗 */
.scrapeprop-tc{
    width: 100%;
    height: 0%;
    position: fixed;
    z-index: 10000;
    padding: 5px;
    bottom: 0;
    left: 0;
}
.scrapeprop{
    background-color: #fff;
}
.discounts-tc .zzc-box{
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