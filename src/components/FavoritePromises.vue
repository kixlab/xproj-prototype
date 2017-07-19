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
    favoritePromises: function () {
      return this.$store.getters.favoritePromises
    },
    favPromises: function () {
      return this.$store.state.favPromises
    }
  }
}
</script>

<style>

</style>
