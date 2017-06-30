<template>
  <div>
    <div class="question">
      {{question}}
    </div>
    <div v-if="questionNum == 1" class="promise">
      {{promise}}
      <a @click="showPromiseDetail">자세히</a>
    </div>
    <div v-if="questionNum != 3" class="ui buttons">
      <button class="ui button" :class="score == i ? 'active' : ''" @click="score = i" v-for="i in 5">
        {{i}}
      </button>
    </div>
    <div v-else class="ui form">
      <textarea rows="3"></textarea>
    </div>
    <div class="navButtons">
      <button class="ui button">
        Stop
      </button>
      <button class="ui button" @click="incrementQuestionNum">
        Next
      </button>
    </div>
    <div class="ui modal">
      <div class="header">{{promise}}</div>
      <div class="content">
        <div class="ui top attached tabular menu">
          <a class="item" :class="isPurposeActive ? 'active' : ''" @click="isPurposeActive = true">공약 내용</a>
          <a class="item" :class="isPurposeActive ? '' : 'active'" @click="isPurposeActive = false">이행 계획</a>
        </div>
        <div v-if="isPurposeActive" class="ui bottom attached segment">
          purpose
        </div>
        <div v-else class="ui bottom attached segment">
          plan
        </div>
        <div class="ui fluid button">
          자세한 정보를 알려주세요!!
          <br>
          (1,241명이 요청합니다.)
        </div>
      </div>
      <div class="actions">
        <button class="ui positive button">
          닫기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'question',
    props: ['repr'],
    computed: {
      name: function () {
        return this.repr.name
      },
      promise: function () {
        return this.repr.promise
      },
      title: function () {
        return this.repr.title
      },
      question: function () {
        switch (this.questionNum) {
          case 0:
            return this.name + ' ' + this.title + '의 ' + this.questions[0]
          case 1:
            return this.name + ' ' + this.title + '의 ' + this.questions[1]
          case 2:
            return this.name + ' ' + this.title + '을 ' + this.questions[2]
          case 3:
            return this.questions[3]
        }
      }
    },
    data: function () {
      return {
        score: 0,
        questionNum: 0,
        questions: [
          '공약에 대해 알고 계십니까?',
          '아래 공약을 좋아하십니까?',
          '지지하십니까?',
          '그 이유는 무엇입니까?'
        ],
        isPurposeActive: true
      }
    },
    methods: {
      incrementQuestionNum: function () {
        if (this.questionNum < 3)
          this.questionNum += 1
        else{
          this.$emit('nextRepr')
          this.questionNum = 0
        }
        this.score = 0
      },
      showPromiseDetail: function () {
        $('.ui.modal').modal('show')
      }
    }
  }

</script>

<style scoped>
  .navButtons {
    margin-top: 2em;
  }
  a {
    cursor: pointer;
  }
</style>