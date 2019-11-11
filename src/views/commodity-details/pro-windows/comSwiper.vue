<!--上方导航弹窗-->
<template>
    <div class="comswiper-top-tc">
        <p @click="comSwiperDownClick">
            <span class="el-icon-close"></span>
        </p>
        <div class="comswiper-top-tc-content">
            <div class="comswiper-top-tc-content-top">
                快速导航
            </div>
            <ul>
                <li>
                    <div>
                        <span class="el-icon-school"></span>
                    </div>
                    <div>首页</div>
                </li>
                <li>
                    <div>
                        <span class="el-icon-shopping-cart-2"></span>
                    </div>
                    <div>购物车</div>
                </li>
                <li>
                    <div>
                        <span class="el-icon-search"></span>
                    </div>
                    <div>搜索</div>
                </li>
                <li>
                    <div>
                        <span class="el-icon-menu"></span>
                    </div>
                    <div>全部分类</div>
                </li>
                <li>
                    <div>
                        <span class="el-icon-user"></span>
                    </div>
                    <div>我的易购</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        comSwiperDownClick() {
            this.$emit('com-swiper-down-click')
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
.comswiper-top-tc p:first-child{
    padding: 10px;
    display: flex;
    justify-content: flex-end;
}
.comswiper-top-tc p:first-child .el-icon-close{
    font-size: 25px;
    color: #222;
    border-radius: 50%;
    background-color: #fff;
    padding: 5px;
}
.comswiper-top-tc-content{
    width: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
}
.comswiper-top-tc-content-top{
    width: 100%;
    color: #222;
    font-size: 15px;
    padding: 10px 20px 0;
}
.comswiper-top-tc ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px 0;
}
.comswiper-top-tc ul li{
    background-color: powderblue;
    width: 22%;
    font-size: 12px;
    color: #333;
    text-align: center;
    margin: 10px 0; 
    border-radius: 4px;
    padding: 8px;
}
.comswiper-top-tc ul li div:first-child{
    font-size: 30px;
}
</style>