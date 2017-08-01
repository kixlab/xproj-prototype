<template>
  <div class="ui long modal" :id="'addProgressModal' + city + district + promiseKey">
    <div class="ui active dimmer" v-if="articles === 'notyet'">
      <div class="ui loader"></div>
    </div>
    <i class="close icon"></i>
    <div class="ui header">이행 현황 추가</div>
    <div class="content">
      <div class="ui top attached tabular four item menu">
        <a class="item" :class="registerArticle == 0 ? 'active' : ''" @click="registerArticle = 0">기사 추가</a>
        <a class="item" :class="registerArticle == 1 ? 'active' : ''" @click="registerArticle = 1">서울시 공문서 추가</a>
        <a class="item" :class="registerArticle == 2 ? 'active' : ''" @click="registerArticle = 2">기타 자료 확인하기</a>
        <a class="item" :class="registerArticle == 3 ? 'active': ''" @click="registerArticle = 3">기타 자료 올리기</a>
      </div>
      <div v-if="registerArticle == 0" class="ui bottom attached segment">
        공약과 연관있는 기사를 골라주세요.
        <div v-if="articles.length == 0">검색 결과가 없습니다.</div>
        <div class="ui feed">
          <div class="event" v-for="article in articles" :key="article.title">
            <div class="label">
              <i :class="article.checked ? 'checkmark box icon' : 'square icon'" @click="addProgress(article)"></i>
            </div>
            <div class="content">
              <div class="summary">
                <a :href="article.link" target="_blank" v-html="article.title"></a>
                <div class="date">
                  {{article.pubDate}}
                </div>
              </div>
              <div class="extra text">
                <p v-html="article.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="registerArticle == 1" class="ui bottom attached segment">
        공약과 연관있는 서울시 문서를 골라주세요.
        <div class="ui feed" v-if="documents.length != 0">
          <div class="event" v-for="document in documents" :key="document.title">
            <div class="label">
              <i :class="document.checked ? 'checkmark box icon' : 'square icon'" @click="addProgress(document)"></i>
            </div>
            <div class="content">
              <div class="summary">
                <a :href="document.url" target="_blank">{{document.title}}</a>
                <div class="date">
                  {{document.regdate}}
                </div>
              </div>
              <!-- <div class="extra text">
                <p>{{document.kwrd}}</p>
              </div> -->
            </div>
          </div>
        </div>
        <div v-else>검색 결과가 없습니다.</div>
      </div>   
      <div v-else-if="registerArticle == 2" class="ui bottom attached segment">
        공약과 연관있는 자료를 골라주세요.
        <div v-if="otherRefs.length == 0">검색 결과가 없습니다.</div>
        <div class="ui feed">
          <div class="event" v-for="(otherRef, idx) in otherRefs" :key="otherRef.title">
            <div class="label">
              <i :class="otherRefsChecked[idx] ? 'checkmark box icon' : 'square icon'" @click="addOtherRefProgress(otherRef, idx)"></i>
            </div>
            <div class="content">
              <div class="summary">
                <a :href="otherRef.references.link" target="_blank" v-html="otherRef.title"></a>
                <div class="date">
                  {{otherRef.date}}
                </div>
              </div>
              <div class="extra text">
                <p v-html="otherRef.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="registerArticle == 3" class="ui bottom attached segment">
        <form class="ui form">
          <div class="field">
            <label>제목</label>
            <input type="text" v-model="otherRef.title" placeholder="자료의 제목을 적어주세요."></input>
          </div>
          <div class="field">
            <label>설명</label>
            <textarea rows="3" v-model="otherRef.content" placeholder="자료에 관한 간단한 설명을 적어주세요."></textarea>
          </div>
          <div class="field">
            <label>출처 설명</label>
            <input type="text" v-model="otherRef.reference.title" placeholder="출처에 관한 간단한 설명을 적어주세요."></input>
            <label>출처 링크</label>
            <input type="text" v-model="otherRef.reference.link" placeholder="출처를 가리키는 URL을 적어주세요."></input>
          </div>
        </form>
      </div>
    </div>
    <div class="actions">
      <div class="ui positive right button" @click="addProgress(0)">
        저장
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addProgress',
  props: ['city', 'district', 'promiseKey', 'reprName', 'promiseTitle', 'otherRefs'],
  mounted: function () {
    $('.modal').modal({ observeChanges: true, detachable: false })
    let url = this.newsURL + '/' + this.reprName + ' ' + this.promiseTitle
    console.log(url)
    this.$http.get(url).then(function (response) {
      console.log(url)
      let items = JSON.parse(response.body).items
      this.articles = items.map(function (a) {
        a.checked = false
        return a
      })
      console.log(this.articles)
      // console.log(response.body)
    }.bind(this), function (response) {
      this.article = [{ title: 'Error' }]
    }.bind(this))
    this.$http.get(this.docuURL + '/' + this.keyword).then(function (response) {
      console.log(response.body)
      let items = response.body.item
      if (items) {
        this.documents = items.map(function (a) {
          a.checked = false
          return a
        })
      }
    }.bind(this), function (response) {
      this.documents = [{ title: 'Error' }]
    }.bind(this))
  },
  computed: {
    promiseURL: () => {return 'http://34.208.245.104:3000/promise'},
    newsURL: () => { return 'http://34.208.245.104:3000/article'},
    docuURL: () => { return 'http://34.208.245.104:3000/seoul'},
    keyword: function () {
      let kwds = this.promiseTitle.split(' ')
      return kwds[0] + ' ' + kwds[1]
    }
  },
  data: function () {
    return {
      registerArticle: 0,
      articles: 'notyet',
      documents: [],
      otherRef: {
        type: 'otherRef',
        title: '',
        content:'',
        date: Date.now(),
        reference: {
          title: '',
          link: ''
        }
      },
      otherRefsChecked: this.otherRefs.map(function(a){
        return false
      })
    }
  },
  watch: {
    otherRefs: function(val, oldVal){
      if(val.length > oldVal.length){
        for(let i = 0; i< val.length - oldVal.length; i++){
          this.otherRefsChecked.push(false)
        }
      }
    }
  },
  methods: {
    addOtherRefProgress(otherRef, idx){
      this.otherRefsChecked[idx] = !this.otherRefsChecked[idx]
      this.addProgress(otherRef)
    },
    addProgress: function (p) {
      let progress = {}
      console.log(p)
      if(p === 0 && this.registerArticle !== 3){
        console.log(p)
        return
      }
      p.checked = !p.checked
      if (this.registerArticle === 0){
        progress.title = p.title
        progress.type = 'article'
        progress.content = p.description
        progress.date = new Date(p.pubDate).toString()
        progress.reference = {title: p.title, link: p.link}
      } else if (this.registerArticle === 1) {
        progress.title = p.title
        progress.type = 'document'
        progress.content = ''
        progress.date = new Date(p.regDate).toString()
        progress.reference = {title: p.title, link: p.url}
      } else if (this.registerArticle === 2) {
        progress = p
      } else if (this.registerArticle === 3) {
        progress = this.otherRef
      }
      let url = this.promiseURL + '/' + this.city + '/' + this.district + '/' + this.promiseKey + '/progress'
      this.$http.put(url, {approval: p.checked, progress: progress}).then(function () {
        console.log('progress uled')
        this.otherRef = {
          type: 'otherRef',
          title: '',
          content:'',
          date: Date.now(),
          reference: {
            title: '',
            link: ''
          }
        }
      }.bind(this))
    }
  }
}
</script>

<style>

</style>

