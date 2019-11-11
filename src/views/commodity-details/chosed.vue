<template>
    <div class="chosed">
        <div class="chosed-content" @click="yxUpClick">
            <p><span class="chosed-content-left">已选</span>
            <span class="chosed-content-right">{{commodityInfoList.chosed}}&nbsp;{{commodityInfoList.count}}件</span></p>
            <p><span class="el-icon-arrow-right"></span></p>
        </div>

        <!--已选弹窗-->
        <div class="chosedprop-tc" ref="ref3">
            <chosedProp class="chosedprop" @yx-down-click="yxDownClick">
            </chosedProp>
        </div>

         <!--遮罩层-->
        <div class="zzc-box" ref="zzc3" @click="zzcClick"></div>
    </div>
</template>
<script>
import chosedProp from './pro-windows/chosedProp'
import {mapState} from 'vuex'

export default {
    methods: {
        yxUpClick() {
            this.$refs.ref3.style.transition = 'height .5s';
            this.$refs.ref3.style.height = "70%"
            this.$refs.zzc3.style.display = "block"
        },
        yxDownClick() {
            this.$refs.ref3.style.transition = 'height 0s';
            this.$refs.ref3.style.height = "0%"
            this.$refs.zzc3.style.display = "none"
        },
        zzcClick() {
            this.$refs.ref3.style.transition = 'height 0s';
            this.$refs.ref3.style.height = "0%"
            this.$refs.zzc3.style.display = "none"
        }
    },
    computed:{
    ...mapState(['commodityInfoList'])
    },
    components: {
         chosedProp
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.chosed-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
}
.chosed-content-left{
    font-size: 13px;
    color: #999;
    margin-right: 8px;
    flex-shrink: 0;
}
.chosed-content-right{
    font-size: 14px;
    color: #222;
    font-weight: 700;
    flex: 1;
}
.chosed-content .el-icon-arrow-right{
    font-size: 20px;
    color: #999;
    flex-shrink: 0;
}
/*设置弹窗*/
.chosedprop-tc{
    width: 100%;
    height: 0%;
    position: fixed;
    z-index: 10000;
    padding: 5px;
    bottom: 0;
    left: 0;
}
.chosedprop{
    background-color: #fff;
}
.chosed .zzc-box{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index:  5000;
    display: none;
}
</style>