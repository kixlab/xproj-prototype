<template>
  <div id="app">
    <div class="ui right sidebar inverted vertical menu" id="sidebarMenu">
      <!--<div class="item">
        <div class="ui inverted transparent icon input">
          <input class="prompt" placeholder="공직자 찾기" type="text">
          <i class="search link icon"></i>
        </div>
      </div>-->
      <a class="item" @click="seeFavPromises">내가 좋아한 공약 보기</a>
      <a class="item" @click="seePersonalizedPromises">추천 공약 보기</a>
      <a class="item">공약 찾기</a>
      <a class="item" @click="findReprs">공직자 찾기</a>
      <a class="item" @click="seeMyReprs">내 대표자들</a>
    </div>
    <div class="pusher">
      <div class="ui container">
        <div class="ui top inverted fixed menu">
          <div class="item">
            <a @click="goBack" v-if="backEnabled()"><i class="arrow left icon"></i></a>
          </div>
          <div class="ui item middle-item">
            <router-link to="/personalizedPromises" id="logo" >ProgressBook</router-link>
          </div>
          <div class="right menu">
            <a class="item" @click="toggleSidebar"> <i class="sidebar icon"></i></a>
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
    seeFavPromises: function () {
      this.$router.push('/favoritePromises')
      $('.ui.sidebar').sidebar('hide')
    },
    seePersonalizedPromises: function () {
      this.$router.push('/personalizedPromises')
      $('.ui.sidebar').sidebar('hide')
    },
    goBack: function () {
      this.$router.go(-1)
    },
    backEnabled: function() {
      console.log(this.$router.history.current.fullPath);
      return this.$router.history.current.fullPath !== '/';
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
.ui.menu .item.middle-item {
  flex: 1;
  justify-content: center;
}
/*#sidebarMenu {
  padding-top: 2em;
}*/
</style>
