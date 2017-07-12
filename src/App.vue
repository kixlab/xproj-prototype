<template>
  <div id="app">
    <div class="ui sidebar inverted vertical menu" id="sidebarMenu">
      <!--<div class="item">
        <div class="ui inverted transparent icon input">
          <input class="prompt" placeholder="공직자 찾기" type="text">
          <i class="search link icon"></i>
        </div>
      </div>-->
      <router-link class="item" to="/findReprs">공직자 찾기</router-link>
      <router-link class="item" to="/myReprs">내 대표자들</router-link>
    </div>
    <div class="pusher">
      <div class="ui container">
        <div class="ui top inverted fixed menu">
          <div class="item">
            <a @click="toggleSidebar"> <i class="sidebar icon"></i></a>
          </div>
          <div class="ui item">
            <router-link to="/myReprs" id="logo" >ProgressBook</router-link>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
let reprs = []
let promises = []
export default {
  name: 'app',
  methods: {
    toggleSidebar: function () {
      $('.ui.sidebar').sidebar('toggle')
    }
  }
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

/*#sidebarMenu {
  padding-top: 2em;
}*/
</style>
