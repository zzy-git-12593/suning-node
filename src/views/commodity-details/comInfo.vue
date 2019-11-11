<!--商品详情 上方商品详情-->
<template>
    <div class="comInfo-com">
        <div class="top-comInfo">
            <div class="left-price">
                ￥<span>{{commodityInfoList.price}}</span>已抢53件
            </div>
            <div class="right-time">
                <div class="right-time-top">{{commodityInfoList.promotionInfo}}</div>
                <div class="right-time-content">距结束仅剩</div>
                <div  class="right-time-bottom">
                    {{d}}天<span>{{h}}</span>:<span>{{m}}</span>:<span>{{s}}</span>
                </div>
            </div>
        </div>
        
        <div class="bottom-comInfo">
            <a class="comInfo-com-super"  href="https://supervip.suning.com/snprime-web/m/toIndex.do">
                    <div class="comInfo-com-super-left">
                        <span class="icon">SUPER</span><span>SUPER会员预计返回值85.98元...</span>
                    </div>
                    <div class="comInfo-com-super-right">立即开通</div>
            </a>
            <div class="top-introduce">
                <div class="top-introduce-left">
                    <span class="icn-span" v-if="commodityInfoList.selfSuppor">自营</span>
                    <span class="icop"><span class="icn-span">超级</span><span class="icn-span">新品</span></span>
                    <span>{{commodityInfoList.cmmdtyTitle}}</span>
                </div>
                <div class="icon-right">
                    <span class="el-icon-star-off"></span>
                    <span>关注</span>
                </div>
            </div>
            <div class="bottom-introduce">
                {{commodityInfoList.itemShopInfo.poromotionPointCu}}
                {{commodityInfoList.itemShopInfo.poromotionPointNew}}
                <a href="http://shop.m.suning.com/30001556.html?safp=f73ee1cf.20006.0.6dc5d30bdf&safc=shop.0.0">{{commodityInfoList.itemShopInfo.poromotionPointCu}}</a>
            </div>
        </div>
        <a  class="com-coupon" href="https://snvip.m.suning.com/newmem.html?bizCode=140000000010">
            <p class="img">
                <img src="https://image.suning.cn/uimg/cms/img/156680661067957216.png">
                <span>新人领券首单免邮</span>
            </p>
            <p class="img">
                <span>立即领取</span>
                <span class="el-icon-arrow-right"></span>
            </p>
        </a>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
    data(){
        return {
            d: 0,
            h: 0,
            m: 0,
            s: 0
        }
    },
    computed:{
    ...mapState(['commodityInfoList'])
    },
    mounted() {
        setInterval(() => {
            this.timeClick()
        }, 1000);
    },
    methods: {
        timeClick() {
            let nowTime = new Date().getTime();
            let oldTime = new Date("2019-11-11 00:00:00").getTime();
            let time1 = oldTime - nowTime;
            let allS = time1 / 1000;
            let allM = allS / 60;
            let allH = parseInt(allM / 60);
            let d = parseInt(allH / 24);
            let h = allH - d * 24;
            let m = parseInt(allM % 60);
            let s = parseInt(allS % 60);

            d = d < 10 ? "0" + d : d;
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            this.d = d
            this.h = h
            this.m = m
            this.s = s
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
.comInfo-com{
    width: 100%;
    background-color: #fff;
}
.comInfo-com .top-comInfo{
    width: 100%;
    background-image: linear-gradient(90deg,#f4347b,#ef1e1e 66.66%);
    display: flex;
    align-items: center;
}
.comInfo-com .left-price{
    flex: 2;
    padding: 5px 0 0 7px;
    color: #fff;
    font-size: 15px;
}
.comInfo-com .left-price span{
    font-size: 35px;
    line-height: 35px;
    margin-right: 10px;
}
.comInfo-com .right-time{
    background-color: #fff180;
    flex: 1;
    padding: 5px 5px 0;
}
.comInfo-com .right-time-top{
    color: red;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
}
.comInfo-com .right-time-content{
    text-align: center;
    color: #ea3030;
    font-size: 12px;
    padding-top: 2px; 
}
.comInfo-com .right-time-bottom{
    color: #333;
    font-size: 10px;
    text-align: center;
}
.comInfo-com .right-time-bottom span{
    color: #fff;
    background-color: #333;
    border-radius: 3px;
    padding: 1px;
    margin: 0 2px;
}
.comInfo-com .bottom-comInfo{
    width: 100%;
    padding: 12px;
}
.comInfo-com .bottom-comInfo .comInfo-com-super{
    widows: 100%;
    padding: 5px 12px;
    border-radius: 10px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
}
.comInfo-com .bottom-comInfo .comInfo-com-super .comInfo-com-super-left{
    flex-grow: 1;
    padding: 5px 0 5px 0;
    font-size: 14px;
    color: #222;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-items: flex-end;
}
.comInfo-com .bottom-comInfo .comInfo-com-super .comInfo-com-super-right{
    flex-shrink: 0;
    font-size: 13px;
    color: #222;
    padding: 0 12px;
}
.comInfo-com .bottom-comInfo .comInfo-com-super .comInfo-com-super-right::before{
    content: "";
    margin: 5px;
    border-left: 1px solid rgba(0,0,0,0.05);
    color: rgba(0,0,0,0.05)
}
.comInfo-com .bottom-comInfo .top-introduce{
    width: 100%;
    display: flex;
    margin-top: 15px;
}
.comInfo-com .top-introduce .top-introduce-left{
    width: 100%;
    color: #333;
}
.comInfo-com .top-introduce .top-introduce-left .icn-span{
    width: 30px;
    height: 18px;
    padding: 0 5px 0;
    background-color: #fc0;
    border-radius: 3px;
    font-size: 9px;
    margin-right: 3px;
}
.comInfo-com .top-introduce .top-introduce-left span{
    width: 30px;
    font-size: 9px;
    flex-shrink: 0;
}
.comInfo-com .top-introduce .top-introduce-left > span:last-child{
    font-weight: 700;
    font-size: 16px;
}
.icon-right{
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    flex-shrink: 0;
    color: #333;
    font-weight: 500;
}
.icon-right span:last-child{
    font-size: 12px;
}
.comInfo-com .bottom-introduce{
    font-size: 13px;
    color: #999;
    word-break: break-word;
    margin-top: 10px;
}
.comInfo-com .bottom-introduce > a{
    color: #f42;
    margin-left: 5px;
    text-decoration: underline;
}
.comInfo-com .com-coupon {
    width: 100%;
    font-size: 13px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comInfo-com .com-coupon .img{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.comInfo-com .com-coupon img{
    width: 18px;
    height: 18px;
    margin-right: 12px;
}
.comInfo-com a p{
    color: #333;
}
.comInfo-com .el-icon-arrow-right{
    font-size: 20px;
    color: #999;
}
a{
    text-decoration: none;
}
</style>