<!--商品详情 刮券弹窗-->
<template>
    <div class="scrapeprops">
        <div class="up-down-scrapeprops">
            <span>刮券</span>
            <span class="el-icon-close" @click="gqDownClick"></span> 
        </div> 

        <div class="scrapeprops-content">
            <div class="scrapeprops-content-left">
                <p>
                    <span>云钻刮券</span>
                    <span>最高50元无敌券</span>
                </p>
                <p><a href=""></a>我的云钻:0<span class="el-icon-warning-outline"></span></p>
            </div>
            <div class="scrapeprops-content-right">
                <p>200元钻</p>
                <p>剩余次数:3</p>
                <p>立即刮券</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        gqDownClick() {
            this.$emit('gq-down-click')
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
.scrapeprops{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}
.scrapeprops-content{
    width: 89%;
    display: flex;
    margin: 10px 20px;
    color: #fff;
    background-color: #D8566A;
}
.scrapeprops-content-left{
    width: 70%;
    padding: 10px;
}
.scrapeprops-content-left p:first-child span:first-child{
    font-size: 20px;
    font-weight: bold;
}
.scrapeprops-content-left p:first-child span:last-child{
    margin-left: 8px;
    font-size: 14px;
}
.scrapeprops-content-left p:last-child{
    font-size: 12px;
    margin-top: 5px;
}
.scrapeprops-content-right{
    width: 30%;
    padding: 8px 15px;
    font-size: 12px;
    text-align: center;
    border-left: 1px dashed #fff;
}
.scrapeprops-content-right p:last-child{
    border: 1px solid #fff;
    padding: 1px 2px;
    border-radius: 20px;
}
.up-down-scrapeprops{
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    padding: 8px 10px;
}
.up-down-scrapeprops span:first-child{
    text-align: center;
    flex: 1;
    font-size: 15px;
    color: #333;
}
.up-down-scrapeprops .el-icon-close{
    flex-shrink: 0;
}
</style>