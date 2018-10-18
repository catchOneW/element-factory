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
      let arr1 = [1, 2, 3]
      let arr2 = [4, 5, 6]
      let arr3 = [7, 8, 9]
      echarts.init(this.$refs.chart).setOption({
        color: ['#4ab6fa', '#38cb92', '#f66d6d', '#b65ff9', '#1db7ff'],
        legend: {
          data: ['今日', '昨日', '7天前']
        },
        grid: {
          left: '10px',
          top: '70px',
          right: '40px',
          bottom: '10px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [1, 2, 3],
          axisLine: {
            lineStyle: {
              color: '#999',
              width: 1
            }
          },
          axisLabel: {
            formatter: '{value}',
            margin: 5,
            textStyle: {
              fontSize: 12
            }
          },
          splitLine: {
            interval: 0,
            lineStyle: {
              color: '#999'
            }
          },
          splitArea: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#999',
              width: 1
            }
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              fontSize: 12
            },
            interval: 2,
            margin: 10
          },
          splitLine: {
            interval: 2,
            lineStyle: {
              color: '#999'
            }
          }
        },
        series: [
          {
            name: '今日',
            type: 'line',
            data: arr1
          },
          {
            name: '昨日',
            type: 'line',
            data: arr2
          },
          {
            name: '7天前',
            type: 'line',
            data: arr3
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
