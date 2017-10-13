<template>
  <div>
    <h2 class="ui dividing header">{{promise.title}}
    </h2>
    <div class="ui dividing medium header">
      공약 목적
       <a @click="onPurposeQuestionClick" class="q"><i class="comment outline icon"></i> {{purposeCount}}</a>
    </div>
    <ul>
      <li v-for="pps in promise.purpose" :key="pps">{{pps}}
        <!-- <a><i class="question icon"></i></a> -->
      </li>
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
      <a @click="onPlanQuestionClick" class="q"><i class="comment outline icon"></i> {{planCount}} </a>
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
    <div class="ui dividing medium header">이행 현황
      <a @click="onProgressQuestionClick" class="q"><i class="comment outline icon"></i> {{progressCount}} </a>
    </div>
    <div class="ui modal" :id="'progressQuestion' + city + district + key">
      <i class="close icon"></i>
      <div class="ui header">공약 이행 현황 질문하기</div>
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>공약의 이행 현황에 대해 궁금하신 점을 남겨주세요.</label>
            <textarea rows="3" placeholder="공약 이행 현황을 자세히 밝혀주세요." v-model="progressQuestion"></textarea>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui positive right button" @click="onProgressQuestionLeft">
          질문 남기기
        </div>
      </div>
    </div>
    다음은 공약 관련 사업과 2016년 예산 목록입니다.
    <div class="ui feed">
      <div v-if="key == 14 || key == 10 || key == 258">
        <table class="ui celled table">
          <thead>
            <tr>
              <th><a @click="showAllExpenses">관련 사업</a></th>
              <th>예산 편성액</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="business in businesses" :key="business.budget">
              <td><a @click="updateExpenses(business.business)">{{business.business}}</a></td>
              <td>{{business.budget}}</td>
            </tr>
            <!-- <tr class="positive">
              <td><a @click="getExpense('시민안전파수꾼')">시민안전파수꾼 양성</a></td>
              <td>₩283,560,000</td>
            </tr>
            <tr>
              <td><a @click="getExpense('재난관리시스템')"> 통합 재난관리시스템 유지관리</a></td>
              <td>₩126,949,000</td>
            </tr>
            <tr class="negative">
              <td><a @click="getExpense('소방 안전지도')">소방 안전지도 고도화</a></td>
              <td>₩965,637,000</td>
            </tr> -->
          </tbody>
        </table>
        다음은 공약과 관련된 2016년의 최신순 예산 지출 항목 내역입니다. 윗 표의 사업 이름을 클릭하시면, 각 사업 별로 최근 예산 지출 내역을 보실 수 있습니다.
        <!-- <button @click="expenseDetail = !expenseDetail" class="ui blue button">지출정보 자세히 보기</button> -->
        <table class="ui celled table">
          <thead>
            <tr>
              <th>관련 사업</th>
              <th>부문명</th>
              <th>분야명</th>
              <th>목세목명</th>
              <th>예산 지출액</th>
              <th>예산 지출일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expense in expenses" :key="expense.BIZ_CD + '' + expense.PAY_YMD">
              <td>{{expense.BIZ_NM}}</td>
              <td>{{expense.SECT_NM}}</td>
              <td>{{expense.FLD_NM}}</td>
              <td>{{expense.TE_MNG_MOK_NM}}</td>
              <td>{{formatNumber(expense.PAY_AMT)}}</td>
              <td>{{expense.PAY_YMD}}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
          </div>
          <div class="extra text">
            <span v-if="typeof progress.references != 'undefined' && progress.references"> 참고 자료: </span> <a v-if="progress.references" :href="progress.references.link" target="_blank" v-html="progress.references.title"></a>
          </div>
          <div class="extra text">
            {{progress.approval}}명이 관련있는 자료라고 생각합니다.
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="ui dividing medium header">공약 호감도</div>
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
    </div> -->
    <div class="ui dividing medium header">시민 의견</div>
    <div class="ui buttons">
      <button class="ui button" :class="commentCategory === '' ? 'blue' : ''" @click="commentCategory = ''">전체</button>
      <button class="ui button" :class="commentCategory === 'purpose' ? 'blue' : ''" @click="commentCategory = 'purpose'">목적</button>
      <button class="ui button" :class="commentCategory === 'plan' ? 'blue' : ''" @click="commentCategory = 'plan'">계획</button>
      <button class="ui button" :class="commentCategory === 'progress' ? 'blue' : ''" @click="commentCategory = 'progress'">현황</button>
    </div>
    <div class="ui basic segment">
      <div class="ui comments">
        <div class="comment" v-for="comment in comments" :key="comment.key">
          <div class="content">
            <span class="author">{{comment.author}}</span>
            <div class="metadata"><span class="date">{{convertDate(comment.date)}}</span></div>
            <div class="text">{{comment.text}}</div>
            <div v-if="replies && isReplyVisible[comment.key]" class="comments">
              <div class="comment" v-for="reply in replies" :key="reply.key">
                <div class="content">
                  <span class="author">{{reply.author}}</span>
                  <div class="metadata"><span class="date">{{reply.date}}</span></div>
                  <div class="text">{{reply.text}}</div>
                </div>
              </div>
              <form class="ui reply form">
                <div class="field">
                  <textarea rows="2" v-model="replyText"></textarea>
                </div>
                <button class="ui blue submit button" @click="addReply(comment.key)"></button>
              </form>
            </div>
              <div class="actions">
              <!-- <a class="reply" @click="setReplyFormVisible(comment.key)" v-if="replyFormVisible[comment.key]">답글 쓰기</a> -->
              <a class="reply" @click="setReplyVisible(comment.key)">{{isReplyVisible[comment.key] ? '답글 접기' : '답글 보기'}}</a>
            </div>  
          </div>
        </div>
        <form class="ui reply form">
          <label class="ui tiny header">
            공약에 대한 의견이나 궁금하신 점을 자유롭게 남겨주세요. 남겨주신 의견은 1주일 단위로 관련인에게 전달됩니다.
          </label>
          <br>
          <br>
          <div class="field">
            <textarea v-model="commentText" rows="2"></textarea>
          </div>
        </form>
        <br>
        <button class="ui blue submit button" @click="addComment">댓글 달기</button>
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
      purposeCount: function () {
        return this.comments.reduce(function(prev, cur){
          return (cur.type === 'purpose') ? prev + 1 : prev
        }, 0)
      },
      planCount: function () {
        return this.comments.reduce(function(prev, cur){
          return (cur.type === 'plan') ? prev + 1 : prev
        }, 0)
      },
      progressCount: function () {
        return this.comments.reduce(function(prev, cur){
          return (cur.type === 'progress') ? prev + 1 : prev
        }, 0)
      },
      city: function () {return this.$route.params.city},
      district: function () { return this.$route.params.district},
      key: function () { return this.$route.params.key },
      comments: function () {
        if(this.commentCategory === '')
          return this.promise.comments
        else
          return this.promise.comments.filter(function(c){
            return c.type === this.commentCategory
          }.bind(this))
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
        }).slice(0, 3)
      },
      businesses: function () {
        if(this.key == 14){
          return this.totalBusinesses[0]
        } else if (this.key == 10) {
          return this.totalBusinesses[1]
        } else if (this.key == 258) {
          return this.totalBusinesses[2]
        } else {
          return []
        }
      }
    },
    data: function () {
      return {
        promise: {},
        score: 0,
        commentText: '',
        replyText: '',
        newsURL: 'http://34.208.245.104:3000/article',
        docuURL: 'http://34.208.245.104:3000/seoul',
        promiseURL: 'http://34.208.245.104:3000/promise',
        liked: false,
        isProgressModalVisible: false,
        purposeQuestion: '',
        planQuestion: '',
        progressQuestion: '',
        replies: [],
        isReplyVisible: [],
        commentCategory: '',
        expenses: [],
        totalExpenses: [],
        totalBusinesses: [
          [
            {
              business: 'G밸리 근로자 복합공간 조성',
              budget: '₩4,321,765,000'
            },
            {
              business: 'G밸리(서울디지털산업단지) 이미지개선 및 브랜딩 추진',
              budget: '₩350,000,000'
            },
            {
              business: 'G밸리(서울디지털산업단지) 활성화 추진',
              budget: '₩1,439,000,000'
            }
          ],
          [
            // {
            //   business: '강남역 일대 침수방지(배수구역경계조정)',
            //   budget: '₩4,000,000,000'
            // },
            {
              business: '마장동 우시장 주변 침수해소',
              budget: '₩2,700,000,000'
            },
            {
              business: '북가좌2동 저지대 침수해소',
              budget: '₩1,300,000,000'
            },
            {
              business: '암사역 주변 침수해소',
              budget: '₩9,498,526,080'
            },
            {
              business: '행당동 138~158번지 일대 침수방지',
              budget: '₩3,400,000,000'
            },
            {
              business: '강남역 일대 침수방지',
              budget: '₩9,135,473,000'
            },
            {
              business: '상도동 성대시장주변 침수해소',
              budget: '₩192,667,730'
            },
            {
              business: '우이천(노원) 침수취약지점 등 개선',
              budget: '₩50,000,000'
            }
          ],
          [
            {
              business: '황금시간 목표제 실행',
              budget: '₩1,570,000,000'
            },
            {
              business: '시민안전파수꾼 양성',
              budget: '₩283,560,000'
            },
            {
              business: '통합 재난관리시스템 유지관리',
              budget: '₩126,949,000'
            },
            {
              business: '소방안전지도 고도화',
              budget: '₩965,637,000'
            },
            {
              business: '긴급구조통제단 운영',
              budget: '₩406,240,000'
            },
            {
              business: '시민안전교육 강화',
              budget: '₩783,325,000'
            }
          ]
        ],
        expenseDetail: false
      }
    },
    mounted: function () {
      let url = this.promiseURL + '/' + this.city + '/' + this.district + '/' + this.key
      this.$http.get(url).then(function (response) {
          this.promise = response.body
          console.log(response.body)
          this.isProgressModalVisible = true
          this.isReplyVisible = this.comments.map(function(c){ return false })
        }.bind(this))

      if(this.key == 14 || this.key == 10 || this.key == 258) {
        console.log(this.businesses)
        let asdf = this.businesses.forEach((obj) => {
          const query = encodeURIComponent(obj.business.split(' ')[0])
          console.log(query)
          console.log(obj)
          this.$http.get('http://openapi.seoul.go.kr:8088/515855484c6b687731313966526a5a73/json/ListExpenditureInfo/1/999/2016/' + query).then(res => {
            console.log(res.body)
            if(res.body.ListExpenditureInfo) {
              this.totalExpenses = this.totalExpenses.concat(res.body.ListExpenditureInfo.row)
              this.totalExpenses.sort(function(a, b){
                return a.PAY_YMD < b.PAY_YMD
              })
              this.showAllExpenses()
            }
          })
        }, this)
      }
      //['시민안전파수꾼', '재난관리시스템', '소방안전지도']
      // setInterval(function () {
      //   console.log('polling...')
      //   this.$http.get(url).then(function (response) {
      //     this.promise = response.body
      //     while(this.isReplyVisible.length < this.comments.length){
      //       this.isReplyVisible.push(false)
      //     }
      //     console.log(response.body)
      //   }.bind(this), function (response) {
      //   }.bind(this))
      // }.bind(this), 10000)

    },
    methods: {
      getExpense: function (query) {
        this.$http.get('http://openapi.seoul.go.kr:8088/515855484c6b687731313966526a5a73/json/ListExpenditureInfo/1/999/2017/' + encodeURIComponent(query)).then(res => {
          console.log(res.body.ListExpenditureInfo.row)
          this.expenses.concat(res.body.ListExpenditureInfo.row) 
        })
      },
      showAllExpenses: function () {
        this.expenses = this.totalExpenses.slice(0, 10)
      },
      updateExpenses: function (business) {
        this.expenses = this.totalExpenses.filter(function (expense){
          return expense.BIZ_NM === business
        }).slice(0, 10)
      },
      formatNumber: function (num) {
        const nf = new Intl.NumberFormat(["ko-KR"], {
          style: 'currency',
          currency: 'KRW',
          currencyDisplay: 'symbol'
        })
        return nf.format(num)
      },
      addComment: function () {
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
      addReply: function (key) {
        const reply = {
          "author": this.$store.state.userName,
          "date": new Date(),
          "text": this.replyText,
        }
        this.replyText = ''
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
      setReplyVisible: function(key){
        const curVal = this.isReplyVisible[key]
        this.isReplyVisible.splice(key, 1, !curVal)
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
      onProgressQuestionClick: function () {
        $('#progressQuestion' + this.city + this.district + this.key).modal('show')
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
      onProgressQuestionLeft: function () {
        const comment =  {
          "author": this.$store.state.userName,
          "date": new Date(),
          "text": this.progressQuestion,
          "type": 'plan'
        }
        if(this.planQuestion.length == 0){
          comment.text = '공약 이행 현황을 자세히 밝혀주세요.'
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
.q {
  float: right;
  cursor: pointer;
}

a {
  cursor: pointer;
}

</style>
