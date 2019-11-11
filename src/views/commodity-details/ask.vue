<!--商品详情 问答-->
<template>
    <div class="ask">
        <a href="https://c.m.suning.com/wdPage.html#/000000011373121486/0030001556/0010127391/0/0/%E5%8D%8E%E4%B8%BA%2FHUAWEI%20Mate%2030%208GB%2B128GB%20%E6%98%9F%E6%B2%B3%E9%93%B6%20%E9%BA%92%E9%BA%9F990%E6%99%BA%E6%85%A7%E8%8A%AF%E7%89%87%204000%E4%B8%87%E5%BE%95%E5%8D%A1%E6%91%84%E5%83%8F%20OLED%E5%85%A8%E9%9D%A2%E5%B1%8F%20%E7%A7%BB%E5%8A%A8%E8%81%94%E9%80%9A%E7%94%B5%E4%BF%A14G%E5%85%A8%E7%BD%91%E9%80%9A%E6%89%8B%E6%9C%BA/0/null/null">
            <div class="ask-title ask-flex">
                <p>问答</p>
                <p>
                    <span>共16条问答</span>
                    <span class="el-icon-arrow-right"></span>
                </p>
            </div>
            <div class="ask-content ask-flex" v-for="item in commodityInfoList.questionList" :key="item.id">
                <p>
                    <span class="wen">问</span>
                    <span class="ask-text">{{item.text}}</span>
                </p>
                <p>1条回答</p>
            </div>
        </a>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
     computed:{
        ...mapState(['commodityInfoList'])
    },
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.ask{
    width: 100%;
    background-color: #fff;
    margin-top: 9px;
    padding: 0 0 10px 0;
}
.ask a{
    text-decoration: none;
}
.ask-flex{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 5px;
}
.ask-title{
    width: 100%;
    padding: 10px;
}
.ask-title p:first-child{
    font-size: 13px;
    color: #222;
    font-weight: 600;
    flex: 1;
}
.ask-title p:last-child{
    font-size: 12px;
    color: #999;
    display: flex;
    align-items: center;
    flex-shrink: 0;
}
.ask-title p:last-child .el-icon-arrow-right{
    font-size: 20px;
    color: #999;
    flex-shrink: 0;
}
.ask-content p:first-child {
    width: 100%;
    padding: 0 10px 6px 10px;
}
.ask-content p:first-child .wen{
    margin: 0 6px 0 0;
    border-radius: 3px;
    text-align: center;
    color: #222;
    font-size: 10px;
    background: #fad222;
    padding: 1px 2px;
    flex-shrink: 0;
}
.ask-content p:first-child span:last-child{
    flex: 1;
    margin: 0 6px 0 0;
    word-wrap: break-word;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #333;
}
.ask-content p:last-child{
    flex-shrink: 0;
    color: #999;
    font-size: 13px;
    padding: 0 10px 0 0;
    line-height: 24px;

}
</style>