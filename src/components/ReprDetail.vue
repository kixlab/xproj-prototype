<template>
  <div>
    <repr-item :repr="reprs[0]"></repr-item>
    <promise-list></promise-list>
  </div>
</template>

<script>
import reprItem from './ReprItem.vue'
import promiseList from './PromiseList.vue'

export default {
  name: 'reprDeatil',
  components: {
    reprItem,
    promiseList
  },
  data: function () {
    return {
      reprs: [{
        name: '조승래',
        district: '국회의원 (대전 유성구 갑)',
        title: '국회의원',
        img: '/static/logo.png',
        promise: '유성온천의 브랜드 가치 제고 및 주변 상권 활성화를 위한 계룡스파텔 재개발'
      }]
    }
  }
}
</script>

<style scoped>

</style>