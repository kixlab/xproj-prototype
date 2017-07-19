<template>
  <div>
    <h1 class="ui dividing header">내가 좋아한 공약</h1>
    <div class="ui cards">
      <promise-item v-for="fav in favoritePromises" :key="fav.promise.title" :city="fav.city" :district="fav.district" :promise="fav.promise" :isFav="true"></promise-item>
    </div>
  </div>
</template>

<script>
import promiseItem from './PromiseItem'
export default {
  name: 'favoritePromises',
  components: {
    promiseItem
  },
  computed: {
    // favoritePromises: function () {
    //   return this.$store.getters.favoritePromises
    // },
    favPromises: function () {
      return this.$store.state.favPromises
    },
    promiseURL: function () {
      return 'http://34.208.245.104:3000/promise'
    }
  },
  data: function () {
    return {
      favoritePromises: []
    }
  },
  mounted: function () {
    this.favPromises.forEach(function (fp) {
      let url = this.promiseURL + '/' + fp.city + '/' + fp.district + '/' + fp.key
      let promise = {}
      return this.$http.get(url).then(function(response) {
        promise = response.body
        this.favoritePromises.push({
          city: fp.city,
          district: fp.district,
          promise: promise
        })
      }.bind(this))
    }.bind(this))
  }
}
</script>

<style>

</style>
