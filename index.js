import './src/js/font.js'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRx from 'vue-rx'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'X2qlPmBEOyq8dKU1XLnFDFPBxS0aGucc'
})
Vue.use(VueRx)

//
import RichText from './src/dataEntry/RichText.vue'
Vue.component('RichText', RichText)
import singleImgUp from './src/dataEntry/singleImgUp.vue'
Vue.component('singleImgUp', singleImgUp)
import mutiImgUp from './src/dataEntry/mutiImgUp.vue'
Vue.component('mutiImgUp', mutiImgUp)
import tableRowSpan from './src/dataDisplay/tableRowSpan.vue'
Vue.component('tableRowSpan', tableRowSpan)

import App from './src/App.vue';
import A from './src/router/a.vue'
import B from './src/router/b.vue'

const routes = [
    { path: '/a', component: A },
    { path: '/b', component: B }
]
const router = new VueRouter({
    routes
})
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})