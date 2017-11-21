<template>
  <div>
    <h1 class="ui dividing header">내가 좋아할만한 공약</h1>
    <p>입력하셨던 관심 분야에 따라 추천된 공약입니다</p>
    <div class="ui container cardsss" id="cardsss">
      <!-- <div class="ui cards"> -->
      <promise-item v-for="p in filteredPromiseList" :key="p.promise.title" :city="p.city" :district="p.district" :promise="p.promise" :isFav="true"></promise-item>
      <!-- </div> -->
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
      mayorPromises: {promises: []}
    }
  },
  mounted: function () {
    let url = ''
    // let url = this.promiseURL + '/korea/0'
    // this.$http.get(url).then(function(response) {
    //   this.presidentPromises = response.body
    // }.bind(this))

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
      let generatePromiseList = function (pl) {
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
      let promiseList = generatePromiseList(this.congressPersonPromises).concat(generatePromiseList(this.mayorPromises))
      return promiseList
      //  generatePromiseList(this.presidentPromises) +
    }
  }
}
</script>

<style scoped>
.cardsss {
  /* display: inline-block; */
  overflow: auto; 
  white-space: nowrap; 
}

.ui .card {
  display: inline-block;
  margin: 1em; 
  overflow:initial;
  white-space:initial; 

}
</style>

