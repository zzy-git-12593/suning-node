<!--登录界面工具栏-->
<template>
    <div class="myyg-tools">
        <div class="myyg-tools-content">
            <div class="myyg-tools-content-top">
                必备工具
            </div>
            <ul>
                <li>
                    <div><span class="el-icon-switch-button"></span></div>
                    <div>商品关注</div>
                </li>
                <li>
                    <div><span class="el-icon-school"></span></div>
                    <div>店铺关注</div>
                </li>
                <li>
                    <div><span class="el-icon-location-outline"></span></div>
                    <div>足迹</div>
                </li>
                <li>
                    <div><span class="el-icon-service"></span></div>
                    <div>客户服务</div>
                </li>
                <li>
                    <div><span class="el-icon-potato-strips"></span></div>
                    <div>必抢清单</div>
                </li>
                <li>
                    <div><span class="el-icon-picture-outline-round"></span></div>
                    <div>拼购</div>
                </li>
                <li>
                    <div><span class="el-icon-takeaway-box"></span></div>
                    <div>校园VIP</div>
                </li>
                <li>
                    <div><span class="el-icon-shopping-bag-2"></span></div>
                    <div>我的试用</div>
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
.myyg-tools{
    width: 100%;
    padding: 0 10px 8px;
}
.myyg-tools-content{
    width: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
}
.myyg-tools-content-top{
    width: 100%;
    color: #222;
    font-size: 15px;
    font-weight: 700;
}
.myyg-tools-content ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px 0;
}
.myyg-tools-content ul li{
    width: 22%;
    font-size: 12px;
    color: #333;
    text-align: center;
}
.myyg-tools-content ul li div:first-child{
    font-size: 30px;
}
</style>