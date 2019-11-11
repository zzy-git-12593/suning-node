<!--底部其他登录方式-->
<template>
    <div class="otherlogin">
        <div>
            <div class="otherlogin-text">其他登录方式</div>
        </div>
        <div class="otherlogin-icon">
            <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101224012&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=101224012&redirect_uri=https%3A%2F%2Fpassport.suning.com%2Fids%2Flogin%3Foauth_provider%3DWapQQProvider%26loginTheme%3Dwap_new%26rememberMe%3Dtrue&state=https%3A%2F%2Fmy.suning.com%2Fmsi-web%2Fwap%2Fhome.do%3Futm_source%3Dbaidu%26utm_midium%3Dbrand%26utm_content%3D%26utm_campaign%3Dtitle"><img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_qq.png"></a>
            <a href="https://paypassport.suning.com/ids/login?oauth_redirect=http%3A%2F%2Fpaypassport.suning.com%2Fids%2Foauth20%2FcallbackAuthorize%3FsnapshotId%3D0%252Asid_025750D7CABB3C3CE183D8E232311B70&loginTheme=wap"><img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_epp.png"></a>
            <a href="https://reg.suning.com/wap/offlinecardlogin.do"><img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_k.png"></a>
        </div>
        <div>我同意<span>《<a href="https://sale.suning.com/all/regProtocol/snyghyzc.html?safp=f73ee1cf.afupz9eaab.0.b2c44844b6">苏宁易购会员章程</a>》《<a href="https://sale.suning.com/all/regProtocol/yfbxy.html?safp=f73ee1cf.afupz9eaab.0.454d78943e">易付宝协议</a>》</span></div>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
*{margin: 0; padding: 0; box-sizing: border-box;}
.otherlogin{width: 100%; padding: 30px 60px;}
.otherlogin div:first-child{position: relative;}
.otherlogin div:first-child .otherlogin-text{width: 100%;color: #999; margin-bottom: 10px;
font-size: 10px; text-align: center;}
.otherlogin div:first-child .otherlogin-text::before{content: "";
display: block; position: absolute; top: 50%;width: 60px; border-bottom: 1px solid #ddd;
left: 0;}
.otherlogin div:first-child .otherlogin-text::after{content: ""; display: block; position: absolute;top: 50%; width: 60px; right: 0;
border-bottom: 1px solid #ddd;}
.otherlogin-icon{width: 100%; margin-bottom: 12px;
display: flex; justify-content: space-between;}
.otherlogin-icon a{text-decoration: none;
width: 35px;}
.otherlogin-icon a img{width: 100%;}
.otherlogin div:last-child{width: 100%;
text-align: left; color: #999; font-size: 8px;}
.otherlogin div:last-child a{color: #101010;text-decoration: underline;}
.otherlogin div:last-child span{color: #101010;}
</style>