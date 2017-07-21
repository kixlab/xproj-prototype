<template>
  <div>
    <h3> 당신이 좋아할 {{repr.name + ' ' + repr.job}}의 공약 </h3>
    <div class="ui top attached tabular menu">
      <!--<a class="item" v-for="category in categories" :key="category">{{category}}</a>-->
      <div class="ui dropdown item">
        {{displayedCurCategory}}
        <i class="ui dropdown icon"></i>
        <div class="ui menu">
          <a class="item" @click="curCategory = ''">모두 보기</a>
          <a class="item" v-for="category in categories" :key="category" @click="curCategory = category">{{category}}</a>
        </div>
      </div>
      <div class="ui dropdown item">
        {{displayedCurTarget}}
        <i class="ui dropdown icon"></i>
        <div class="ui menu">
          <a class="item" @click="curTarget = ''">모두 보기</a>
          <a class="item" v-for="target in targets" :key="target" @click="curTarget= target">{{target}}</a>
        </div>
      </div>
    </div>
    <div class="ui bottom attached segment">
      <div class="ui cards">
        <promise-item v-for="promise in filteredPromises" @targetClick="onTargetClick" @categoryClick="onCategoryClick" :promise="promise" :key="promise.key" :city="repr.city" :district="repr.district" :isFav="false"></promise-item>
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
  methods: {
    onCategoryClick: function (category) {
      this.curCategory = category
    },
    onTargetClick: function(target){
      this.curTarget = target
    }
  },
  props:['repr', 'promises'],
  computed: {
    filteredPromises: function () {
      // return this.promises.promises
      let promises = []
      if(this.curCategory.length === 0 || this.curCategory === '공약 분류'){
        promises = this.promises.promises
      } else {
        promises = this.promises.promises.filter((promise) => {
          return promise.category.includes(this.curCategory)
        })
      }

      if(this.curTarget.length === 0 || this.curTarget === '수혜 대상'){
        return promises
      } else {
        return promises.filter((promise) => {
          return promise.target.includes(this.curTarget)
        })
      }
    },
    displayedCurCategory: function () {
      if(this.curCategory.length !== 0){
        return this.curCategory
      } else {
        return '모두 보기'
      }
    },
    displayedCurTarget: function () {
      if(this.curTarget.length !== 0){
        return this.curTarget
      } else {
        return '모두 보기'
      }
    },
    categories: function () {return this.$store.state.categories},
    targets: function () {return this.$store.state.targets}
  },
  mounted: function () {
    $('.dropdown').dropdown()
  },
  data: function () {
    return {
      curCategory: '공약 분류',
      curTarget: '수혜 대상'
      // categories: ['안전/환경', '일자리', '문화체육', '보건복지', '교통/건설', 
      // '정치행정', '경제', '과학기술', '외교안보', '교육', '농축수산', '인권', '기타'],

    }
  }
}
</script>

<style scoped>

</style>