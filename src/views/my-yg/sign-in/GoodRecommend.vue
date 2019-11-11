<template>
    <div class="shopping_car_good_recommendation">
        <!-- 头部 -->
        <div class="good_recommendation_title">
            <span>———————</span> 
            <span>&nbsp;&nbsp;您可能感兴趣的商品&nbsp;&nbsp;</span>
            <span>———————</span> 
        </div>
        <!-- 推荐商品列表 -->     
        <div class="good_recommendation_list" v-if="goodRecommendationList">
            <div class="good_recommendation_commdlity" v-for="item in goodRecommendationList" :key="item.id">
                <img :src="item.imgUrl" alt="" @click="enterCommlityInfo(item)">
                <span class="good_recommendation_commdlity_name">{{item.cmmdtyTitle}}</span>
                <div class="good_recommendation_commdlity_price_wrapper">
                    <span class="commdlity_price_text">￥{{item.price}}<span>.00</span></span>
                    <span class="el-icon-shopping-cart-1 commdlity_car-btn" @click="addCommltyToCar(item)"></span>
                </div>
            </div>
        </div> 
        <!-- 底部结束语 -->
        <div class="good_recommendation_title">
            <span>——————</span> 
            <span>&nbsp;&nbsp;以上根据您购物车中的商品推荐&nbsp;&nbsp;</span>
            <span>——————</span> 
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            goodRecommendationList:null
        }
    },
    mounted () {
        // 请求推荐数据
        axios.get('http://localhost:3000/typeList')
        .then(res=>this.goodRecommendationList=res.data)
    },
    methods:{
        // 添加购物车
        addCommltyToCar(item){
            console.log(item)
            this.$store.commit('ShoppingCarAddCommltyToCar',item)
        },
        enterCommlityInfo(item){
            this.$router.push({path:'/commpiltyintroduction',query:{commodityID:item.id}})
        }
    }
}
</script>
<style>
.shopping_car_good_recommendation{
    width: 100%;
    height: 100%;
}
.good_recommendation_title{
    font-size: 12px;
    color: #999999;
    padding: 10px 0;
    text-align: center;
}
.good_recommendation_list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.good_recommendation_commdlity{
    width: 49%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 5px;
}
.good_recommendation_commdlity img{
    width: 85%;
}
.good_recommendation_commdlity_name{
    width: 90%;
    font-size: 12px;
    color: #333333;
     margin: 10px auto;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
    text-overflow:ellipsis;
}
.good_recommendation_commdlity_price_wrapper{
    width: 100%;
    padding: 0px 15px 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
.commdlity_price_text{
    font-size: 14px;
    color: #f60;
}
.commdlity_price_text span{
    font-size: 12px
}
.commdlity_car-btn{
    font-size: 24px;
    color: #333333;
}
</style>