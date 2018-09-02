<template>
  <div class="">
    <All></All>
  </div>
</template>
<script>
import './js/font.js'
import 'element-ui/lib/theme-chalk/index.css'
//
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import Modal from './compsHigh/Modal'
import List from './DataDisplay/List'
import All from './dataEntry/All'
import bg from './page/bg'
export default {
  components: {
    All
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import './scss/index.scss';
</style>
