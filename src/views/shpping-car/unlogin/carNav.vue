<template>
    <div class="shopping_car_head">
        <span class="el-icon-arrow-left shopping_car_head_back" @click="back"></span>
        <span class="shopping_car_title">购物车</span>
        <span class="el-icon-more-outline shopping_car_head_outline" v-if="!shoppingCarList.length"></span>
        <div v-else class="shopping-car-edit">
            <span class="shopping_car_head_edit" @click="changeclick" v-show="delCommdlity">编辑</span>
            <span class="shopping_car_head_complete" @click="changeclick" v-show="!delCommdlity">完成</span>
        </div>
    
    </div>
</template>
<script>
import bus from "@/bus"
import {mapState} from "vuex"
export default {
    data(){
        return{
            delCommdlity:true
        }
    },
    computed:{
        ...mapState(['shoppingCarList'])
    },
    methods:{
        back(){
            this.$router.push('/homepage')
        },
        // 编辑与完成切换
        changeclick(){
            this.delCommdlity=!this.delCommdlity
            bus.$emit('delCommdlity',this.delCommdlity)
        }
    },
    updated(){
        bus.$on('delCommdlity',data=>{
            this.delCommdlity =data
        })
    },
}
</script>
<style>
.shopping_car_head{
    width: 100%;
    height: 47px;
     background-image: linear-gradient(50deg, #72a0eb , #23d7ff 90%);
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: white
}
.shopping_car_title{
    width: 80%;
    height: 100%;
    font-size: 16px;
    flex-shrink: 0;
    text-align: center;
}
.shopping-car-edit{
   width: 10%;
    height: 100%;

}
.shopping_car_head_back,
.shopping_car_head_outline{
     width: 10%;
    height: 100%;
    font-size: 24px;
}
.shopping_car_head_outline{
    font-size: 26px;
}
.shopping_car_head_edit{
    font-size: 14px;
}
.shopping_car_head_complete{
    font-size: 14px;
    color: white;
}
</style>