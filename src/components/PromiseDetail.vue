<template>
  <div>
    <h1 class="ui dividing header">{{promise.title}}</h1>
    <div class="ui dividing medium header">공약 목적</div>
    <p v-for="pps in promise.purpose" :key="pps">{{pps}}</p>
    <div class="ui dividing medium header">이행 계획</div>
    <p v-for="pln in promise.plan" :key="pln">{{pln}}</p>
    <div class="ui dividing medium header">이행 현황</div>
    <div class="ui large feed">
      <div class="event" v-for="progress in promise.progresses" :key="progress.key">
        <div class="label">
          <i class="checkmark box icon"></i>
        </div>
        <div class="content">
          <div class="summary">
            {{progress.title}}
            <div class="date">
            {{progress.date.toLocaleDateString('ko-KR')}}
            </div>
          </div>
          <div class="extra text">
            <p>{{progress.content}}</p>
            <a v-if="progress.reference" :href="progress.reference.link" target="_blank">참고 자료: {{progress.reference.title}}</a>
          </div>
          <div class="meta">
            <a class="like" @click="progress.likes += 1">
              <i class="smile icon" ></i> {{progress.likes}} 
            </a>
            <a class="dislike" @click="progress.dislikes += 1">
              <i class="frown icon"></i> {{progress.dislikes}}
            </a>
            <a class="question" @click="makeNewQuestion(progress.key)">
              <i class="question icon"></i>
            </a>
          </div>
        </div>
        <div class="ui modal" :id="'question' + progress.key">
          <i class="close icon"></i>
          <div class="ui header">진행 상황 질문하기</div>
          <div class="content">
            <div class="ui form">
              <div class="field">
                <label>공약의 진행 상황에 대해 궁금하신 점을 남겨주세요.</label>
                <textarea rows="3"></textarea>
              </div>
            </div>
          </div>
          <div class="actions">
            <div class="ui positive right button">
              질문 남기기
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui dividing medium header">공약 평가</div>
    유성구민: 3.7 / 5
    <br>
    전체시민: 3.4 / 5
    <br>
    <div class="ui dividing small header">직접 평가해주세요</div>
    <div class="ui buttons">
      <button class="ui button" v-for="i in 5" :key="i" :class="score == i ? 'active' : ''" @click="score = i">{{i}}</button>
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
            <div class="metadata"><span class="date">{{comment.date}}</span></div>
            <div class="text">{{comment.text}}</div>
            <!--<div class="actions">
              <a class="reply">Reply</a>
            </div>-->
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
  export default {
    name: 'promiseDetail', 
    computed: {
      promise: function () {
        if(this.$route.params.type === 'president'){
          return this.$store.state.presidentPromises[this.$route.params.key]
        } else if (this.$route.params.type === 'mayor'){
          let promisesList = this.$store.state.mayorsPromises.find(function(mp){
            if(mp.city === this.$route.params.city){
              return mp
            }
          }.bind(this))
          return promisesList.promises[this.$route.params.key]
        } else if(this.$route.params.type ==='congressPerson'){
          let promisesList = this.$store.state.congressPromises.find(function(cp){
            if(cp.city === this.$route.params.city && cp.district == this.$route.params.district){
              return cp
            }
          }.bind(this))
          return promisesList.promises[this.$route.params.key]
        }
      },
      comments: function () {
        return this.promise.comments
      }
    },
    // props: ['promise']
    data: function () {
      return {
      //   promise:  {
      //     title: '쉐어하우스형 임대주택 공급',
      //     purpose: '주택 공급난 해소',
      //     plan: '2020년까지 1500호 공급',
      //     popularGroup: ['20대', '30대'],
      //     category: '교통/건설',
      //     progresses:[          
      //     {
      //       key: 1,
      //       title: '토지 보상 완료',
      //       content: '토지주와 협의 끝에 토지 보상을 완료하였습니다.',
      //       reference: {
      //         title: '유성구 임대주택 사업 토지보상 완료... 마침내 첫 삽 뜨나' ,
      //         link: 'https://news.naver.com'
      //       },
      //       date: new Date(2017, 5, 19),
      //       likes: 21,
      //       dislikes: 9
      //     }, 
      //     {
      //       key: 0,
      //       title: '구암동 34번지 부지 선정',
      //       content: '첫번째 임대주택 건립을 위해 공청회를 거쳐 부지를 선정하였습니다.',
      //       date: new Date(2017, 3, 2),
      //       likes: 34,
      //       dislikes: 12
      //     }] 
      //   },
      //   comments:[
      //     {
      //       key: 0,
      //       author: '유지애',
      //       date:  new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
      //       text: '우와! 참 좋은 공약이에요'
      //     },
      //     {
      //       key: 1,
      //       author: '이수정',
      //       date: new Date(2017, 6, 2, 15, 37, 12).toLocaleString('ko-KR'),
      //       text: '예산이 얼마나 들 지 걱정되네요',
      //       replies: [{
      //         key: 0,
      //         author: '조승래',
      //         date: new Date(2017, 6, 4, 11, 21, 57).toLocaleString('ko-KR'),
      //         text: '대통령 공약 사업으로 선정되어 전액 국비 지원 예정입니다. 걱정하지 마세요!'
      //       }]
      //     }
      //   ],
        score: 0,
        commentText: ''
      }
    },
    methods: {
      addReply: function () {
        console.log('addReply')
        this.$store.commit('addComment', {
          comment: 
          {
            author: '나',
            date: new Date(Date.now()).toLocaleString('ko-KR'),
            text: this.commentText
          },
          type: this.$route.params.type,
          city: this.$route.params.city,
          district: this.$route.params.district,
          key: this.$route.params.key
        })
        this.commentText = ''
      },
      makeNewQuestion: function (i) {
        $('#question' + i).modal('show')
      }
    }
  }
</script>

<style scoped>
.comments{
  text-align: left;
}
</style>