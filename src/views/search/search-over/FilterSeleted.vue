<template>
    <div class="filterSeleted">
        <ul>
            <li :class="{active1: msg==1}" @click="tabClick(1)">综合</li>
            <li :class="{active1: msg==2}" @click="tabClick(2)">销量</li>
            <li :class="{active1: msg==3}" @click="tabClick(3)">
                <div class="filterSeleted-icon">
                    <span>价格</span>
                    <div class="updown">
                        <span class="up"></span>
                        <span class="down"></span>
                    </div>
                </div>
            </li>
            <li :class="{active1: msg==4}" @click="tabClick(4)">帅选</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg: 1
        }
    },
    methods: {
        tabClick(msg) {
            this.msg = msg
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
.filterSeleted{
    width: 100%;
    background-color: #fff;
}
.filterSeleted ul{
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: row;
}
.filterSeleted ul li{
    width: 25%;
    text-align: center;
    padding: 12px 0;
    font-size: 15px;
    color: #333;
    border-bottom: 1px solid #f2f2f2;
}
.filterSeleted .active1{
    color: #f60;
}
.filterSeleted-icon{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.updown{
    width: 8px;
    height: 18px;;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2px;
}
.filterSeleted .up{
    width: 0; 
    height: 0;
    border-width: 4px;
    border-style: solid;
    border-color:transparent transparent #bbb transparent
}
.filterSeleted .down{
    width: 0; 
    height: 0;
    border-width: 4px;
    border-style: solid;
    border-color:#bbb transparent transparent transparent
}
</style>