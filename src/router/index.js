import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import intro from '@/components/Intro'
import MyReprs from '@/components/MyReprs'
import ReprDetail from '@/components/ReprDetail'
import SignUp from '@/components/SignUp'
import promiseDetail from '@/components/promiseDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
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
    },
    {
      path: '/promiseDetail',
      name: 'promiseDetail',
      component: promiseDetail
    }

  ]
})
