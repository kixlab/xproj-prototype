<template>
  <div class="ui grid">
    <div class="ui six wide column">
      <router-link :to="{name: 'reprDetail', params: {city: repr.city, district: repr.district}}">
        <img :src="repr.img" class="profilePic" />
      </router-link>
    </div>
    <div class="ui ten wide column">
      <div class="description">
        <div class="name">
          <router-link v-if="!isReprDetail" :to="{name: 'reprDetail', params: {city: repr.city, district: repr.district}}">{{repr.name}}</router-link>
          <span v-else>{{repr.name}}</span>
        </div>
        <div class="district">
          <router-link v-if="!isReprDetail" :to="{name: 'reprDetail', params: {city: repr.city, district: repr.district}}">{{repr.title}}</router-link>
          <span v-else>{{repr.title}}</span>
        </div>
        <!-- <div class="updateDate">
          마지막 갱신일: 17/05/31
        </div> -->
        <table class="ui small single line unstackable striped very compact table">
          <thead>
            <tr>
              <th></th>
              <th>지지도</th>
              <th>공약 호감도</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>내 점수</td>
              <td>{{repr.ratings.person.my}}</td>
              <td>{{repr.ratings.promise.my}}</td>
            </tr>
            <tr>
              <td>지역구</td>
              <td>{{repr.ratings.person.city}}</td>              
              <td>{{repr.ratings.promise.city}}</td>
            </tr>
            <tr>
              <td>전 국민</td>
              <td>{{repr.ratings.person.nation}}</td>
              <td>{{repr.ratings.promise.nation}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reprItem',
  props: ['repr'],
  methods: {
    showDetails: function () {
      this.$router.push({ name: 'reprDetail', params: {city: repr.city, district: repr.district} })
    }
  },
  computed: {
    isReprDetail: function () {
      return (this.$route.name === 'reprDetail')
    }
  }
}
</script>

<style scoped>
.profilePic {
  width: 100%;
  display: inline-block;
  margin-top: 3em;
}

.description {
  display: inline-block;
  vertical-align: middle;
  margin-top: 2em;
}

.name {
  font-size: 1.7em;
  text-align: center;
}

.district {
  font-size: 1.1em;
  text-align: center;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}
</style>