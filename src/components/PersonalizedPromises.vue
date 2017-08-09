<template>
  <div>
    <h1 class="ui dividing header">내가 추천 받은 공약</h1>
    <p>입력하셨던 관심 분야에 따라 추천된 공약입니다</p>
    <div class="ui top attached tabular menu">
      <!--<a class="item" v-for="category in categories" :key="category">{{category}}</a>-->
      <div class="ui dropdown item">
        {{displayedCurCategory}}
        <i class="ui dropdown icon"></i>
        <div class="ui menu">
          <a class="item" @click="curCategory = ''">모두 보기</a>
          <a class="item" v-for="category in categories" :key="category" @click="curCategory = category">{{category}}</a>
        </div>
      </div>
      <div class="ui dropdown item">
        {{displayedCurTarget}}
        <i class="ui dropdown icon"></i>
        <div class="ui menu">
          <a class="item" @click="curTarget = ''">모두 보기</a>
          <a class="item" v-for="target in targets" :key="target" @click="curTarget= target">{{target}}</a>
        </div>
      </div>
    </div>
    <div class="ui bottom attached segment">
      <div class="ui centered cards">
        <promise-item v-for="p in filteredPromiseList" :key="p.promise.title" :city="p.city" :district="p.district" :promise="p.promise" :isFav="true"></promise-item>
      </div>
    </div>
  </div>
</template>

<script>
import promiseItem from './PromiseItem.vue'
export default {
  name: 'personalizedPromise',
  components: {
    promiseItem
  },
  data: function () {
    return {
      presidentPromises: {promises: []},
      congressPersonPromises: {promises: []},
      mayorPromises: {promises: []},
      curCategory: '공약 분류',
      curTarget: '수혜 대상'
    }
  },
  mounted: function () {
    // let url = ''
    $('.dropdown').dropdown()
    let url = this.promiseURL + '/korea/0'
    this.$http.get(url).then(function(response) {
      this.presidentPromises = response.body
    }.bind(this))

    url = this.promiseURL + '/' + this.congressPerson.city + '/' + this.congressPerson.district
    this.$http.get(url).then(function(response) {
      this.congressPersonPromises = response.body
    }.bind(this))
    
    url = this.promiseURL + '/' + this.mayor.city + '/' + this.mayor.district
    this.$http.get(url).then(function(response) {
      this.mayorPromises = response.body
    }.bind(this))
  },
  computed: {
    promiseURL: function () {
      return 'http://34.208.245.104:3000/promise'
    },
    congressPerson: function () {
      return this.$store.getters.congressPerson
    },
    mayor: function () {
      return this.$store.getters.mayor
    },
    interests: function () {
      return this.$store.state.interests
    },
    filteredPromiseList: function () {
      let interests = this.interests
      const generatePromiseList = function (pl) {
        return pl.promises.filter(function(p) {
          return p.category.reduce(function(pv, c){ return pv || interests.includes(c) }, false)
        }).map(function (p) {
          return {
            city: pl.city,
            district: pl.district,
            promise: p
          }
        })
      }
      
      const filterPromiseList = (pl) => {
        let promises = []
        if(this.curCategory.length === 0 || this.curCategory === '공약 분류'){
          promises = pl
        } else {
          promises = pl.filter((p) => {
            return p.promise.category.includes(this.curCategory)
          })
        }
        if(this.curTarget.length === 0 || this.curTarget === '수혜 대상'){
          return promises
        } else {
          return promises.filter((p) => {
            return p.promise.target.includes(this.curTarget)
          })
        }
      }
      let promiseList = generatePromiseList(this.congressPersonPromises).concat(generatePromiseList(this.mayorPromises))
      return filterPromiseList(promiseList)
      //  generatePromiseList(this.presidentPromises) +
    },
    displayedCurCategory: function () {
      if(this.curCategory.length !== 0){
        return this.curCategory
      } else {
        return '모두 보기'
      }
    },
    displayedCurTarget: function () {
      if(this.curTarget.length !== 0){
        return this.curTarget
      } else {
        return '모두 보기'
      }
    },
    categories: function () {return this.$store.state.categories},
    targets: function () {return this.$store.state.targets}
  }
}
</script>

<style>
.ui .cards {
  align-content: center;
}
</style>

