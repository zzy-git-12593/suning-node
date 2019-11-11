<template>
    <div class="navbar">
        <ul>
            <li>
                <img src="//image1.suning.cn/uimg/asbs/ad/1571124041223_app_wap_list.png">
            </li>
            <li class="li">苏宁服务
            </li>
            <li class="li">
                <div class="navbar-icon">
                    <span>品牌</span>
                    <span class="down"></span>
                </div>
            </li>
            <li class="li">
                <div class="navbar-icon">
                    <span>CPU类型</span>
                    <span class="down"></span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {}
</script>
<style>
.navbar{
    width: 100%;
    background-color: #fff;
}
.navbar ul{
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 5px;
}
.navbar li{
    width: 25%;
    text-align: center;
    margin-right: 10px;
    padding: 5px 4px;
    border-radius: 2px;
    color: #333;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.navbar .li{
    background-color: #f5f5f5;
}
.navbar img{
    width: 100%;
    height: 100%;
}
.navbar .navbar-icon{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.navbar .down{
    width: 0;
    height: 0;
    border-width: 4px;
    border-style: solid;
    border-color:  black transparent transparent transparent;
    margin: 5px 0 0 2px;
}
</style>