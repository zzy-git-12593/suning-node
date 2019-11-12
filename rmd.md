路由：			
	主路由  —>		
		主页
		
		分类
	
		购物车

		我的易购（登录/未登录）
	
	搜索    —>
		搜索界面（名称）—>搜索完成列表 —> 商品详情（ID）
	商品详情


组件：
	首页：导航、轮播、banner、苏宁头条、限时抢购、每日必逛
	         酷玩潮流、生活风尚、推荐榜单、特色专享、省钱秘笈
	         好店优选、猜你喜欢
	
	分类：搜索、左tab、tab页内容
	
	购物车：   【未登录】：提示登录框、购物车商品列表、你可能感兴趣的商品、价格统计
		【登录后】：购物车商品列表、猜你喜欢、价格统计

	我的易购：【未登录】登录输入框 【账号密码登录/验证码登录】、其他登录方式
		【登录后】顶部导航、我的订单、必备工具、好货推荐
	————————————————————————————
	搜索：搜索框

	搜索完成界面：搜索框、筛选栏、导航栏、推荐商品轮播、商品列表
	
	商品详情：轮播图片、商品介绍、优惠刮券【优惠弹窗，刮券弹窗】、以旧换新、
		已选【选择弹窗】、地址【地址弹窗、放心购弹窗】、评价、问答、店铺标题
		猜你喜欢轮播、图文详情规格参数包装售后、底部工具栏

注意点：	
	轮播图>	使用swiper插件，图片通过ajxa请求时，注意初始化new swiper失败，【使用nexttick回调函数，或者dom节点上加上key 值为数组长度】

	locastorage>   存储布尔值 会被转成字符串，
		       初始化，读取本地数据，需要在app.vue的beforemount中获取，所有节点未创建前

	bus>   中央事件总线，在 安装bus ，main.js   Vue.prototype.$bus = Bus 或者 需要new一个新的vue去引用，注意mount 发出，beforemount 接收

	ajxa渲染dom节点>加上v-if判断，数据是否存在，vue会报良性错误

	路由传参>params. 传入id 不拼接参数 ，刷新页面会消失 ；query拼接参数，显示在地址栏，刷新还在

	路由导航> 在使用路由守卫时，请求会报错Uncaught（in promise) 不影响使用；V3.1.0版本里面新增功能：push和replace方法会返回一个promise,
		如果没有捕获到错误，控制台始终会出现如图的警告
	解决方案:  const originalPush = Router.prototype.push
		Router.prototype.push = function push(location) {
  		return originalPush.call(this, location).catch(err => err)}
		或者在每次push路由后面加上一个catch捕捉错误
	数据：json-server 库，		
