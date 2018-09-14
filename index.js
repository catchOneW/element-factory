import './js/font.js'
import 'element-ui/lib/theme-chalk/index.css'
//
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(ElementUI)
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'X2qlPmBEOyq8dKU1XLnFDFPBxS0aGucc'
})
//
import VueRx from 'vue-rx'
Vue.use(VueRx)
//
import App from './index.vue';
import A from './router/a.vue'
import B from './router/b.vue'


const routes = [
    { path: '/a', component: A },
    { path: '/b', component: B }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    el:'#app',
    router,
    render: h => h(App)
})