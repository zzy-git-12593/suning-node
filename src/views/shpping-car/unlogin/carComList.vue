<template>
    <div class="shopping-car_list_wrapper">
         <div class="shopping_car_selfsupport">
             <span class="shopping_car_commdlity_chosed"  :class="{active:shoppingCarList.length}"></span>
             <span>苏宁自营</span>
         </div>
         <!-- 购物车数据 -->
        <div class="shopping_car_commdlity_item_wrapper" v-for="(item,index) in shoppingCarList" :key="index">
            <!-- 购买时选中 -->
            <div class="commdlity_item_chose_btn" :class="{active:item.isBuyCheck}" @click="buyCheckBtn(item)" v-show="delCommdlity">√</div>
            <!-- 删除选时中 -->
            <div class="commdlity_item_chose_btn" :class="{del_active:item.isDelCheck}" @click="delCheckBtn(item)" v-show="!delCommdlity">-</div>

            <div class="commdlity_item_info_wrapper">
                <!-- 图片 -->
                <div class="commdlity_item_img" @click="shoppingCarCommdlityToInfo(item)">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="commdlity_item_desc">         
                    <!-- 标题 -->
                    <div class="commdlity_item_name_wrapper">
                        <div class="commdlity_item_name_title">{{item.comName}}</div>
                        <!-- <span class="commdlity_item_type_chose_btn">{{item.color}}</span> -->
                    </div>
                    <!-- 价格 数量 -->
                    <div class="commdlity_item_price_wrapper">
                        <div class="commdlity_item_price"><span>￥</span><span>{{item.price}}</span></div>
                        <div class="commdlity_item_count">
                            <span @click="shoppingCarCommdlityMinus(item)">-</span><span>{{item.count}}</span><span @click="shoppingCarCommdlityAdd(item)">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
import axios from "axios"
import bus from "@/bus"
export default {
    data(){
        return{
            list:[],
            delCommdlity:true,
            isBuyCheck:0,
            isDelCheck:0
        }
    },
    beforeMount(){
        // 接受右上角删除与购买切换按钮
        bus.$on('delCommdlity',data=>{
            this.delCommdlity = data
        })
    },
    computed:{
        ...mapState(['shoppingCarList']),
        ...mapState(['isDelChose']),
        ...mapState(['uId'])
    },
    methods:{
       // 加
        shoppingCarCommdlityAdd(item){
             this.$store.dispatch("addCommdlityCountActions",{commdtyId:item.commdtyId,uId:this.uId});
        },
        // 减
        shoppingCarCommdlityMinus(item){
             this.$store.dispatch("minusCommdlityCountActions",{commdtyId:item.commdtyId,uId:this.uId});

        },
         // 购买选中
        buyCheckBtn(item){

            if(item.isBuyCheck== 0){
                this.isBuyCheck = 1
            }
            if(item.isBuyCheck == 1) {
                this.isBuyCheck = 0
            }
            this.$store.dispatch("buyCheckBtnActions",{id:item.commdtyId,checkVal:this.isBuyCheck,uId:this.uId})
        },
        // 删除选中
        delCheckBtn(item){

            if(item.isDelCheck== 0){
                this.isDelCheck = 1
            }
            if(item.isDelCheck == 1) {
                this.isDelCheck = 0
            }          
            this.$store.dispatch("delCheckBtnActions",{id:item.commdtyId,checkVal:this.isDelCheck,uId:this.uId})
        },

        // 购物车跳商品详情
        shoppingCarCommdlityToInfo(item){
            this.$router.push({path:'/commpiltyintroduction',query:{commodityID:item.commdtyId}})
        }
    }
}
</script>
<style>

/* 列表 */
.shopping-car_list_wrapper{
    margin: 10px;
    padding: 10px;
    background: white;
    border-radius: 10px;
}
.shopping_car_selfsupport {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 16px;
    font-size: 14px;
}
.shopping_car_commdlity_chosed{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #999999;
    border-radius: 8px;
    margin-right: 10px;
    color: white;
    text-align: center;
    line-height: 16px;
}

/* 商品 */
.shopping_car_commdlity_item_wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    padding: 10px 0;
}
.commdlity_item_chose_btn{
    width: 16px;
    height: 16px;
    border: 1px solid #999999;
    border-radius: 8px;
    margin-right: 10px;
    color: white;
    text-align: center;
    line-height: 16px;
}
.commdlity_item_info_wrapper{
    width: 100%;
    height: 100%;
    box-shadow: 0 0 3px 3px #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
}
/* 图片 */
.commdlity_item_img{
    flex-shrink: 0;
    width: 28%;
    padding-right: 8px;
}
.commdlity_item_img img{
    width: 100%;
    height: 100%;
}
/* 详情 */
.commdlity_item_desc{
    flex-grow: 1;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/* 商品标题 */
.commdlity_item_name_title{
    font-size: 12px;
    color: #333333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
}
.commdlity_item_type_chose_btn{
    font-size: 12px;
    color: #333333;
    background: #eeeeee;
    padding: 2px;
}

/* 价格 添加数量 */
.commdlity_item_price_wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.commdlity_item_price span:nth-child(1){
    color: #f60;
    font-size: 12px;
}
.commdlity_item_price span:nth-child(2){
    color: #f60;
    font-size: 14px;
    font-weight: bold;
}
/* 数量按钮 */
.commdlity_item_count{
    font-size: 12px;
    color: #999999;
    padding: 3px 1px;
    border-radius: 10px;
    border: 1px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.commdlity_item_count span{
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #f2f2f2;
    border-radius: 9px;
    line-height: 14px;
    text-align: center;
    background: #eeeeee;
}
.commdlity_item_count span:nth-child(2){
    margin: 0 20px;
    background:none;
}


.active{
    background: #f60;
    border: none;
}
.del_active{
    background: red;
    border: none;
}
</style>