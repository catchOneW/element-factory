<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <mutiImgUp :urls="urls" @addImg="addImg" @removeImg="removeImg"></mutiImgUp>
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
      console.log(this.urls)
    },
    // fileListGen() {
    //   this.fileList = this.urls.map((e, index) => {
    //     return {
    //       name: index,
    //       url: e
    //     }
    //   })
    // },
    addImg(file) {
      this.urls.push(URL.createObjectURL(file))
    },
    removeImg(fileList) {
      this.urls = fileList.map(e => e.url)
      console.log(this.urls);
    },
    open() {}
  }
}
</script>
<style lang="scss">
@import './scss/index.scss';
</style>
