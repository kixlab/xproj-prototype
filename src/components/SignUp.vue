<template>
  <div>
    <h1 class="ui dividing header">
      가입
    </h1>
    <form class="ui form">
      <div class="ui dividing header">계정 정보</div>
      <div class="field">
        <label>사용자 이름</label>
        <input name="userName" placeholder="사이트에서 사용하실 이름을 적어주세요" type="text" v-model="userName"></input>
      </div>
      <div class="field">
        <label>E-mail</label>
        <input name="email" placeholder="E-mail" type="email" v-model="email"></input>
      </div>
      <div class="field">
        <label>비밀번호</label>
        <input name="password" type="password" v-model="password1"></input>
      </div>
      <div class="field">
        <label>비밀번호 재입력</label>
        <input type="password" v-model="password2"></input>
      </div>

      <div class="ui dividing header">추가 정보</div>
      <!--<div class="two fields">-->
      <div class="field">
        <label>나이</label>
        <input type="number"></input>
      </div>
      <h5 class="ui header">성별</h5>
      <div class="ui fluid compact buttons">
        <button class="ui button" :class="gender === 'M'?'secondary':''" @click.prevent="gender = 'M'">남</button>
        <button class="ui button" :class="gender === 'F'?'secondary':''" @click.prevent="gender = 'F'">여</button>
        <button class="ui button" :class="gender === 'O'?'secondary':''" @click.prevent="gender = 'O'">그 외</button>
        <button class="ui button" :class="gender === 'R'?'secondary':''" @click.prevent="gender = 'R'">무응답</button>
      </div>
      <h5 class="ui header">어디에 사십니까?</h5>
      <div class="two fields">
        <div class="field">
          <label>시 / 도</label>
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
          <label>시 / 군 / 구</label>
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
      gender: '',
      userName: '',
      email: '',
      password1: '',
      password2: '',
      authURL: 'http://34.208.245.104:8000/api/auth/signup/'
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
      this.$store.commit('setName', this.userName)
      let formData = new FormData()
      formData.append('email', this.email)
      formData.append('username', this.userName)
      formData.append('password1', this.password1)
      formData.append('password2', this.password2)
      if(this.district != 0){
        this.$http.post(this.authURL, formData)
        .then((res) => {
          console.log(res.body)
          this.$router.push('chooseInterest')
          // this.$store.commit('setToken', res)
        }, (res) => {
          console.log('err')
          console.log(res)
        })
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