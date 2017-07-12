<template>
  <div id="app">
    <div class="ui sidebar inverted vertical menu" id="sidebarMenu">
      <!--<div class="item">
        <div class="ui inverted transparent icon input">
          <input class="prompt" placeholder="공직자 찾기" type="text">
          <i class="search link icon"></i>
        </div>
      </div>-->
      <a class="item" @click="findReprs">공직자 찾기</a>
      <a class="item" @click="seeMyReprs">내 대표자들</a>
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
          <div class="right menu">
            <a class="item" @click="goBack"><i class="arrow left icon"></i></a>
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
    },
    findReprs: function () {
      this.$router.push('/findReprs')
      $('.ui.sidebar').sidebar('hide')
    },
    seeMyReprs: function () {
      this.$router.push('/myReprs')
      $('.ui.sidebar').sidebar('hide')
    },
    goBack: function () {
      this.$router.go(-1)
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
