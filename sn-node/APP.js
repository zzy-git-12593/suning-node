const Koa = require('koa')
router = require('koa-router')()
render = require('koa-art-template')
static = require('koa-static')
koaBody = require('koa-body')
fs = require('fs')
session = require('koa-session')

// 引入路径
path = require('path')

// 引入数据库

myDb = require('./lib/db')

// 引入路由

shoppingCar = require('./routes/add-shopcar')


// 全局路径
global.rootPath = __dirname;


// 初始化实例
const app = new Koa();

// 配置art-template
render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

// 配置koa-body

app.use(koaBody({
    multipart: true, //支持多个文件
    formidable: {
        maxFileSize: 200 * 1024 * 1024 //设置上传大小最大2M
    }
}))

// 配置静态资源
app.use(static(path.join(__dirname, 'public')))


// //////////////////////////////////////////////////////////////////


router.get('/home', async (ctx) => {
    ctx.body = '首页'
})

// 购物车商品

router.use('/shoppingcar',shoppingCar)




router.get('*', async (ctx) => {
    ctx.body = '404页面不存在'
})




// 配置路由 
app
    .use(router.routes())
    .use(router.allowedMethods());

// 监听端口
app.listen(2000, () => {
    console.log('Server-running at loalhost:2000')
})