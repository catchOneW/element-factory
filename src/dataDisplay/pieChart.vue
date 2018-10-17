<script>
import { Pie, mixins } from 'vue-chartjs'

export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
</script>
