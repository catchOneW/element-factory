<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <mutiImgUp ref="MutiRef" :limit="2"></mutiImgUp>
    <button @click="open">打开</button>
    <button @click="submit">提交</button> -->
    <!-- <tableRowSpan></tableRowSpan> -->
    <!-- <permision></permision> -->
    <!-- <mouseRight></mouseRight> -->
    1111
  </div>
</template>
<script>
import { Observable } from 'rxjs'

export default {
  data() {
    return {
      urls: ['']
    }
  },
  created() {
    const dragDOM = document.getElementById('drag')
    const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mouseenter')
    const mouseUp = Rx.Observable.fromEvent(dragDOM, 'mouseleave')
    const mouseMove = Rx.Observable.fromEvent(dragDOM, 'mousemove')
    mouseDown
      .map(event => mouseMove.takeUntil(mouseUp))
      .concatAll()
      .subscribe(e => {
        console.log(e)
      })
  },
  methods: {
    // submit() {
    //   console.log(this.$refs.MutiRef.fileList)
    //   let rawFileList = this.$refs.MutiRef.fileList.filter(x => x.raw)
    //   let urlFileList = this.$refs.MutiRef.fileList.filter(x => !x.raw)
    // },
    // open(file) {
    //   this.$refs.MutiRef.fileList = this.urls.map((e, index) => {
    //     return {
    //       name: index,
    //       url: e
    //     }
    //   })
    // }
  }
}
</script>
<style lang="scss">
@import './scss/index.scss';

#app {
  height: 100vh;
}
</style>
