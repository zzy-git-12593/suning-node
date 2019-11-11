<!--登录界面顶部导航-->
<template>
    <div class="topnav">
        <div class="topnav-myyg">
            <span>我的易购</span>
            <span class="el-icon-setting"></span>
        </div>
        <div class="topnav-card">
            <div class="topnav-card-img">
                <img src="//image.suning.cn/uimg/cmf/cust_headpic/0000000000_01_240x240.jpg">
                <p>去实名认证</p>
            </div>
            <div class="topnav-card-tel">
                <p>183******50</p>
                <p>升级权益<span class="el-icon-arrow-right"></span></p>
            </div>
            <div class="topnav-card-huiyuan">
            <p><span class="el-icon-s-operation"></span></p>
            <p>会员码</p>
            </div>
        </div>
        <ul>
            <li>
                <div>0</div>
                <div>优惠券</div>
            </li>
            <li>
                <div>0</div>
                <div>领云钻</div>
            </li>
            <li>
                <div>0</div>
                <div>我的关注</div>
            </li>
            <li>
                <div>0</div>
                <div>足迹</div>
            </li>
        </ul>
        <div class="topnav-vip-box">
            <div class="topnav-vip">
                <p><img src="https://oss.suning.com/vss/activity/wximg/my/vip.png"></p>
                <p class="topnav-vip-text">尊享9大特权，全年预计可省&869！</p>
                <p class="topnav-vip-go">更多权益<span class="el-icon-arrow-right"></span></p>
            </div>
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
.topnav{
    width: 100%;
    background-color: #FFDB47;
    position: relative;
    margin-bottom: 40px;
}
.topnav-myyg{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 15px;
}
.topnav-myyg span:first-child{
    flex: 1;
    text-align: center;
    font-size: 18px;
    color: #000;
    font-weight: bold;
}
.topnav-myyg .el-icon-setting{
    font-size: 20px;
    color: #000;
}
.topnav-card{
    width: 100%;
    padding: 25px 20px;
    display: flex;
    align-items: center;
}
.topnav-card-img{
    position: relative;
    width: 70px;
    flex-shrink: 0;
    margin-right: 15px;
}
.topnav-card-img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.topnav-card-img p{
    text-align: center;
    font-size: 12px;
    color: #222;
    background-color: #FFECA3;
    border-radius: 15px;
    padding: 1px 5px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.topnav-card-tel{
    flex: 1;
}
.topnav-card-tel p:first-child{
    font-size: 13px;
    color: #222;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
}
.topnav-card-tel p:last-child{
    width: 70px;
    text-align: center;
    background-color: #E1BB23;
    color: #fff;
    font-size: 12px;
    border-radius: 15px;
    margin-top: 10px;
}
.topnav-card-huiyuan{
    flex-shrink: 0;
    text-align: center;
    background-color: #FFECA3;
    border-radius: 8px;
    padding: 8px 10px;
}
.topnav-card-huiyuan .el-icon-s-operation{
    font-size: 25px;
}
.topnav-card-huiyuan p:last-child{
    font-size: 13px;
    color: black;
}
.topnav ul{
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    text-align: center;
}
.topnav ul li{
    width: 18%;
}
.topnav ul li div:last-child{
    font-size: 13px;
    color: #222;
    margin-top: 5px;
}
.topnav-vip-box{
    position: absolute;
    bottom: -30px;
    width: 100%;
    padding: 0 10px;
}
.topnav-vip{
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
}
.topnav-vip p:first-child{
    width: 45px;
    flex-shrink: 0;
    margin: 8px 8px 3px;
}
.topnav-vip p:first-child img{
    width: 100%;
    height: 100%;
}
.topnav-vip-text{
    flex: 1;
    font-size: 12px;
    color: #222;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.topnav-vip-go{
    width: 80px;
    flex-shrink: 0;
    display: flex;
    color: #444;
    font-size: 12px;
    align-items: center;
    justify-content: space-between;
}
.topnav-vip-go .el-icon-arrow-right{
    font-size: 15px;
    color: #999;
    margin-right: 10px;
}
</style>