<template>
  <div>
    My representatives!!
    <repr-item v-for="repr in reprs" :repr="repr" :key="repr.name"></repr-item>
  </div>
</template>

<script>
  import reprItem from './ReprItem' 
  export default {
    name: 'MyReprs',
    components: {
      reprItem
    },
    data: function () {
      return {
        reprs: [{
          name: '조승래',
          district: '국회의원 (대전 유성구 갑)',
          title: '국회의원',
          img: '/static/logo.png',
          promise: '유성온천의 브랜드 가치 제고 및 주변 상권 활성화를 위한 계룡스파텔 재개발'
        },
        {
          name: '권선택',
          district: '대전광역시장',
          title: '시장',
          img: '/static/logo.png',
          promise: '공기업 사장 인사청문 간담회 시행'
        },
        {
          name: '문재인',
          district: '대한민국 대통령',
          title: '대통령',
          img: '/static/logo.png',
          promise: '스펙 없는 이력서'
        }]
      }
    }
  }
</script>

<style scoped>
</style>