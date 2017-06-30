<template>
  <div>
    <h3> 조승래 국회의원의 공약 </h3>
    <div class="ui top attached tabular menu">
      <a class="item">모두보기</a>
      <a class="item" v-for="category in categories" :key="category">{{category}}</a>
    </div>
    <div class="ui bottom attached segment">
      <div class="ui cards">
        <promise-item v-for="promise in promises" :promise="promise" :key="promise.title"></promise-item>
      </div>
    </div>
  </div>
</template>

<script>
import promiseItem from './PromiseItem'
export default {
  name: 'promiseList',
  components: {
    promiseItem
  },
  data: function () {
    return {
      promises: [
        {
          title: '계룡스파텔 재개발',
          purpose: '유성온천의 브랜드 가치 제고 및 주변 상권 활성화',
          plan: '2019년까지 재개발 완료',
          popularGroup: ['40대', '50대']
        },
        {
          title: '쉐어하우스형 임대주택 공급',
          purpose: '주택 공급난 해소',
          plan: '2020년까지 1500호 공급',
          popularGroup: ['20대', '30대']
        }
      ],
      categories: ['안전/환경', '일자리', '문화체육', '보건복지', '교통/건설', '행정', '경제', '과학기술', '외교안보', '교육', '농축수산']
    }
  }
}
</script>

<style scoped>

</style>