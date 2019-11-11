<!--商品详情 评价-->
<template>
    <div class="appraise">
        <a href="https://review.suning.com/wap/cluster_review_page/general-32762695-000000011373121486-0000000000.htm?isFiltered=true">
            <div class="appraise-title">
                <p>评价(200+)</p>
                <p>
                    <span>查看全部</span>
                    <span class="el-icon-arrow-right"></span>
                </p>
            </div>
            <div class="appraise-content-box" v-for="(item,index) in commodityInfoList.reviewList" :key="index">
                <p class="appraise-content-box-name">
                    <span class="appraise-content-box-img">
                        <img :src="item.userInfo.imgUrl">
                        <span>{{item.userInfo.uerName}}</span>
                    </span>
                    <span class="pingfeng" >
                        <i class="el-icon-star-on" v-if="item.qualityStar>0"></i>
                        <i class="el-icon-star-on" v-else-if="item.qualityStar>=1"></i>
                        <i class="el-icon-star-on" v-else-if="item.qualityStar>=2"></i>
                        <i class="el-icon-star-on" v-else-if="item.qualityStar>=3"></i>
                        <i class="el-icon-star-on" v-else-if="item.qualityStar>=4"></i>
                    </span>
                </p>
                <p class="appraise-content">{{item.content}}</p>
                <p class="appraise-content-img">
                    <ul>
                        <li v-for="(items,index) in item.reviewImageList" :key="index"><img :src="items.url"></li>
                    </ul>
                </p>
            </div>
        </a>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
    data(){
        return {
            list1: [
                {
                    id: 1,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156973401117852206_100x100.jpg'
                },
                {
                    id: 2,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156973401122924856_100x100.jpg'
                },
                {
                    id: 3,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156973401106441187_100x100.jpg'
                },
                {
                    id: 4,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156973401100151222_100x100.jpg'
                },
                {
                    id: 5,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156973401111293761_100x100.jpg'
                },
            ],
            list2: [
                {
                    id: 1,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156955032321934416_100x100.jpg'
                },
                {
                    id: 2,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156955032294841798_100x100.jpg'
                },
                {
                    id: 3,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156955032308246694_100x100.jpg'
                },
                {
                    id: 4,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156955032313657294_100x100.jpg'
                },
                {
                    id: 5,
                    imgUrl: '//image3.suning.cn/uimg/ZR/share_order/156955033780657743_100x100.jpg'
                },
            ]
        }
    },
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
.appraise{
    width: 100%;
    background-color: #fff;
    margin-top: 9px;
    padding-bottom: 9px;
}
.appraise a{
    text-decoration: none;
    color: #fc0;
}
.appraise-title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.appraise-title p:first-child{
    flex: 1;
    color: #222;
    word-break: break-word;
    font-size: 13px;
    font-weight: 600;
}
.appraise-title p:last-child{
    color: #999;
    flex-shrink: 0;
    word-break: break-all;
    font-size: 13px;
}
.appraise-title .el-icon-arrow-right{
    font-size: 20px;
    color: #999;
}
.appraise-content-box{
    width: 100%;
    padding: 12px 10px;
}
.appraise-content-box-name{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.appraise-content-box-img {
    flex: 1;
    display: flex;
    align-items: center;
}
.appraise-content-box-img img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;
    flex-shrink: 0;
}
.appraise-content-box-img span{
    flex: 1;
    color: #222;
    font-size: 10px;
    font-weight: 500;
}
.appraise-content-box-img .pingfeng i{
    color: #fc0;
    font-size: 15px;
    backdrop-filter: #fc0;
}
.appraise-content{
    width: 100%;
    padding-top: 5px;
    word-break: break-all;
    color: #222;
    font-size: 13px;
    display: -webkit-box;
    max-height: 38px;
    text-overflow: ellipsis;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden; 
}
.appraise-content-img{
    width: 100%;
    overflow: hidden;
}
.appraise-content-img ul::-webkit-scrollbar{
    display: none;
}
.appraise-content-img ul{
    width: 100%;
    display: flex;
    overflow: auto;
    list-style: none;
    padding: 10px 0 0;
    margin: 0 0 0 -3px;
}
.appraise-content-img ul li{

    margin-right: 6px;
}
.appraise-content-img ul li:nth-child(1) img{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.appraise-content-img ul li:nth-last-child(1) img{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>