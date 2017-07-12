<template>
  <div>
    <h1 class="ui dividing header">공직자 찾기</h1>
    <div class="ui fluid buttons">
      <button class="ui button" :class="isCong ? 'blue' : ''" @click="isCong = !isCong">국회의원</button>
      <button class="ui button" :class="isMayor ? 'blue' : ''" @click="isMayor = !isMayor">시장/도지사</button>
      <button class="ui button" :class="isPresident ? 'blue' : ''" @click="isPresident = !isPresident">대통령</button>
    </div>

    <select class="ui fluid search selection dropdown" :value="city" @change="onCityChanged($event.target.value)">
      <option value="seoul">서울특별시</option>
      <option value="daejeon">대전광역시</option>
      <option value="busan">부산광역시</option>
      <option value="daegu">대구광역시</option>
      <option value="gwangju">광주광역시</option>
      <option value="ulsan">울산광역시</option>
      <option value="gyeonggi">경기도</option>
      <option value="jeju">제주특별자치도</option>
    </select>

    <select class="ui fluid search selection dropdown" :value="district" @change="onDistrictChanged($event.target.value)">
      <option v-for="(district, idx) in districts" :value="idx" :key="district">{{district}}</option>
    </select>

    <repr-item v-for="repr in filteredReprs" :key="repr.name" :repr="repr"></repr-item>
  </div>
</template>

<script>
import reprItem from './ReprItem.vue'
export default {
  name: 'findReprs',
  components: {
    reprItem
  },
  mounted: function () {
    $('.ui.dropdown').dropdown()
  },
  computed: {
    reprs: function () {
      return this.$store.state.reprs
    },
    districts: function () {
      return this.$store.state.districts[this.city]
    },
    filteredReprs: function () {
      return this.$store.state.reprs.filter(function(repr) {
        if(!this.isCong && repr.type === 'congressPerson'){
          return false
        }
        if(!this.isMayor && repr.type === 'mayor'){
          return false
        }
        if(!this.isPresident && repr.type === 'president'){
          return false
        }
        if(this.city !== '' && (repr.city !== this.city && repr.city !== 'korea')){
          return false
        }
        if(this.district !== -1 && repr.district != this.district){
          return false
        }
        return true
      }.bind(this))
    }
  },
  data: function () {
    return {
      isCong: false,
      isMayor: false, 
      isPresident: false,
      city: '',
      district: -1
    }
  },
  methods: {
    onCityChanged: function (city){
      this.city = city
    },
    onDistrictChanged: function(district){
      this.district = district
    }
  }
}
</script>
<style>

</style>
