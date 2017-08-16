<template>
  <div class="ui fluid card">
    <div class="content">
      <div class="header">
        <router-link :to="{name: 'promiseDetail', params: {city: city, district: district, key: promise.key}}"> {{promise.title}} </router-link>
        <div class="right floated meta">          
          <i v-if="!isFav" class="star icon" :class="liked ? 'active' : ''" @click="onFavClick"></i>
        </div>
      </div>
      <div class="right floated meta">
        <span v-if="isFav">{{reprName}}</span>
      </div>
    </div>
     <div class="content">
      <p v-for="pps in promise.purpose" :key="pps">{{pps}}</p>
      <router-link style="float: right;" :to="{name: 'promiseDetail', params: {city: city, district: district, key: promise.key}}">더 알아보기</router-link>
    </div> 
    <div class="content">
      <a class="ui basic circular red label" v-for="cat in promise.category" :key="cat" @click="onCategoryClick(cat)">
        {{cat}}
      </a>
      주제와 관련있는
    </div>
    <div class="content">
      <a class="ui basic circular blue label" v-for="t in promise.target" :key="t" @click="onTargetClick(t)">
        {{t}}
      </a>
      인 사람들을 위한
    </div>
    <div class="content" v-if="promise.popularGroup.length !== 0">
      <div class="ui basic blue label" v-for="group in promise.popularGroup" :key="group">{{group}}</div>
      인 사람들이 좋아하는
    </div>
    <!-- <div class="extra content">
      <div class="ui fluid action input">
        <input placeholder="의견을 남겨주세요."></input>
        <button class="ui button">남기기</button>
      </div>
    </div> -->
    <div class="ui bottom attached button" @click="showPromiseDetail">
      의견 남기기
    </div>
    <div class="ui modal" :id="modalID">
      <div class="header">{{promise.title}}</div>
      <div class="content">
        {{question.content}}
        <br>
        <ul v-if="question.type === 'general'"> 
          <li v-for="item in question.vueElements" :key="item">{{item}}</li>
        </ul>
        <a v-else-if="question.type === 'progress'" :href="question.progressLink">{{question.progressTitle}}</a>
        <br>
        {{question.extraContent}}
        <div v-if="noButtonClicked == true">
          그렇게 생각하지 않으신다면, 그 이유는 무엇인가요?
        </div>
      </div>
      <div class="actions" v-if="question.type !== 'end' && !noButtonClicked">
        <button class="ui positive button" @click="onModalButtonClick">
          예
        </button>
        <button class="ui negative button" @click="onNoButtonClick">
          아니오
        </button>
        <button class="ui button" @click="onModalButtonClick">
          잘 모르겠음
        </button>
      </div>
      <div class="actions" v-else-if="question.type !== 'end' && noButtonClicked">
        <div class="ui fluid action input">
          <input placeholder="의견을 남겨주세요"></input>
          <button class="ui button" @click="onSubmitButtonClick">의견 남기기</button>
        </div>
      </div>
      <div class="actions" v-else>
        <button class="ui positive button" @click="onModalButtonClick">
          닫기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'promiseItem',
  props: ['promise', 'city', 'district', 'isFav'],
  computed: {
    modalID: function () {
      return (Math.random().toString(36)+'00000000000000000').slice(2, 18)
    },
    reprName: function () {
      return this.$store.state.reprs.find(function(r) {
        return (r.city === this.city && r.district == this.district)
      }.bind(this)).name
    },
    question: function () {
      return this.questions[this.questionNum]
    }
  },
  data: function () {
    return {
      isPurposeActive: 'purpose',
      isRequestActive: false,
      liked: false,
      questionNum: 0,
      noButtonClicked: false,
      questions: [
        {
          content: '다음은 공직자가 밝힌 이 공약의 목적입니다.',
          vueElements: this.promise.purpose,
          extraContent: '이 목적은 적절한가요?',
          type: 'general'
        },
        {
          content: '다음은 공직자가 밝힌 이 공약의 이행 계획입니다.',
          vueElements: this.promise.plan,
          extraContent: '이 이행 계획은 적절한가요?',
          type: 'general'
        },
        {
          content: '다음은 이 공약과 연관된 자료입니다.',
          progressTitle: this.promise.progresses ? this.promise.progresses[0].title : '',
          progressLink: this.promise.progresses[0].reference ? this.promise.progresses[0].reference.link : '',
          extraContent: '이 자료는 이 공약의 이행현황과 관련이 있나요?',
          type: 'progress'
        },
        {
          content: '응답해주셔서 감사합니다. 남겨주신 의견은 1주일 단위로 공직자에게 전달됩니다. 공약 상세 페이지에서 다른 의견도 확인해보세요.',
          extraContent: '',
          type: 'end'
        }
      ]
    }
  },
  methods: {
    showPromiseDetail: function () {
      $('#' + this.modalID).modal('show').modal({
        onDeny: function () { return false },
        onApprove: function() { return false } }
      )
    },
    showRequest: function () {
      this.isRequestActive = true
    },
    onCategoryClick: function (cat) {
      this.$emit('categoryClick', cat)
    },
    onTargetClick: function (t) {
      this.$emit('targetClick', t)
    },
    onFavClick: function () {
      this.liked = !this.liked
      this.$store.commit('addFavPromises', {city: this.city, district: this.district, key: this.promise.key})
    },
    onModalButtonClick: function () {
      this.questionNum += 1
      if(this.questionNum == this.questions.length){
        this.questionNum = 0
        $('#' + this.modalID).modal('hide')
      }
    },
    onNoButtonClick: function () {
      this.noButtonClicked = true
    },
    onSubmitButtonClick: function () {
      this.questionNum += 1
      this.noButtonClicked = false
    }
  }
}
</script>

<style scoped>
.card {
  text-align: left;
  display: inline-block;
}
</style>

    <!--<div class="ui modal" :id="modalID">
      <div class="header">{{promise.title}}</div>
      <div class="content">
        <div class="ui top attached tabular menu">
          <a class="item" :class="curTabStatus === 'purpose'" @click="curTabStatus = 'purpose'">공약 내용</a>
          <a class="item" :class="curTabStatus === 'plan'" @click="curTabStatus = 'plan'">이행 계획</a>
          <a class="item" :class="curTabStatus === 'progress'" @click="curTabStatus = 'progress'">진행 상황</a>
        </div>
        <div v-if="isPurposeActive" class="ui bottom attached segment">
          {{promise.purpose}}
        </div>
        <div v-else class="ui bottom attached segment">
          {{promise.plan}}
        </div>
        <div v-if="isRequestActive">
          <textarea placeholder="의견을 남겨주세요"></textarea>
          <button class="ui button" @click="isRequestActive=false">의견 보내기</button>
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
    </div>-->