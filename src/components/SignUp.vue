<template>
  <div>
    <h1 class="ui dividing header">
      가입
    </h1>
    <form class="ui form">
      <div class="ui dividing header">Account Information</div>
      <div class="field">
        <label>E-mail</label>
        <input name="email" placeholder="E-mail" type="email"></input>
      </div>
      <div class="field">
        <label>Password</label>
        <input name="password" type="password"></input>
      </div>
      <div class="field">
        <label>Confirm Password</label>
        <input type="password"></input>
      </div>

      <div class="ui dividing header">Additional Information</div>
      <!--<div class="two fields">-->
      <div class="field">
        <label>나이</label>
        <input type="number"></input>
      </div>
      <h5 class="ui header">성</h5>
      <div class="ui fluid compact buttons">
        <button class="ui button" :class="gender === 'M'?'secondary':''" @click="gender = 'M'">Male</button>
        <button class="ui button" :class="gender === 'F'?'secondary':''" @click="gender = 'F'">Female</button>
        <button class="ui button" :class="gender === 'O'?'secondary':''" @click="gender = 'O'">Other</button>
        <button class="ui button" :class="gender === 'R'?'secondary':''" @click="gender = 'R'">Rather not say</button>
      </div>
      <!-- <div class="inline fields" id="genderField">
        <label for="gender">Gender</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="gender"></input>
            <label>M</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="gender"></input>
            <label>F</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="gender"></input>
            <label>Other</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="gender"></input>
            <label>Don't want to answer</label>
          </div>
        </div>
      </div> -->
      <!--</div>-->
      <h5 class="ui header">어디에 사십니까?</h5>
      <div class="two fields">
        <div class="field">
          <label>도 / 시</label>
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
        </div>
        <div class="field">
          <label>시 / 구 / 군</label>
          <select class="ui fluid search selection dropdown" :value="district" @change="onDistrictChanged($event.target.value)">
            <option v-for="(dist, idx) in districts" :key="dist" :value="idx">{{dist}}</option>
            <!--<option value="dong">동구</option>
            <option value="jung">중구</option>
            <option value="seo">서구</option>
            <option value="yuseong">유성구</option>
            <option value="daedeok">대덕구</option>-->
          </select>
        </div>
      </div>
      <div class="field">
        <label>직업</label>
        <select class="ui fluid dropdown">
          <option value="student">학생</option>
          <option value="whitecollar">사무직</option>
          <option value="bluecollar">생산직</option>
          <option value="selfemployment">자영업자</option>
          <option value="unemployed">무직</option>
        </select>
      </div>
    </form>
    <br>
    <button class="ui primary button" @click="onSubmit">계속</button>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data: function () {
    return {
      gender: ''
    }
  },
  computed: {
    city: function () { return this.$store.state.city },
    district: function () { return this.$store.state.district },
    districts: function () { 
      return this.$store.state.districts[this.city] 
    }
  },
  methods: {
    onSubmit: function () {
      console.log('onSubmit!!')
      if(this.district != 0){
        this.$router.push('chooseInterest')
      }
    },
    onCityChanged: function (value) {
      this.$store.commit('setCity', value)
      this.$store.commit('setDistrict', 0)
      // $('select.dropdown').dropdown('clear')

    },
    onDistrictChanged: function (value) {
      this.$store.commit('setDistrict', value)
    }
  },
  mounted: function () {
    // $('select.dropdown').dropdown()
    $('.ui.dropdown').dropdown()
  }
}
</script>

<style scoped>
#genderField {
  float: center;
}
</style>