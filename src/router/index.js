import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import walkThrough from '@/components/WalkThrough'
import myReprs from '@/components/MyReprs'
import reprDetail from '@/components/ReprDetail'
import signUp from '@/components/SignUp'
import promiseDetail from '@/components/PromiseDetail'
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
      path: '/walkThrough',
      name: 'walkThrough',
      component: walkThrough
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUp
    },
    {
      path: '/myReprs',
      name: 'myReprs',
      component: myReprs
    },
    {
      path: '/reprDetail/:type/:name',
      name: 'reprDetail',
      component: reprDetail
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/promiseDetail/:type/:city/:district/:key',
      name: 'promiseDetail',
      component: promiseDetail
    }

  ]
})
