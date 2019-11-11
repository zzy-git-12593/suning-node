<template>
    <div class="shopping_car_statistics">
        <!-- 购买全选 -->
        <!-- check为全选按钮，chosed为单个按钮 -->
        <div class="shopping_car_chose_btn_wrapper" v-show="delCommdlity"><span class="all_commdlity_chosed_btn" @click="allCommdlityChosed" :class="{active:isBuyCheck}">√</span><span>购买全选</span></div>
        <!-- 删除全选 -->
        <div class="shopping_car_chose_btn_wrapper"  v-show="!delCommdlity"><span class="all_commdlity_chosed_btn" @click="allCommdlityDelChosed" :class="{del_active:isDelCheck}">-</span><span>删除全选</span></div>
        
        <!-- 右侧结算 -->
        <div class="shopping_car_price_info_wrapper">
            <!-- 价格合计 -->
            <div class="shopping_car_price_info" v-show="delCommdlity">
                <div class="shopping_car_price_total">
                    <span>合计：</span><span>￥</span><span>{{computedPrice}}</span>
                </div>
                <div class="shopping_car_transportation_price" v-if="computedPrice==0">运费: ￥0</div>
                <div class="shopping_car_transportation_price" v-else-if="computedPrice<99">含运费: ￥5</div>
                <div class="shopping_car_transportation_price" v-else-if="computedPrice>99">免运费</div>
            </div>
            <!-- 结算按钮 -->
            <div class="shopping_car_close_btn" v-show="delCommdlity"><span>去结算</span><span></span></div>
            <div class="shopping_car_del_btn" v-show="!delCommdlity" @click="delCommdlityBtn" :class="{active:isDelBtn}">删除</div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
import {mapGetters} from "vuex"
import bus from "@/bus"

export default {
    data(){
        return{
            delCommdlity:true
        }
    },
    computed:{
        // 购物车列表
        ...mapState(['shoppingCarList']),
        // store购买全选按钮
        ...mapState(['isBuyCheck']),
        // store删除全选
        ...mapState(['isDelCheck']),
        ...mapState(['isDelBtn']),
        // 计算总价格
        ...mapGetters(['computedPrice'])
    },
    methods:{
        // 购买商品全部选中
        allCommdlityChosed(){
            this.$store.commit('allCommdlityChosed')
        },
        // 删除商品全部选中
        allCommdlityDelChosed(){
            this.$store.commit('allCommdlityDelChosed')
        },
        // 删除购物车商品
        delCommdlityBtn(){
            if(this.isDelBtn){
            this.$store.commit('shoppingCarDelCommdlity')
            this.delCommdlity =true
            bus.$emit('delCommdlity',true)
         }
        }
    },
    // 底部删除与结算按钮切换
    beforeMount(){
        bus.$on('delCommdlity',data=>{
            this.delCommdlity= data
        })
    }
}
</script>
<style>

.shopping_car_statistics{
    display: flex;
    flex-direction: row;
    background: white;
    justify-content: space-between;
    padding: 4px 10px;
    font-size: 14px;
    color: #333333;
    border-top: 1px solid #f2f2f2;
}
.shopping_car_chose_btn_wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 16px;
}
.all_commdlity_chosed_btn{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #999999;
    border-radius: 8px;
    margin-right: 15px;
    color: white;
    text-align: center;
    line-height: 16px;
}

/* youce  */
.shopping_car_price_info_wrapper{
    display: flex;
    flex-direction: row;
}
.shopping_car_price_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 15px;
}
.shopping_car_price_total span:nth-child(2){
    color: #f60;
    font-size: 12px;
}
.shopping_car_price_total span:nth-child(3){
    color: #f60;
    font-size: 16px;
    font-weight: bold;
}
.shopping_car_transportation_price{
    font-size: 12px;
    text-align: right;
    padding-right: 2px;
}
.shopping_car_close_btn{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    color: white;
    background: #f60;
    padding: 0 15px;
    border-radius: 10px;
}
.shopping_car_del_btn{
    font-size: 14px;
    color: white;
    background: #999999;
    padding: 0 25px;
    border-radius: 10px;
    line-height: 36px;
}

.active{
    background: #f60;
    border:none
}
.del_active{
    background: red;
    border: none;
}
</style>