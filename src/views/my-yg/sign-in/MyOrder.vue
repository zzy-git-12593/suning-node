<!--登录界面我的订单-->
<template>
    <div class="myorder">
        <div class="myorder-content">
            <div class="myorder-content-top">
                <p>我的订单</p>
                <p>
                    <span>查看全部</span>
                    <span><span class="el-icon-arrow-right"></span></span>
                </p>
            </div>
            <ul>
                <li>
                    <div><span class="el-icon-bank-card fc0"></span></div>
                    <div>待支付</div>
                </li>
                <li>
                    <div><span class="el-icon-truck fc0"></span></div>
                    <div>代收货</div>
                </li>
                <li>
                    <div><span class="fc0 el-icon-chat-line-square"></span></div>
                    <div>评价有礼</div>
                </li>
                <li>
                    <div><span class="el-icon-circle-check fc0"></span></div>
                    <div>退换/售后</div>
                </li>
                <li>
                    <div><span class="el-icon-tickets fc0"></span></div>
                    <div>常购清单</div>
                </li>
            </ul>
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
.myorder{
    width: 100%;
    padding: 0 10px 8px;
}
.myorder-content{
    width: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
}
.myorder-content-top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.myorder-content-top p:first-child{
    flex: 1;
    color: #222;
    font-size: 15px;
    font-weight: 700;
}
.myorder-content-top p:last-child{
    flex-shrink: 0;
    width: 70px;
}
.myorder-content-top p:last-child span:first-child{
    color: #666;
    font-size: 13px;
    font-weight: 700;
}
.myorder-content-top p:last-child span:last-child{
    flex-shrink: 0;
    width: 15px;
    height: 15px;
    background-color: #fc0;
    border-radius: 100%;
}
.myorder-content ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
}
.myorder-content ul li{
    width: 18%;
    font-size: 12px;
    color: #333;
    text-align: center;
}
.myorder-content ul li div:first-child{
    font-size: 30px;
}
.fc0{
    background-color: #fc0;
}
</style>