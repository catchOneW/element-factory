<template>
  <div>
    <input type="text" v-model="userName">
    <button @click="go">传参数到b页面</button>
<button v-stream:click="{ subject: plus$, data: someData }">+</button>
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import { Subject, Observable } from 'rxjs'
import { map, startWith, scan } from 'rxjs/operators'

export default {
    domStreams: ['plus$'],
  subscriptions() {
    // 声明接收的 Subjects
    this.plus$ = new Subject()
    // ...然后使用 Subjects 作为来源流创建订阅。
    // 来源流以 `{ event: HTMLEvent, data?: any }` 的格式发送数据
    return {
      count: this.plus$.pipe(
        map(() => 1),
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  },
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
