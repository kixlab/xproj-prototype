<template>
  <div>
    <h1 class="ui dividing header">내가 좋아할만한 공약</h1>
    <div class="ui cards">
      <promise-item v-for="p in filteredPromiseList" :key="p.promise.title" :city="p.city" :district="p.district" :promise="p.promise" :isFav="true"></promise-item>
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
  computed: {
    presidentPromises: function (){
      return this.$store.getters.presidentPromises
    },
    congressPersonPromises: function () {
      return this.$store.getters.congressPersonPromises
    },
    mayorPromises: function () {
      return this.$store.getters.mayorPromises
    },
    interests: function () {
      return this.$store.state.interests
    },
    filteredPromiseList: function () {
      let interests = this.interests
      let generatePromiseList = function (pl) {
        return pl.promises.filter(function(p) {
          return interests.includes(p.category) 
        }).map(function (p) {
          return {
            city: pl.city,
            district: pl.district,
            promise: p
          }
        })
      }
      let promiseList = generatePromiseList(this.congressPersonPromises).concat(generatePromiseList(this.mayorPromises), generatePromiseList(this.presidentPromises))
      return promiseList
      //  generatePromiseList(this.presidentPromises) +
    }
  }
}
</script>

<style>

</style>

