// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import router from './router'
import '../node_modules/semantic-ui/dist/semantic.css'
import semantic from 'semantic'
import $ from 'jquery'
import 'chart.js'
import 'hchs-vue-charts'

Vue.config.productionTip = false

// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     hello: 'hello'
//   }
// })
/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(window.VueCharts)

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

new Vue({
  store,
  el: '#app', 
  router,
  template: '<App/>',
  components: { App }
})
