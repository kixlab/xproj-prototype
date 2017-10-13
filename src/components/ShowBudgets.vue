<template>
  <div>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>사업명</th>
          <th>예산 편성 금액</th>
          <th>예산 집행 금액</th>
          <th>집행률</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="business in businesses" :key="business.DBIZ_CD">
          <td>{{business.DBIZ_NM}}</td>
          <td>{{business.COMPO_AMT}}</td>
          <td>{{business.EXPD_AMT}}</td>
          <td>{{business.EXPD_AMT * 100.0 / business.COMPO_AMT}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'showBudgets',
    data: function () {
      return {
        businesses: []
      }
    },
    methods: {
      getBusiness: function (start) {
        const end = start + 999
        this.$http.get('http://openapi.seoul.go.kr:8088/515855484c6b687731313966526a5a73/json/FiosTbmTecurramt/' + start + '/' + end + '/2016').then((res) => {
          console.log(res)
          this.businesses = this.businesses.concat(res.body.FiosTbmTecurramt.row)
          if(res.body.FiosTbmTecurramt.list_total_count > end) {
            this.getBusiness(end + 1)
          }
        })
      }
    },
    mounted: function () {
      this.getBusiness(1)
    }
  }
</script>

<style lang="css">
  
</style>