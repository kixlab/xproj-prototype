<template>
  <div>
    <h1 class="ui dividing header">{{promise.title}}</h1>
    <div class="ui dividing medium header">공약 목적</div>
    {{promise.purpose}}
    <div class="ui dividing medium header">이행 계획</div>
    {{promise.plan}}
    <div class="ui comments">
      <div class="ui dividing medium header">시민 의견</div>
      <div class="comment" v-for="comment in comments" :key="comment.key">
        <span class="author">{{comment.author}}</span>
        <div class="metadata"><span class="date">{{comment.date}}</span></div>
        <div class="text">{{comment.text}}</div>
      </div>
      <form class="ui reply form">
        <div class="field">
          <textarea v-model="commentText" rows="2"></textarea>
        </div>
        <button class="ui blue submit button" @submit.prevent="addReply">댓글 달기</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'promiseDetail', 
    // props: ['promise']
    data: function () {
      return {
        promise:  {
          title: '쉐어하우스형 임대주택 공급',
          purpose: '주택 공급난 해소',
          plan: '2020년까지 1500호 공급',
          popularGroup: ['20대', '30대'],
          category: '교통/건설'
        },
        comments:[
          {
            author: '유지애',
            date:  new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
            text: '우와! 참 좋은 공약이에요'
          },
          {
            author: '이수정',
            date: new Date(2017, 6, 2, 15, 37, 12).toLocaleString('ko-KR'),
            text: '예산이 얼마나 들 지 걱정되네요'
          }
        ],
        commentText: ''
      }
    },
    methods: {
      addReply: function () {
        this.comments.push({
          author: '나',
          date: new Date(Date.now()).toLocaleString('ko-KR'),
          text: this.commentText
        })
        this.commentText = ''
      }
    }
  }
</script>

<style scoped>
</style>