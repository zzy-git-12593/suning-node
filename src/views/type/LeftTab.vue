<template>
    <div class="left-tab">
        <ul class="type-tab">
            <li :class="{active: $store.state.tabMsg==item.tabName}" v-for="(item,index) in $store.state.popularList" :key="item.id" :name="item.tabName" @click="tabClick(item.tabName, index)">{{item.tabName}}</li>
        </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    methods: {
        tabClick(a,index) {
            this.$store.commit('getListsMutations',a)
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
.left-tab{
    width: 25%;
    background-color: #f4f4f4;
}
.type-tab{
    width: 100%;
}
.type-tab ul{
    transition: all .6s;
}
.type-tab li{
    width: 100%;
    font-size: 12px;
    color: #666;
    border-bottom: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
    text-align: center;
    padding: 15px;
    border-left: 4px solid #f4f4f4
}
.left-tab .active{
    background-color: #fff;
    border-right: 0;
    border-left: 4px solid #F90
}
</style>