<template>
  <div>
    <h1 class="ui dividing header">{{promise.title}}</h1>
    <div class="ui dividing medium header">공약 목적</div>
    <ul>
    <li v-for="pps in promise.purpose" :key="pps">{{pps}}</li>
    </ul>
    <div class="ui dividing medium header">이행 계획</div>
    <ul>
    <li v-for="pln in promise.plan" :key="pln">{{pln}}</li>
    </ul>
    <div class="ui dividing medium header">이행 현황</div>
    <div class="ui feed">
      <button class="ui button" @click="getArticles">이행 현황 추가</button>
      <div class="ui long modal" id="addProgressModal">
        <i class="close icon"></i>
        <div class="ui header">이행 현황 추가</div>
        <div class="content">
          <div class="ui top attached tabular menu">
            <a class="item" :class="registerArticle == 0 ? 'active' : ''" @click="registerArticle = 0">기사 추가</a>
            <a class="item" :class="registerArticle == 1? 'active' : ''" @click="registerArticle = 1">기타 자료 추가</a>
            <a class="item" :class="registerArticle == 2 ? 'active': ''" @click="registerArticle = 2">기타 자료 확인</a>
          </div>
          <div v-if="registerArticle == 0" class="ui bottom attached segment">
            공약과 연관있는 기사를 골라주세요.
            <div class="ui feed">
              <div class="event" v-for="article in articles" :key="article.title">
                <div class="label">
                  <i :class="article.checked ? 'checkmark box icon' : 'square icon'" @click="article.checked = !article.checked"></i>
                </div>
                <div class="content">
                  <div class="summary">
                    <a :href="article.link">{{article.title}}</a>
                    <div class="date">
                      {{article.pubDate}}
                    </div>
                  </div>
                  <div class="extra text">
                    <p>{{article.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="registerArticle == 1" class="ui bottom attached segment">
            <form class="ui form">
              <div class="field">
                <label>제목</label>
                <input type="text"></input>
              </div>
              <div class="inline fields" id="genderField">
                <label>자료 종류</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio"></input>
                    <label>정부 공식 문서</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="gender"></input>
                    <label>그 외(개인 경험, 블로그 등)</label>
                  </div>
                </div>
              </div>
              <div class="field">
                <label>설명</label>
                <textarea rows="3"></textarea>
              </div>
              <div class="field">
                <label>출처</label>
                <input type="text"></input>
              </div>
            </form>
          </div>
          <div v-else-if="registerArticle == 2" class="ui bottom attached segment">
            공약과 연관있는 자료를 골라주세요.
            <div class="ui feed">
              <div class="event" v-for="otherRef in otherRefs" :key="otherRef.key">
                <div class="label">
                  <i :class="otherRef.checked ? 'checkmark box icon' : 'square icon'" @click="otherRef.checked = !otherRef.checked"></i>
                </div>
                <div class="content">
                  <div class="summary">
                    {{otherRef.title}}
                    <div class="date">
                      {{otherRef.date}}
                    </div>
                  </div>
                  <div class="extra text">
                    <p>{{otherRef.content}}</p>
                    참고자료: <a :href="otherRef.reference.link">{{otherRef.reference.title}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="ui positive right button">
            진행 상황 저장하기
          </div>
        </div>
      </div>
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
            <span v-if="progress.reference"> 참고 자료: </span> <a v-if="progress.reference" :href="progress.reference.link" target="_blank">{{progress.reference.title}}</a>
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
    <div class="ui dividing medium header">공약 호감도</div>
    지역구민: 3.7 / 5
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
        let promiseList =  this.$store.state.promises.find(function(ps) {
          if(ps.city === this.$route.params.city && ps.district === this.$route.params.district) {
            return ps
          }
        }.bind(this))
        return promiseList.promises[this.$route.params.key]
      },
      comments: function () {
        return this.promise.comments
      }
    },
    data: function () {
      return {
        articles: [],
        registerArticle: 0,
        otherRefs: [              
          {
            key: 1,
            content: '천개의 숲 사업 예산안입니다. 2017년 새로 조성하는 숲 200개와 지금까지 조성된 숲 500개의 유지 관리비를 포함해 총 50억 예산이 배정되어 있습니다.',
            date: new Date(2017, 5, 31),
            title: '2017년 천개의 숲 사업 관련 예산안',
            reference: { 'title': '2017년 서울시 예산안', 'link': 'http://www.seoul.go.kr' },
            checked: false,
          },
        ],
        score: 0,
        commentText: '',
        newsURL: 'http://localhost:3000',
        // newsHeader: 
        // { 
        //   headers: 
        //     {
        //       'X-Naver-Client-Secret': '6svkkZa8A8',
        //       'X-Naver-Client-Id': 'X7WP9A3NGB1H8J8iJA7Y',
        //       'Access-Control-Allow-Origin': 'http://localhost:8080',
        //       'Access-Control-Request-Method': 'GET'
        //     }
        // }
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
          city: this.$route.params.city,
          district: this.$route.params.district,
          key: this.$route.params.key
        })
        this.commentText = ''
      },
      makeNewQuestion: function (i) {
        $('#question' + i).modal('show')
      },
      getArticles: function () {
        let url = this.newsURL + '/' + this.promise.title
        this.$http.get(url).then(function(response) {
          console.log(url)
          let items = JSON.parse(response.body).items
          this.articles = items.map(function (a) {
            a.checked = false
            return a
          })
          console.log(this.articles)
          // console.log(response.body)
        }.bind(this), function(response) {
          this.article = [{title: 'Error'}]
        }.bind(this)).then(function () {
          $('#addProgressModal').modal('show')
        })
        
      },
      showAddProgressModal: function () {
        $('#addProgressModal').modal('show')
      }
    }
  }
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
</script>

<style scoped>
.comments{
  text-align: left;
}
li {
  text-align: left;
}
</style>