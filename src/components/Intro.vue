<template>
  <div>
    <div class="ui header">
      Sign Up
    </div>
    <div class="ui divider"></div>
    <div class="intro">
      다음은 시민 분께서 선출하신 공직자입니다.
    </div>
    <div class="ui buttons">
      <button class="ui button" :class="reprIdx == 0 ? 'blue' : ''" >{{reprCho.name}}</button>
      <button class="ui button" :class="reprIdx == 1 ? 'blue' : ''">{{reprKwon.name}}</button>
      <button class="ui button" :class="reprIdx == 2 ? 'blue' : ''">{{reprMoon.name}}</button>
    </div>
    <repr-question :repr="curRepr">
    </repr-question>
    <question :repr="curRepr" @nextRepr="onNextRepr">
    </question>
  </div>
</template>

<script>
  import reprQuestion from './ReprQuestion.vue'
  import question from './Question.vue'

  export default {
    name: 'intro',
    components: {
      reprQuestion,
      question
    },
    computed: {
      curRepr: function () {
        if(this.reprIdx == 0){
          return this.reprCho
        } else if (this.reprIdx == 1){
          return this.reprKwon
        } else if (this.reprIdx == 2){
          return this.reprMoon
        }
      }
    },
    data() {
      return {
        reprCho: {
          name: '조승래',
          district: '국회의원 (대전 유성구 갑)',
          title: '국회의원',
          img: '/static/logo.png',
          promise: '유성온천의 브랜드 가치 제고 및 주변 상권 활성화를 위한 계룡스파텔 재개발'
        },
        reprKwon: {
          name: '권선택',
          district: '대전광역시장',
          title: '시장',
          img: '/static/logo.png',
          promise: '공기업 사장 인사청문 간담회 시행'
        },
        reprMoon: {
          name: '문재인',
          district: '대한민국 대통령',
          title: '대통령',
          img: '/static/logo.png',
          promise: '스펙 없는 이력서'
        },
        reprIdx: 0
      }
    },
    methods: {
      onNextRepr: function () {
        if(this.reprIdx < 2){
          this.reprIdx += 1
        } else {
          this.$router.push('myReprs')
        }
      }
    }
  }

</script>

<style>

</style>