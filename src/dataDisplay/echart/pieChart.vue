<template>
    <div>
        <div ref="chart" id="chart-panel"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted() {
    this.search()
  },
  methods: {
    search() {
      echarts.init(this.$refs.chart).setOption({
        color: ['rgb(100, 150, 210)', '#90CAF9', 'rgb(100, 150, 150)'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['1', '2', '3']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [10, 20, 30]
          }
        ]
      })
    }
  }
}
</script>

<style>
#chart-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 10px 10px 20px 10px;
}
</style>
