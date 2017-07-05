<template>
  <div>
    <repr-item :repr="repr"></repr-item>
    <promise-list :promises="promises" :type="$route.params.type" :name="repr.name" :job="repr.job"></promise-list>
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
      if(this.$route.params.type === 'president'){
        return this.$store.state.president
      } else if (this.$route.params.type === 'congressPerson') {
        return this.$store.state.congressPeople.find(function(cp){
          if(cp.name === this.$route.params.name){
            return cp
          }
        }.bind(this))
      } else if (this.$route.params.type === 'mayor') {
        return this.$store.state.mayors.find(function(mayor){
          if(mayor.name === this.$route.params.name){
            return mayor
          }
        }.bind(this))
      }
    },
    promises: function () {
      if(this.$route.params.type === 'president'){
        return {promises: this.$store.state.presidentPromises}
      } else if (this.$route.params.type === 'congressPerson') {
        return this.$store.state.congressPromises.find(function(cp){
          if(cp.city === this.repr.city && cp.district == this.repr.district){
            return cp
          }
        }.bind(this))
      } else if (this.$route.params.type === 'mayor') {
        return this.$store.state.mayorsPromises.find(function(mp){
          if(mp.city === this.repr.city){
            return mp
          }
        }.bind(this))
      }
    }
  },
  data: function () {
    return {
      reprs: [{
        name: '조승래',
        district: '국회의원 (대전 유성구 갑)',
        title: '국회의원',
        img: '/static/logo.png',
        promise: '유성온천의 브랜드 가치 제고 및 주변 상권 활성화를 위한 계룡스파텔 재개발'
      }]
    }
  }
}
</script>

<style scoped>

</style>