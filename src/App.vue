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
        `http://test.hxfzsoft.com:10099/group1/M00/00/0D/wKgWNVurQoyAchKvAAJfCE0YoEo640.jpg`,
        `http://test.hxfzsoft.com:10099/group1/M00/00/0D/wKgWNVurQoyAXx5sAAA85WKEw64880.jpg`
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
