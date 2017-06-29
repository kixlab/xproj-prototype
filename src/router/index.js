import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import intro from '@/components/Intro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: intro
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }

  ]
})
