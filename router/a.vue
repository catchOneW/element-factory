<template>
  <div>
    <input type="text" v-model="userName">
    <button @click="go">传参数到b页面</button>
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
export default {
  created() {
    var object = { a: 1, b: '2', c: 3 }
    console.log(_.pick(object, ['a', 'c']))
    console.log(moment().format('L'))
  },
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    go() {
      //这个依赖路由配置  b/:userName才行，代码生成的路由不方便
      //   this.$router.push({ path: '/b', params: { userName: this.userName } })
      //这不依赖路由配置
      this.$router.push({ path: '/b', query: { userName: this.userName } })
    }
  }
}
</script>

<style>
</style>
