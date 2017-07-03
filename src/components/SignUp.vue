<template>
  <div>
    <h1 class="ui dividing header">
      Sign-up form
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
        <label>Age</label>
        <input type="number"></input>
      </div>
      <div class="inline fields" id="genderField">
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
      </div>
      <!--</div>-->
      <div class="two fields">
        <div class="field">
          <label>Address</label>
          <select class="ui fluid dropdown">
            <option value="daejeon">대전광역시</option>
            <option value="seoul">서울특별시</option>
            <option value="busan">부산광역시</option>
            <option value="daegu">대구광역시</option>
            <option value="gwangju">광주광역시</option>
            <option value="ulsan">울산광역시</option>
          </select>
        </div>
        <div class="field">
          <select class="ui fluid dropdown">
            <option value="dong">동구</option>
            <option value="jung">중구</option>
            <option value="seo">서구</option>
            <option value="yuseong">유성구</option>
            <option value="daedeok">대덕구</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>Job Type</label>
        <select class="ui fluid dropdown">
          <option value="student">학생</option>
          <option value="whitecollar">사무직</option>
          <option value="bluecollar">생산직</option>
          <option value="selfemployment">자영업자</option>
        </select>
      </div>
      <button class="ui button" @click="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  methods: {
    onSubmit: function () {
      this.$router.push('intro')
    }
  },
  mounted: function () {
    $('select.dropdown').dropdown()
  }
}
</script>

<style scoped>
#genderField {
  float: center;
}
</style>