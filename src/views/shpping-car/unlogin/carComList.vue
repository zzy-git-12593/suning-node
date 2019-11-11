<template>
    <div class="shopping-car_list_wrapper">
         <div class="shopping_car_selfsupport">
             <span class="shopping_car_commdlity_chosed"  :class="{active:shoppingCarList.length}"></span>
             <span>苏宁自营</span>
         </div>
        <div class="shopping_car_commdlity_item_wrapper" v-for="(item,index) in carList" :key="index">

            <div class="commdlity_item_info_wrapper">
                <div class="commdlity_item_img" @click="shoppingCarCommdlityToInfo(item)">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="commdlity_item_desc">         
                    <!-- 标题 -->
                    <div class="commdlity_item_name_wrapper">
                        <div class="commdlity_item_name_title">{{item.pname}}</div>
                        <!-- <span class="commdlity_item_type_chose_btn">{{item.color}}</span> -->
                    </div>
                    <!-- 价格 数量 -->
                    <div class="commdlity_item_price_wrapper">
                        <div class="commdlity_item_price"><span>￥</span><span>{{item.price}}</span></div>
                        <div class="commdlity_item_count">
                            <span @click="shoppingCarCommdlityMinus(index)">-</span><span>{{item.count}}</span><span @click="shoppingCarCommdlityAdd(index)">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <!-- 列表 -->
        <!-- <div class="shopping_car_commdlity_item_wrapper" v-for="(item,index) in shoppingCarList" :key="item.id">
            购买时选中
            <div class="commdlity_item_chose_btn" :class="{active:item.isChosed}" @click="commdlityChosedBtn(index)" v-show="delCommdlity">√</div>
            删除选时中
            <div class="commdlity_item_chose_btn" :class="{del_active:item.isDelChosed}" @click="delCommdlityChosedBtn(index)" v-show="!delCommdlity">-</div>
            <div class="commdlity_item_info_wrapper">
                <div class="commdlity_item_img" @click="shoppingCarCommdlityToInfo(item)">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="commdlity_item_desc">         
                    标题
                    <div class="commdlity_item_name_wrapper">
                        <div class="commdlity_item_name_title">{{item.cmmdtyTitle}}</div>
                        <span class="commdlity_item_type_chose_btn">{{item.color}}</span>
                    </div>
                    价格 数量
                    <div class="commdlity_item_price_wrapper">
                        <div class="commdlity_item_price"><span>￥</span><span>{{item.price}}</span></div>
                        <div class="commdlity_item_count">
                            <span @click="shoppingCarCommdlityMinus(index)">-</span><span>{{item.count}}</span><span @click="shoppingCarCommdlityAdd(index)">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
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
        }
    },
    props:['carList'],
    beforeMount(){
        // 接受右上角删除与购买切换按钮
        bus.$on('delCommdlity',data=>{
            this.delCommdlity = data
            })
    },
    computed:{
        ...mapState(['shoppingCarList']),
        ...mapState(['isDelChose'])

    },
    // methods:{
    //     // 加
    //     shoppingCarCommdlityAdd(index){
    //         this.$store.commit("addShoppingCarCommdlityCount",index)
    //     },
    //     // 减
    //     shoppingCarCommdlityMinus(index){
    //         this.$store.commit("minusShoppingCarCommdlityCount",index)
    //     },
    //     // 购买选中
    //     commdlityChosedBtn(index){
    //         this.$store.commit("commdlityChosedBtn",index)
    //     },
    //     // 删除选中
    //     delCommdlityChosedBtn(index){
    //         this.$store.commit('delCommdlityChosedBtn',index)
    //     },
    //     // 购物车跳商品详情
    //     shoppingCarCommdlityToInfo(item){
    //         this.$router.push({path:'/commpiltyintroduction',query:{commodityID:item.id}})
    //     }
        

        
    // }
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