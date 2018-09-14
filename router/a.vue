<template>
    <div>
        <input type="text" v-model="userName">
        <button @click="go">传参数到b页面</button>
    </div>
</template>

<script>
export default {
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
