<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <mutiImgUp ref="MutiRef" :limit="2"></mutiImgUp>
    <button @click="open">打开</button>
    <button @click="submit">提交</button> -->
    <!-- <tableRowSpan></tableRowSpan> -->
    <!-- <permision></permision> -->
    <!-- <mouseRight></mouseRight> -->
    <!-- <imgPreview></imgPreview> -->
    <!-- <bar-chart :chartData="chartData" :options="options" :height="200"></bar-chart>

    <pie-chart :chartData="chartData" :options="options" :height="200"></pie-chart>

    <scatter-chart :chartData="scatterData" :options="options" :height="200"></scatter-chart>

    <button @click="fillData">Randomize</button> -->
    <div class="h300 por">
      <lineChart></lineChart>
    </div>
    <div class="h300 por">
      <pieChart></pieChart>
    </div>
  </div>
</template>
<script>
import { Observable } from 'rxjs'

export default {
  data() {
    return {
      urls: [''],
      options: {},
      chartData: {}
    }
  },
  created() {
    // const dragDOM = document.getElementById('drag')
    // const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mouseenter')
    // const mouseUp = Rx.Observable.fromEvent(dragDOM, 'mouseleave')
    // const mouseMove = Rx.Observable.fromEvent(dragDOM, 'mousemove')
    // mouseDown
    //   .map(event => mouseMove.takeUntil(mouseUp))
    //   .concatAll()
    //   .subscribe(e => {
    //     console.log(e)
    //   })
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    fillData() {
      this.chartData = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      this.scatterData = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            data: [
              {
                x: -10,
                y: 0
              },
              {
                x: 0,
                y: 10
              },
              {
                x: 10,
                y: 5
              }
            ]
          }
        ]
      }
    }
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
</style>
