<template>
  <div>
    <div class="question">
      {{question}}
    </div>
    <div v-if="questionNum == 1" class="promise">
      {{promise.title}}
      <a @click="showPromiseDetail">자세히</a>
    </div>
    <div v-if="questionNum != 3" class="ui buttons">
      <button class="ui button" :class="score == i ? 'active' : ''" @click="score = i" v-for="i in 5" :key="i">
        {{i}}
      </button>
    </div>
    <div v-else class="ui form">
      <textarea rows="3"></textarea>
    </div>
    <div class="navButtons">
      <button class="ui button" @click="decrementQuestionNum">
        Prev
      </button>
      <button class="ui button" @click="stopIntro">
        Stop
      </button>
      <button class="ui button" @click="incrementQuestionNum">
        Next
      </button>
    </div>
    <div class="ui modal">
      <div class="header">{{promise.title}}</div>
      <div class="content">
        <div class="ui top attached tabular menu">
          <a class="item" :class="curTabStatus === 'purpose' ? 'active' : ''" @click="curTabStatus = 'purpose'">공약 내용</a>
          <a class="item" :class="curTabStatus === 'plan' ? 'active' : ''" @click="curTabStatus = 'plan'">이행 계획</a>
          <a class="item" :class="curTabStatus === 'progress'? 'active' : ''" @click="curTabStatus = 'progress'">진행 상황</a>
        </div>
        <div v-if="curTabStatus === 'purpose'" class="ui bottom attached segment">
          <p v-for="pps in promise.purpose" :key="pps">{{pps}}</p>
        </div>
        <div v-else-if="curTabStatus === 'plan'" class="ui bottom attached segment">
          <p v-for="pln in promise.plan" :key="pln">{{pln}}</p>
        </div>
        <div v-else-if="curTabStatus === 'progress'" class="ui bottom attached segment">
          TBD
        </div>
        <div v-if="isRequestActive">
          <form class="ui form">
            <textarea placeholder="의견을 남겨주세요"></textarea>
            <button class="ui button" @click="isRequestActive=false">의견 보내기</button>
          </form>
        </div>
        <div v-else class="ui fluid button" @click="isRequestActive=true">
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
    props: ['repr', 'promise'],
    computed: {
      name: function () {
        return this.repr.name
      },
      title: function () {
        return this.repr.title
      },
      job: function () {
        return this.repr.job
      },
      question: function () {
        switch (this.questionNum) {
          case 0:
            return this.name + ' ' + this.job + '의 ' + this.questions[0]
          case 1:
            return this.name + ' ' + this.job + '의 ' + this.questions[1]
          case 2:
            return this.name + ' ' + this.job + '을 ' + this.questions[2]
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
        curTabStatus: 'purpose',
        isRequestActive: false
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
        this.curTabStatus = 'purpose'
        this.isRequestActive = false
      },
      decrementQuestionNum: function () {
        if(this.questionNum > 0){
          this.questionNum -= 1
        } else {
          this.$emit('prevRepr')
          this.questionNum = 3
        }
        this.score = 0
      },
      showPromiseDetail: function () {
        $('.ui.modal').modal('show')
      },
      stopIntro: function () {
        this.$router.push('myReprs')
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