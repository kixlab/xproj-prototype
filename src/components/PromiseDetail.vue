<template>
  <div>
    <h2 class="ui dividing header">{{promise.title}}
    </h2>
    <div class="ui dividing medium header">
      공약 목적
       <a @click="onPurposeQuestionClick"><i id="ppsQ" class="help icon"></i> </a>
    </div>
    <ul>
      <li v-for="pps in promise.purpose" :key="pps">{{pps}}</li>
    </ul>
    <div class="ui modal" :id="'purposeQuestion' + city + district + key">
      <i class="close icon"></i>
      <div class="ui header">공약 목적 질문하기</div>
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>공약의 목적에 대해 궁금하신 점을 남겨주세요.</label>
            <textarea rows="3" placeholder="공약 목적에 관한 설명이 부족합니다." v-model="purposeQuestion"></textarea>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui positive right button" @click="onPurposeQuestionLeft">
          질문 남기기
        </div>
      </div>
    </div>
    <div class="ui dividing medium header">
      이행 계획
      <a @click="onPlanQuestionClick"><i id="plnQ" class="help icon"></i></a>
    </div>
    <ul>
    <li v-for="pln in promise.plan" :key="pln">{{pln}}</li>
    </ul>
    <div class="ui modal" :id="'planQuestion' + city + district + key">
      <i class="close icon"></i>
      <div class="ui header">공약 이행 계획 질문하기</div>
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>공약의 이행 계획에 대해 궁금하신 점을 남겨주세요.</label>
            <textarea rows="3" placeholder="공약의 이행 계획에 대해 자세한 설명을 요구합니다." v-model="planQuestion"></textarea>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui positive right button" @click="onPlanQuestionLeft">
          질문 남기기
        </div>
      </div>
    </div>
    <div class="ui dividing medium header">이행 현황</div>
    <div class="ui feed">
      <button class="ui button" @click="showAddProgressModal">이행 현황 추가</button>
      <add-progress v-if="isProgressModalVisible" @otherRefChecked="onOtherRefChecked" :otherRefs="otherRefs" :city="city" :district="district" :promiseKey="key" @progressUpdate="onProgressUpdate" :reprName="repr.name" :promiseTitle="promise.title"></add-progress>
      <div class="event" v-for="progress in progresses" :key="progress.key">
        <div class="label">
          <i class="checkmark box icon"></i>
        </div>
        <div class="content">
          <div class="summary">
            <span v-if="progress.title" v-html="progress.title"></span>
            <!-- {{progress.title}} -->
            <div class="date">
            {{convertDate(progress.date)}}
            </div>
          </div>
          <div class="extra text" v-if="progress.content" v-html="progress.content">
            <span v-if="progress.references"> 참고 자료: </span> <a v-if="progress.references" :href="progress.references.link" target="_blank">{{progress.references.title}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ui dividing medium header">공약 호감도</div>
    지역구민: 3.7 / 5
    <br>
    전체시민: 3.4 / 5
    <br>
    <div class="ui small header">이 공약을 좋아하십니까 ?</div>
      <div style="text-align: center">
        <div style="display: inline-block;" v-for="i in 5" :key="i">
	  <div v-if="i == 1">
	  <b>좋아하지<br>않는다</b>
	  </div>
	  <div v-else-if="i == 5">
	  <b>좋아한다</b>
	  </div>

          <button style="margin-left: 5px; margin-right: 5px;" class="ui button" :class="score == i ? 'active' : ''" @click="score = i">
            {{i}}
          </button>
        </div>
      </div>
    <div class="ui positive message" v-if="score != 0">
      <div class="header">점수가 기록되었습니다.</div>
    </div>
    <div class="ui dividing medium header">시민 의견</div>
    <div class="ui basic segment">
      <div class="ui minimal comments">
        <div class="comment" v-for="comment in comments" :key="comment.key">
          <a class="avatar"><img src="/static/logo.png"></a>
          <div class="content">
            <span class="author">{{comment.author}}</span>
            <div class="metadata"><span class="date">{{convertDate(comment.date)}}</span></div>
            <div class="text">{{comment.text}}</div>
            <div v-if="comment.replies" class="comments">
              <div class="comment" v-for="reply in comment.replies" :key="reply.key">
                <a class="avatar"><img src="/static/logo.png"></a>
                <div class="content">
                  <span class="author">{{reply.author}}</span>
                  <div class="metadata"><span class="date">{{reply.date}}</span></div>
                  <div class="text">{{reply.text}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form class="ui reply form">
          <label class="ui tiny header">
            공약에 대한 의견이나 궁금하신 점을 자유롭게 남겨주세요.
          </label>
          <br>
          <div class="field">
            <textarea v-model="commentText" rows="2"></textarea>
          </div>
        </form>
        <br>
        <button class="ui blue submit button" @click="addReply">댓글 달기</button>
      </div>
    </div>
  </div>
</template>

<script>
  import addProgress from './AddProgress'
  export default {
    name: 'promiseDetail', 
    components: {
      addProgress
    },
    computed: {
      city: function () {return this.$route.params.city},
      district: function () { return this.$route.params.district},
      key: function () { return this.$route.params.key },
      comments: function () {
        return this.promise.comments
      },
      repr: function () {
        return this.$store.state.reprs.find(function(repr) {
          if(repr.city === this.$route.params.city && repr.district == this.$route.params.district) {
            return repr
          }
        }.bind(this))
      },
      otherRefs: function () {
        if(!this.promise.progresses){
          return []
        }
        return this.promise.progresses.filter(function (p){
          return p.type === 'otherRef'
        })
      },
      keyword: function () {
        return this.promise.title.split(' ')[0]
      },
      progresses: function () {
        if(!this.promise.progresses){
          return []
        }
        return this.promise.progresses.filter(function(p){
          return p.approval >= 5
        }).sort(function(a, b){
          const aDate = new Date(a.date)
          const bDate = new Date(b.date)
          return aDate > bDate
        })
      }
    },
    data: function () {
      return {
        promise: {},
        score: 0,
        commentText: '',
        newsURL: 'http://34.208.245.104:3000/article',
        docuURL: 'http://34.208.245.104:3000/seoul',
        promiseURL: 'http://34.208.245.104:3000/promise',
        liked: false,
        isProgressModalVisible: false,
        purposeQuestion: '',
        planQuestion: ''
      }
    },
    mounted: function () {
      let url = this.promiseURL + '/' + this.city + '/' + this.district + '/' + this.key
      this.$http.get(url).then(function (response) {
          this.promise = response.body
          console.log(response.body)
          this.isProgressModalVisible = true

        }.bind(this), function (response) {
        }.bind(this))
      setInterval(function () {
        console.log('polling...')
        this.$http.get(url).then(function (response) {
          this.promise = response.body
          console.log(response.body)
        }.bind(this), function (response) {
        }.bind(this))
      }.bind(this), 10000)
    },
    destroyed: function () {
      this.isProgressModalVisible = false
      console.log('promisedetail destoryed')
    },
    methods: {
      addReply: function () {
        console.log('addReply')
        let comment =  {
          "author": this.$store.state.userName,
          "date": new Date(),
          "text": this.commentText,
          "type": 'general'
        }
        this.postReply(comment)
        this.commentText = ''
      },
      postReply: function(comment) {
        let url = this.promiseURL + '/' + this.city + '/' + this.district + '/' + this.key + '/comment'
        this.$http.put(url, comment).then(function(response){
          let url = this.promiseURL + '/' + this.city + '/' + this.district + '/' + this.key
          this.$http.get(url).then(function(response) {
            this.promise = response.body
            console.log(response.body)
          }.bind(this), function(response) {
          }.bind(this))
        }.bind(this))
      },
      makeNewQuestion: function (i) {
        $('#question' + i).modal('show')
      },
      showAddProgressModal: function () {
        $('#addProgressModal' + this.city + this.district + this.key).modal('show')
      },
      onPurposeQuestionClick: function () {
        $('#purposeQuestion' + this.city + this.district + this.key).modal('show')
      },
      onPlanQuestionClick: function () {
        $('#planQuestion' + this.city + this.district + this.key).modal('show')
      },
      onPurposeQuestionLeft: function () {
        const comment =  {
          "author": this.$store.state.userName,
          "date": new Date(),
          "text": this.purposeQuestion,
          "type": 'purpose'
        }
        if(this.purposeQuestion.length == 0){
          comment.text = '공약 목적에 관한 설명이 부족합니다.'
        }
        this.postReply(comment)
        this.purposeQuestion = ''
      },
      onPlanQuestionLeft: function () {
        const comment =  {
          "author": this.$store.state.userName,
          "date": new Date(),
          "text": this.planQuestion,
          "type": 'plan'
        }
        if(this.planQuestion.length == 0){
          comment.text = '공약의 이행 계획에 대해 자세한 설명을 요구합니다.'
        }
        this.postReply(comment)
        this.planQuestion = ''
      },
      onProgressUpdate: function () {

      },
      onOtherRefChecked: function(otherRef){
        let o = this.otherRefs.find(function(o){
          return (o.title === otherRef.title && o.content === otherRef.content)
        })
        console.log('onOtherRefChecked')
        o.checked = !o.checked
      },
      convertDate: function(dateStr){
        const date = new Date(dateStr)
        return date.toLocaleString('ko-KR')
      }
    }
  }
</script>

<style scoped>
.comments{
  text-align: left;
}
li {
  text-align: left;
}

.header {
  text-align: left;
  padding-left: 2em;
}
#ppsQ {
  float: right;
}

#plnQ{
  float: right;
}
</style>
