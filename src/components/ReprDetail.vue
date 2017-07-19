<template>
  <div>
    <h1 class="ui dividing header">{{repr.job}} 정보 자세히 보기</h1>
    <repr-item :repr="repr"></repr-item>
    <promise-list id="promiseList" :promises="promises" :repr="repr"></promise-list>
  </div>
</template>

<script>
import reprItem from './ReprItem.vue'
import promiseList from './PromiseList.vue'

export default {
  name: 'reprDeatil',
  components: {
    reprItem,
    promiseList
  },
  computed: {
    repr: function () {
      return this.$store.state.reprs.find(function (repr) {
        if (repr.city === this.$route.params.city && repr.district == this.$route.params.district) {
          return repr
        }
      }.bind(this))
    },
    // promises: function () {
    //   return this.$store.state.promises.find(function (p) {
    //     if (p.city === this.$route.params.city && p.district == this.$route.params.district) {
    //       return p
    //     }
    //   }.bind(this))
    // },
    route: function () {
      return this.$route.params.city + ' ' + this.$route.params.district
    }
  },
  data: function () {
    return {
      promises: { promises: [] },
      promiseURL: 'http://34.208.245.104:3000/promise'
    }
  },
  mounted: function () {
    let url = this.promiseURL + '/' + this.repr.city + '/' + this.repr.district
    this.$http.get(url).then(function(response) {
      this.promises = response.body
      console.log(response.body)
    }.bind(this), function(response) {
    }.bind(this))
  }
}
</script>

<style scoped>
#promiseList {
  margin-top: 1em;
}
</style>