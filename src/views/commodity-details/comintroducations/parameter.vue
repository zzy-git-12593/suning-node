<!--规格参数-->
<template>
    <div class="parameter">
        <dl>
            <dt>
                <p>商品详情</p>
                <p><span class="el-icon-arrow-up"></span></p>
            </dt>
            <dd>
                <div>
                    <h3>主体</h3>
                    <table>
                        <tr>
                            <td>品牌</td>
                            <td>华为(HUAWEI)</td>
                        </tr>
                        <tr>
                            <td>型号</td>
                            <td>HUAWEI Mate 30</td>
                        </tr>
                        <tr>
                            <td>上市时间</td>
                            <td>2019年9月</td>
                        </tr>
                        <tr>
                            <td>入网型号</td>
                            <td>STK-AL00</td>
                        </tr>
                        <tr>
                            <td>入网许可证</td>
                            <td>02-5043-192230</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h3>系统</h3>
                    <table>
                        <tr>
                            <td>手机操作系统</td>
                            <td>Android</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h3>拍照</h3>
                    <table>
                        <tr>
                            <td>摄像头类型</td>
                            <td>其它</td>
                        </tr>
                        <tr>
                            <td>前摄像头</td>
                            <td>2400万像素</td>
                        </tr>
                        <tr>
                            <td>后摄像头</td>
                            <td>4000+1600+800万像素</td>
                        </tr>
                    </table>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
*{
    margin-top: 0;
    padding: 0;
    box-sizing: border-box;
}
.parameter{
    width: 100%;
    background-color: #fff;
    margin-top: 9px;
    padding: 10px;
}
.parameter dl,
.parameter dt{
    width: 100%;
}
.parameter dt p:first-child{
    flex: 1;
    font-size: 14px;
    color: #353d44;
    text-align: left;
}
.parameter dt p:last-child{
    text-align: right;
    color: #999;
    margin: -10px 0 0 0;
}
.parameter dd{
    width: 100%;
    color: #909090;
    margin-top: 10px;
    line-height: normal;
    font-size: 14px;
}
.parameter dd > div{
    width: 100%;
    margin-top: 12px;
}
.parameter dd > div h3{
    width: 100%;
    border-top: 1px dashed #909090;
    padding: 8px 0;
    color: #353d44;
    font-weight: lighter;
    font-size: 100%;
}
table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
td{
    height: 26px;
    line-height: 26px;
}
tr td:first-child{
    width: 30%;
}
</style>