import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import intro from '@/components/Intro'
import MyReprs from '@/components/MyReprs'
import ReprDetail from '@/components/ReprDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: intro
    },
    {
      path: '/myReprs',
      name: 'myReprs',
      component: MyReprs
    },
    {
      path: '/reprDetail',
      name: 'reprDetail',
      component: ReprDetail
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }

  ]
})
