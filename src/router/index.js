import Vue from 'vue'
import Router from 'vue-router'
import walkThrough from '@/components/WalkThrough'
import myReprs from '@/components/MyReprs'
import reprDetail from '@/components/ReprDetail'
import signUp from '@/components/SignUp'
import promiseDetail from '@/components/PromiseDetail'
import intro from '@/components/Intro'
import findReprs from '@/components/FindReprs'
import chooseInterest from '@/components/ChooseInterest'
import favoritePromises from '@/components/FavoritePromises'
import personalizedPromises from '@/components/PersonalizedPromises'
import flippedTagger from '@/components/FlippedTagger'
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
      path: '/flippedTagger/:keyword',
      name: 'flippedTagger',
      component: flippedTagger
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
      path: '/reprDetail/:city/:district',
      name: 'reprDetail',
      component: reprDetail
    },
    {
      path: '/promiseDetail/:city/:district/:key',
      name: 'promiseDetail',
      component: promiseDetail
    },
    {
      path: '/findReprs',
      name: 'findReprs',
      component: findReprs
    },
    {
      path: '/chooseInterest',
      name: 'chooseInterest',
      component: chooseInterest
    },
    {
      path: '/favoritePromises',
      name: 'favoritePromises',
      component: favoritePromises
    },
    {
      path: '/personalizedPromises',
      name: 'personalizedPromises',
      component: personalizedPromises
    }

  ]
})
