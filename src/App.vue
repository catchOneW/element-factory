<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <mutiImgUp ref="up" :limit="2"></mutiImgUp>
    <button @click="open">打开</button>
    <button @click="submit">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      urls: [
      ]
    }
  },
  methods: {
    submit() {
      console.log(this.$refs.up.fileList)
    },
    open(file) {
      this.$refs.up.fileList = this.urls.map((e, index) => {
        return {
          name: index,
          url: e
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import './scss/index.scss';
</style>
