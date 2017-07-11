<template>
  <div id="app" class="ui container">
    <div class="ui top inverted fixed menu">
      <div class="ui item">
        <router-link to="/myReprs" id="logo">ProgressBook</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
let reprs = []
let promises = []
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  background: url(assets/logo.png) 50% 50% no-repeat;
  background-size: auto 44px;
  text-indent: -999px;
  width: 130px;
}
</style>
