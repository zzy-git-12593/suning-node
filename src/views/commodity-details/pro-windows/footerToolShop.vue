<!--立即购买弹窗-->
<template>
    <div class="footertool-shop">
        <!-- 图片名称 -->
        <div class="footertool-shop-content">
            <div class="up-down-footertool-shop">
                <div class="footertool-shop-img-box">
                    <div class="footertool-shop-img">
                        <img src="//imgservice3.suning.cn/uimg1/b2c/image/ePEn-vw58KSUy0DNDAs53w.jpg_300w_300h_4e">
                    </div>
                </div>
                <div class="footertool-shop-test">
                    <p>
                        <span>{{commodityInfoList.price}}元</span>
                        <span class="el-icon-close" @click="shopDownClick"></span> 
                    </p>
                    <p class="footertool-shop-test-content">商品编码:10288345525</p>
                    <p class="footertool-shop-test-name">{{commodityInfoList.cmmdtyTitle}}</p>
                </div>
            </div> 
            <!-- 版本 -->
            <div class="footertool-shop-banben">
                <p>颜色</p>
                <ul>
                    <li v-for="(item,index) in commodityInfoList.classes" :key="index">{{item.color}}</li>
                </ul>
            </div>            
            <div class="footertool-shop-banben">
                <p>版本</p>
                <ul>
                    <li v-for="(item,index) in commodityInfoList.classes" :key="index">{{item.color}}</li>
                </ul>
            </div>  
            <!-- 购买数量 -->
            <div class="footertool-shop-count-chose">
                <div class="footertool-shop-buy-title">购买数量：</div>
                <div class="footertool-shop-buy-count">
                    <span @click="minusCommlityClick">-</span><span>{{count}}</span><span @click="addCommlityClick">+</span>
                </div>
            </div>            
        </div>

        <div class="footertool-shop-add-btn" @click="addShoppingCarClick" >确定</div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import axios from 'axios'
export default {
    data(){
      return{
           count:1
      } 
    },
    computed:{
        ...mapState(['commodityInfoList'])
    },
    methods: {
        shopDownClick() {
            this.$emit('shop-down-click')
        },
        addCommlityClick(){
            this.count++
        },
        minusCommlityClick(){
            if(this.count>1){
                this.count--
            }
        },
        addShoppingCarClick(){
            this.$emit('shop-down-click')
            // 提交购物车数据
            this.$store.commit('addShoppingCarMutations',
            {
                id:this.commodityInfoList.id,
                cmmdtyTitle:this.commodityInfoList.cmmdtyTitle,
                imgUrl:this.commodityInfoList.imgUrl,
                price:this.commodityInfoList.price,
                color:this.commodityInfoList.color,
                count:this.count
            })
            
            axios.get('http://localhost:2000/shoppingcar/addDo', {
                params: {
                        id:this.commodityInfoList.id,
                        cmmdtyTitle:this.commodityInfoList.cmmdtyTitle,
                        imgUrl:this.commodityInfoList.imgUrl,
                        price:this.commodityInfoList.price,
                        // color:this.commodityInfoList.color,
                        count:this.count
                }
            })
            .then( (response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            });
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
.footertool-shop{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    justify-content: space-between;
}
.up-down-footertool-shop{
    position: relative;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    padding: 10px 15px;
}
.footertool-shop-img-box{
    width: 110px;
}
.footertool-shop-img{
    position: absolute;
    top: -30px;
    flex-shrink: 0;
}
.footertool-shop-img img{
    width: 110px;
    border-radius: 12px;
    border: 1px solid #eee;
}
.footertool-shop-test{
    flex: 1;
}
.footertool-shop-test p:first-child{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0 2px 5px;
}
.footertool-shop-test p:first-child span:first-child{
    color: #f60;
    font-size: 13px;
}
.footertool-shop-test .el-icon-close{
    color: #999;
    font-size: 20px;
}
.footertool-shop-test-content{
    color: #999;
    font-size: 12px;
    padding: 0 0 3px 5px;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
   	overflow:hidden;
    text-overflow:ellipsis;
}
.footertool-shop-test p:last-child{
    font-size: 12px;
    color: #333;
    padding: 0 0 3px 5px;
}
.footertool-shop-banben{
    width: 100%;
    border: 1px solid #eee;
}
.footertool-shop-banben p{
    width: 100%;
    padding: 8px 10px;
    font-size: 12px;
    color: #333;
}
.footertool-shop-banben ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 10px 10px;
}
.footertool-shop-banben ul li{
    font-size: 12px;
    color: #333;
    padding: 5px 8px;
    background-color: #eee;
    border-radius: 6px;
    margin-right: 10px;
    /* margin-top: 12px; */
}

/* 添加购物车数量 */
.footertool-shop-count-chose{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
}
.footertool-shop-buy-title{
    color: #f60;
    font-size: 14px;
    font-weight: bold;
}

.footertool-shop-buy-count{
    font-size: 12px;
    color: #999999;
    padding: 3px 1px;
    border-radius: 10px;
    border: 1px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.footertool-shop-buy-count span{
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #f2f2f2;
    border-radius: 9px;
    line-height: 14px;
    text-align: center;
    background: #eeeeee;
}
.footertool-shop-buy-count span:nth-child(2){
    margin: 0 20px;
    background:none;
}

/* 确定按钮 */
.footertool-shop-add-btn{
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    color: white;
    background: #f60;
    margin-bottom: 45px;
    border-radius: 10px;
    text-align: center;
}
</style>