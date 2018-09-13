<template>
  <div class="">
    <permision></permision>
  </div>
</template>
<script>
import './js/font.js'
import 'element-ui/lib/theme-chalk/index.css'

//
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'X2qlPmBEOyq8dKU1XLnFDFPBxS0aGucc'
})



import MutiUpload from './dataEntry/MutiUpload'
import permision from './dataDisplay/permision'
export default {
  components: {
    MutiUpload,
    permision
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import './scss/index.scss';
</style>
