<template>
  <div>
    <h1 class="ui header">Flipped Tagger</h1>
    <p>공약과 연관있는 기사를 선택해주세요.</p>
    <div class="ui container">
    <h3 class="ui header"><a :href="article.link" v-html="article.title"></a></h3>
    <div class="ui attached segment">
      <p v-html="article.description"></p>
    </div>
    <div class="ui two bottom attached buttons" :class="i%2 == 0? 'basic': ''" v-for="i in 3" :key="i">
      <div class="ui button" @click="curIdx +=1">{{promiseTitles[i-1]}}</div>
      <div class="ui button" @click="showDetail(i-1)">더 알아보기</div>
    </div>
    <div class="ui bottom attached basic button" @click="curIdx += 1">해당 사항 없음</div>
    <div class="ui modal">
      <div class="header">{{promise.title}}</div>
      <div class="content">
        <h5 class="ui tiny header">공약 목적</h5>
        <ul>
          <li v-for="pps in promise.purpose" :key="pps">{{pps}}</li>
        </ul>
        <h5 class="ui tiny header">이행 계획</h5>
        <ul>
          <li v-for="pln in promise.plan" :key="pln">{{pln}}</li>
        </ul>
      </div>
      <div class="actions">
        <div class="ui approve button">닫기</div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
  export default{
    name: 'flippedTagger',
    data: function () {
      return {
        articles: [{
          title: '',
          description: '',
          link: '',
        }],
        curIdx: 0,
        // newsURL: 'http://34.208.245.104:3000/article/',
        promiseURL: 'http://34.208.245.104:3000/promise/seoul/0',
        promiseTitles: [],
        promises: [],
        promise: {
          title: '',
          purpose: [],
          plan: []
        }
      }
    },
    methods: {
      showDetail: function(i){
        this.promise = this.promises[i]
        $('.ui.modal').modal('show')
      }
    },
    computed: {
      article: function() {
        return this.articles[this.curIdx]
      },
      newsURL: function () {
        return 'http://34.208.245.104:3000/article/' +  this.$route.params.keyword
      }
    },
    mounted: function () {
      this.$http.get(this.newsURL).then(function(res){
        this.articles = JSON.parse(res.body).items
      }.bind(this))
      this.$http.get(this.promiseURL).then(function(res){
        console.log(res.body)
        this.promises = res.body.promises
        this.promiseTitles = res.body.promises.slice(0, 3).map(function(a){ return a.title})
      }.bind(this))
    }
  }
</script>
<style scoped>
p{
  text-align: left;
  padding-left: 1em;
}
.promiseButtons {
  display: block;
}
</style>
