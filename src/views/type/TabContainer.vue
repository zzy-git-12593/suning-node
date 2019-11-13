<template>
    <div class="tabcontainer">
        <div class="tabcontainer-box">
            <div class="top-nav">
                <span>{{typeContentList.typeTitle}}</span>
                <div class="tabcontainer-line"></div>
            </div>
            <div class="content">
                <ul>
                    <li v-for="item in typeContentList.list" :key="item.id">
                        <router-link to="" tag="div">
                            <img :src="item.imgUrl">
                            <span>{{item.comName}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    computed:{
        ...mapState(['typeContentList'])
    }
}
</script>
<style scoped>
.tabcontainer::-webkit-scrollbar{
    display: none;
}
.tabcontainer{
    width: 75%;
    padding: 10px;
    overflow: auto;
    color: #353d44; 
    font-size: 12px;
    /* overflow: auto; */
}
.tabcontainer-box{
    width: 100%;
    margin-top: 30px;
}
.top-nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.top-nav span{
    padding: 0 5px;
}
.top-nav > div{
    flex-grow: 1;
    height: 1PX;
    background-color: #353d44;
    opacity: 0.2;
}
.tabcontainer-box .content{
    width: 100%;
}
.tabcontainer ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
.tabcontainer li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 32.33%;
    text-align: center;
    margin-bottom: 15px;
    padding: 0 10px;
}
.tabcontainer img{
    width: 100%;
    height: 100%;
}
</style>