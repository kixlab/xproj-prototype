<template>
  <div>
    <div class="question">
      {{question}}
      <br>
      <span v-if="questionNum != 3">1점에서 5점까지 점수로 평가해주세요.</span>
    </div>
    <div v-if="questionNum == 1" class="promise ui message big">
      {{promise.title}}
      <a @click="showPromiseDetail" class="ui right floated button mini icon"><i class="info icon"></i></a>
    </div>
    <div v-if="questionNum != 3">
      <div style="text-align: center">
        <div style="display: inline-block;" v-for="i in 5" :key="i">
	  <div v-if="questionNum == 0 && i == 1">
	  <b>전혀 모른다</b>
	  </div>
	  <div v-if="questionNum == 0 && i == 5">
	  <b>매우 잘 안다</b>
	  </div>

	  <div v-if="questionNum == 1 && i == 1">
	  <b>좋아하지<br>않는다</b>
	  </div>
	  <div v-if="questionNum == 1 && i == 5">
	  <b>좋아한다</b>
	  </div>

	  <div v-if="questionNum == 2 && i == 1">
	  <b>지지하지<br>않는다</b>
	  </div>
	  <div v-if="questionNum == 2 && i == 5">
	  <b>지지한다</b>
	  </div>

          <button style="margin-left: 5px; margin-right: 5px;" class="ui button" :class="score == i ? 'primary' : ''" @click="score = i">
            {{i}}
          </button>
        </div>
      </div>
    </div>

    <div v-else class="ui form">
      <textarea rows="3"></textarea>
    </div>
    <div class="navButtons">
      <button class="ui button" v-bind:class="{disabled: !isPreviousEnabled()}" @click="decrementQuestionNum">
        이전 질문
      </button>
      <button class="ui button" @click="stopIntro">
        모두 건너뛰기
      </button>
      <button class="ui button primary" @click="incrementQuestionNum">
        다음 질문
      </button>
    </div>
    <div class="ui modal">
      <div class="header">{{promise.title}}</div>
      <div class="content">
        <div class="ui top attached tabular menu">
          <a class="item" :class="curTabStatus === 'purpose' ? 'active' : ''" @click="curTabStatus = 'purpose'">공약 목적</a>
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
        <div class="ui positive message" :class="!isRequestSent? 'hidden' : ''">
          <div class="header">의견이 등록되었습니다.<br> 이 의견은 모여 해당 인물에게 전달됩니다.</div>
        </div>
        <div v-if="isRequestActive">
          <form class="ui form">
            <textarea placeholder="의견을 남겨주세요"></textarea>
            <button class="ui button" @click="onOpinionSend">의견 보내기</button>
          </form>
        </div>
        <div v-else class="ui fluid button" :class="isRequestSent? 'disabled' : ''" @click="isRequestActive=true">
	  공약에 대한 자세한 정보를 요청합니다.
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
        isRequestActive: false,
        isRequestSent: false
      }
    },
    methods: {
      isPreviousEnabled: function () {
        return this.questionNum > 0;
      },
      incrementQuestionNum: function () {
        if (this.questionNum < 3)
          this.questionNum += 1
        else{
          this.$emit('nextRepr')
          this.questionNum = 0
          this.isRequestSent = false
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
      },
      onOpinionSend: function () {
        this.isRequestActive = false
        this.isRequestSent = true
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
  .question {
    font-weight: bold;
    font-size: 1.2em;
    margin: 1em 0;
  }

</style>
