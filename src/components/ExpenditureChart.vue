<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  data: function () {
    return {
      options: {
        scales: {
          xAxes: [{
            barThickness: 10,
            categoryPercentage: 0.01,
            gridLines: {
              offsetGridLines: false
            },
            id: 'first-x-axis',
            type: 'time',
            time: {
              // unit: 'week',
              displayFormats: {
                quarter: 'II'
              },
              // min: new Date('2017-01-01')
            },
            distribution: 'linear',
            minRotation: 90
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                const nf = new Intl.NumberFormat(["ko-KR"], {
                  style: 'currency',
                  currency: 'KRW',
                  currencyDisplay: 'symbol'
                })
                return nf.format(value)
              }
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>