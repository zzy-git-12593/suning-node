<!--商品详情 底部客服工具栏-->
<template>
    <div class="footertool1">
        <div class="footertool">
            <div class="footertool-top">
                <a class="footertool-icon" href="https://talk8.suning.com/yunxin-web/wap/index.html?bizSeq=0001&bizCode=0001030801000000&custNo=7199500755&prodNo=000000010288345525&shopCode=0000000000&cityCode=025&distCode=0250199&sourceURL=https%253A%252F%252Fm.suning.com%252Fproduct%252F0000000000%252F10288345525.html&groupMember=0010037246&classCode=R0104002&brandId=000011366&groupId=431505&channelId=&produrl=https%253A%252F%252Fm.suning.com%252Fproduct%252F0000000000%252F10288345525.html&prodName=%25E7%25BE%258E%25E7%259A%2584%25EF%25BC%2588Midea%25EF%25BC%25891&prodPrice=2399.00&prodImgUrl=%252F%252Fimgservice.suning.cn%252Fuimg1%252Fb2c%252Fimage%252FePEn-vw58KSUy0DNDAs53w.jpg_800w_800h_4e_100Q&productPosition=SNYG&businessCode=snhl&terminalType=3&pageSource=01&enterCode=02&isSuperVip=&selfShopCode=0030000061&page=&resource=">
                    <span class="iconfont">&#xe611;</span>
                    <span>客服</span>
                </a>
                <a class="footertool-icon" href="https://shop.m.suning.com/30000061.html?utm_source=localhost:8080&utm_medium=referral">
                    <span class="iconfont">&#xe629;</span>
                    <span>店铺</span>
                </a>
                <div class="footertool-icon" @click="goShoppingCar">
                    <span class="iconfont">&#xe615;</span>
                    <span>购物车</span>
                </div>
            </div>
            <div class="footertool-content" @click="shopUpClick">
                <p>
                    <span>10月21日</span>
                    <span>00:00结束</span>
                </p>
                <p><span>加入购物车</span></p>
            </div>

        </div>

        <div class="footertooltc-tc" ref="refshop">
            <!-- 购买弹窗 -->
            <footerToolShop class="footertooltc" @shop-down-click="shopDownClick" ></footerToolShop> 
        </div>

        <!--遮罩层-->
        <div class="zzc-box" ref="shopp" @click="zzcClick"></div>
    </div>
</template>
<script>
import footerToolShop from './pro-windows/footerToolShop'
export default {
    methods: {
        shopUpClick() {
            this.$refs.refshop.style.transition = 'all .3s'
            this.$refs.refshop.style.height = "80%"
            // this.$refs.refshop.style.bottom = "500px"
            this.$refs.shopp.style.display = "block"
        },
        shopDownClick() {
            this.$refs.refshop.style.transition = 'all 0.3s'
            this.$refs.refshop.style.height = "0"
            // this.$refs.refshop.style.bottom = "-50px"
            this.$refs.shopp.style.display = "none"
        },
        zzcClick() {
            this.$refs.refshop.style.transition = 'all 0.3s'
            this.$refs.refshop.style.height = "0"
            this.$refs.shopp.style.display = "none"
        },
        goShoppingCar(){
            this.$router.push('/homepage/shoppingcar')
        }
    },
    components: {
        footerToolShop
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.footertool{
    width: 100%;
    padding: 1px 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
}
.footertool a{
    color: #333;
    text-decoration: none;
}
.footertool-top{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
}
.footertool-icon{
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    flex-shrink: 0;
}
.footertool-content{
    background-color: #f60;
    border-radius: 10px;
    color: #fff;
    display: flex;
    width: 50%;
    margin: 5px 0;
}
.footertool-content p:first-child{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
}
.footertool-content p:last-child{
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-size: 300;
}
.footertool-content p:last-child span{
    border-left: 1px solid #ccc;
    padding: 0 8px;
}

/* 设置弹窗 */
.footertooltc-tc{
    width: 100%;
    height: 0%;
    position: fixed;
    z-index: 10000;
    padding: 5px;
    bottom: -32px;
    left: 0;
}
.footertooltc{
    background-color: #fff;
}
.footertool1 .zzc-box{
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index:  5000;
    display: none;
}
</style>