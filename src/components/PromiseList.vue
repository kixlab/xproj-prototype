<template>
  <div>
    <h3> 조승래 국회의원의 공약 </h3>
    <div class="ui top attached tabular menu">
      <!--<a class="item" v-for="category in categories" :key="category">{{category}}</a>-->
      <div class="ui dropdown item">
        {{displayedCurCategory}}
        <i class="ui dropdown icon"/>
        <div class="ui menu">
          <a class="item" @click="curCategory = ''">모두보기</a>
          <a class="item" v-for="category in categories" :key="category" @click="curCategory = category">{{category}}</a>
        </div>
      </div>
    </div>
    <div class="ui bottom attached segment">
      <div class="ui cards">
        <promise-item v-for="promise in filteredPromises" :promise="promise" :key="promise.title"></promise-item>
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
  computed: {
    filteredPromises: function () {
      return this.promises.filter((promise) => {
        return promise.category.includes(this.curCategory)
      })
    },
    displayedCurCategory: function () {
      if(this.curCategory.length !== 0){
        return this.curCategory
      } else {
        return '모두 보기'
      }
    }
  },
  mounted: function () {
    $('.dropdown').dropdown()
  },
  data: function () {
    return {
      promises: [
        {
          title: '계룡스파텔 재개발',
          purpose: '유성온천의 브랜드 가치 제고 및 주변 상권 활성화',
          plan: '2019년까지 재개발 완료',
          popularGroup: ['40대', '50대'],
          category: '교통/건설'
        },
        {
          title: '쉐어하우스형 임대주택 공급',
          purpose: '주택 공급난 해소',
          plan: '2020년까지 1500호 공급',
          popularGroup: ['20대', '30대'],
          category: '교통/건설'
        },
        {
          title: '노인요양의 사회화',
          purpose: '',
          plan: '',
          popularGroup: ['40대', '50대'],
          category: '보건복지'
        },
        {
          title: '학급 당 인원수 감축 추진 원신흥동 지역 중학교 신설',
          purpose: '',
          plan: '',
          popularGroup: ['30대', '40대'],
          category: '교육'
        },
        {
          title: '영세자영업자 부가가치세 간이과세 조정으로 소득보장',
          purpose: '',
          plan: '',
          popularGroup: ['자영업자', '40대'],
          category: '경제'
        }
      ],
      curCategory: '',
      categories: ['안전/환경', '일자리', '문화체육', '보건복지', '교통/건설', 
      '정치행정', '경제', '과학기술', '외교안보', '교육', '농축수산', '인권', '기타']
    }
  }
}
</script>

<style scoped>

</style>