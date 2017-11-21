// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import '../node_modules/semantic-ui/dist/semantic.css'
import semantic from 'semantic'
import $ from 'jquery'
import 'chart.js'
import 'hchs-vue-charts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueAxios, axios)
Vue.use(window.VueCharts)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://34.208.245.104:8000',
  providers: {
    oauth2: {
      name: 'custom',
      url: '/oauth/authorize',
      clientId: 'webapp',
      authorizationEndpoint: 'http://34.208.245.104:8000/oauth/authorize/',
      responseType: 'code',
      responseParams: {
        code: 'code',
        clientId: 'clientId',
        redirectUri: 'redirectUri'
      }
    }
  }
})
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
